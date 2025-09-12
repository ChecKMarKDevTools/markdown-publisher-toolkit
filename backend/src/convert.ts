#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

/**
 * Convert markdown content to sanitized HTML suitable for Coder Legion publishing.
 * This intentionally leaves styling concerns to the consumer but ensures basic
 * GFM + frontmatter are handled.
 *
 * @param {string} markdown Raw markdown string
 * @returns {Promise<string>} HTML output
 */
export const convertMarkdown = async (markdown: string): Promise<string> => {
  // Create a more permissive schema by merging with default
  const schema = {
    ...defaultSchema,
    tagNames: [
      ...(defaultSchema.tagNames || []),
      'p',
      'strong',
      'em',
      'ul',
      'ol',
      'li',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'blockquote',
      'code',
      'pre',
      'a',
      'img',
      'br',
      'hr',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'div',
      'span',
    ],
    attributes: {
      ...defaultSchema.attributes,
      img: ['src', 'alt', 'title'],
      a: ['href', 'title'],
      '*': (defaultSchema.attributes && defaultSchema.attributes['*']) || [],
    },
  };

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(markdown);
  return String(file);
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const inputPath = process.argv[2];
  if (!inputPath) {
    console.error('Usage: convert <markdown-file>');
    process.exit(1);
  }
  const md = readFileSync(inputPath, 'utf8');
  convertMarkdown(md)
    .then((html) => {
      process.stdout.write(html);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
