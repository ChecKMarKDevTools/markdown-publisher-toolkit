import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MarkdownProcessor } from '../../src/services/markdown-processor';
import type { DevToArticle, ConversionResult } from '../../src/types/api';

// Mock the html-generator module
vi.mock('../../src/services/html-generator', () => ({
  htmlGenerator: {
    generateHtml: vi.fn(
      (title: string, content: string) =>
        `<html><head><title>${title}</title></head><body>${content}</body></html>`,
    ),
  },
}));

describe('MarkdownProcessor', () => {
  let processor: MarkdownProcessor;

  beforeEach(() => {
    processor = new MarkdownProcessor();
    vi.clearAllMocks();
  });

  describe('testProcessor', () => {
    it('should return true for valid markdown processing', async () => {
      const result = await processor.testProcessor();
      expect(result).toBe(true);
    });
  });

  describe('convertArticle', () => {
    const mockArticle: DevToArticle = {
      id: 123,
      title: 'Test Article',
      description: 'Test description',
      url: 'https://dev.to/testuser/test-article',
      slug: 'test-article',
      path: '/testuser/test-article',
      user: {
        name: 'Test User',
        username: 'testuser',
        twitter_username: 'testuser',
        github_username: 'testuser',
        website_url: 'https://testuser.com',
        profile_image: 'https://example.com/avatar.jpg',
        profile_image_90: 'https://example.com/avatar-90.jpg',
      },
      organization: null,
      tags: ['test', 'article'],
      tag_list: 'test, article',
      canonical_url: 'https://dev.to/testuser/test-article',
      cover_image: 'https://example.com/cover.jpg',
      social_image: 'https://example.com/social.jpg',
      published_at: '2024-01-01T00:00:00Z',
      created_at: '2024-01-01T00:00:00Z',
      edited_at: null,
      crossposted_at: null,
      published_timestamp: '2024-01-01T00:00:00Z',
      reading_time_minutes: 5,
      published: true,
      body_html: '<p>Test content</p>',
      body_markdown:
        '# Test Content\n\nThis is a **test** article with some *italic* text and a [link](https://example.com).\n\n## Subheading\n\n- List item 1\n- List item 2\n\n```javascript\nconsole.log("Hello World");\n```',
    };

    it('should successfully convert markdown to HTML', async () => {
      const canonicalUrl = 'https://original-site.com/article';

      const result: ConversionResult = await processor.convertArticle(mockArticle, canonicalUrl);

      expect(result.success).toBe(true);
      expect(result.html).toContain('<html>');
      expect(result.html).toContain('<title>Test Article</title>');
      expect(result.html).toContain('</html>');
      expect(result.metadata).toEqual({
        title: 'Test Article',
        description: 'Test description',
        canonicalUrl,
        coverImage: 'https://example.com/cover.jpg',
        author: 'Test User',
        publishedAt: '2024-01-01T00:00:00Z',
        tags: ['test', 'article'],
      });
    });

    it('should process markdown content correctly', async () => {
      const result: ConversionResult = await processor.convertArticle(
        mockArticle,
        'https://example.com',
      );

      if (result.success) {
        // The HTML should contain processed markdown elements
        expect(result.html).toContain('<h1>');
        expect(result.html).toContain('<strong>');
        expect(result.html).toContain('<em>');
        expect(result.html).toContain('<a href=');
        expect(result.html).toContain('<h2>');
        expect(result.html).toContain('<ul>');
        expect(result.html).toContain('<li>');
        expect(result.html).toContain('<pre>');
        expect(result.html).toContain('</code>');
      }
    });

    it('should handle articles with empty tag_list', async () => {
      const articleWithoutTags = {
        ...mockArticle,
        tag_list: '',
      };

      const result: ConversionResult = await processor.convertArticle(
        articleWithoutTags,
        'https://example.com',
      );

      expect(result.success).toBe(true);
      if (result.success && result.metadata) {
        expect(result.metadata.tags).toEqual([]);
      }
    });

    it('should handle articles with malformed tag_list', async () => {
      const articleWithMalformedTags = {
        ...mockArticle,
        tag_list: 'tag1, , tag2,  tag3 , ',
      };

      const result: ConversionResult = await processor.convertArticle(
        articleWithMalformedTags,
        'https://example.com',
      );

      expect(result.success).toBe(true);
      if (result.success && result.metadata) {
        expect(result.metadata.tags).toEqual(['tag1', 'tag2', 'tag3']);
      }
    });

    it('should preserve canonical URL', async () => {
      const customCanonicalUrl = 'https://custom-domain.com/my-article';

      const result: ConversionResult = await processor.convertArticle(
        mockArticle,
        customCanonicalUrl,
      );

      expect(result.success).toBe(true);
      if (result.success && result.metadata) {
        expect(result.metadata.canonicalUrl).toBe(customCanonicalUrl);
      }
    });

    it('should handle processing errors gracefully', async () => {
      // Mock the unified processor to throw an error
      const originalProcessor = (processor as any).processor;
      (processor as any).processor = {
        process: vi.fn().mockRejectedValue(new Error('Processing failed')),
      };

      const result: ConversionResult = await processor.convertArticle(
        mockArticle,
        'https://example.com',
      );

      expect(result.success).toBe(false);
      expect(result.error).toContain('Markdown processing failed');

      // Restore the original processor
      (processor as any).processor = originalProcessor;
    });

    it('should sanitize HTML content', async () => {
      const articleWithUnsafeContent = {
        ...mockArticle,
        body_markdown: '# Title\n\n<script>alert("xss")</script>\n\n<p>Safe content</p>',
      };

      const result: ConversionResult = await processor.convertArticle(
        articleWithUnsafeContent,
        'https://example.com',
      );

      expect(result.success).toBe(true);
      if (result.success) {
        // Script tags should be removed by rehype-sanitize
        expect(result.html).not.toContain('<script>');
        expect(result.html).not.toContain('alert');
        // The test should check that the content passed to htmlGenerator was sanitized
        // Since we're using a mock, we just ensure no scripts made it through
      }
    });
  });
});
