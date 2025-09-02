import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { htmlGenerator } from './html-generator';
import type { DevToArticle, ConversionResult } from '../types/api';

export class MarkdownProcessor {
  private processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify);

  /**
   * Convert dev.to article markdown to HTML
   */
  public async convertArticle(
    article: DevToArticle,
    canonicalUrl: string,
  ): Promise<ConversionResult> {
    try {
      // Process the markdown content
      const processedHtml = await this.processor.process(article.body_markdown);
      const contentHtml = String(processedHtml);

      const metadata = {
        title: article.title,
        description: article.description,
        canonicalUrl,
        coverImage: article.cover_image,
        author: article.user.name,
        publishedAt: article.published_at,
        tags: article.tag_list,
      };

      // Generate complete HTML document
      const fullHtml = htmlGenerator.generateHtml(article.title, contentHtml, metadata);

      return {
        success: true,
        html: fullHtml,
        metadata,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error instanceof Error
            ? `Markdown processing failed: ${error.message}`
            : 'Unknown error during markdown processing',
      };
    }
  }

  /**
   * Test if markdown processor is working correctly
   */
  public async testProcessor(): Promise<boolean> {
    try {
      const testMarkdown = '# Test\n\nThis is a **test** markdown.';
      const result = await this.processor.process(testMarkdown);
      return String(result).includes('<h1>Test</h1>');
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const markdownProcessor = new MarkdownProcessor();
