import { describe, it, expect } from 'vitest';
import { convertMarkdown } from '../../src/convert.js';

describe('convertMarkdown', () => {
  it('should convert basic markdown to HTML', async () => {
    const markdown = '# Hello World\n\nThis is a **bold** test.';
    const html = await convertMarkdown(markdown);

    expect(html).toContain('<h1>Hello World</h1>');
    expect(html).toContain('<strong>bold</strong>');
    expect(html).toContain('<p>This is a');
  });

  it('should handle empty markdown', async () => {
    const markdown = '';
    const html = await convertMarkdown(markdown);

    expect(html).toBe('');
  });

  it('should convert GitHub Flavored Markdown features', async () => {
    const markdown = `
# Test Document

## Code Block
\`\`\`javascript
console.log('Hello World');
\`\`\`

## Table
| Name | Age |
|------|-----|
| John | 30  |

## Strikethrough
~~deleted text~~
`;

    const html = await convertMarkdown(markdown);

    expect(html).toContain('<table>');
    expect(html).toContain('<del>deleted text</del>');
    expect(html).toContain('console.log');
  });

  it('should handle frontmatter', async () => {
    const markdown = `---
title: Test Article
author: Test Author
---

# Content Here

This is the main content.`;

    const html = await convertMarkdown(markdown);

    // Frontmatter should be removed from output
    expect(html).not.toContain('title: Test Article');
    expect(html).toContain('<h1>Content Here</h1>');
    expect(html).toContain('This is the main content.');
  });

  it('should sanitize potentially dangerous HTML', async () => {
    const markdown = `
# Safe Content

<script>alert('xss')</script>

<div onclick="alert('click')">Click me</div>

<img src="javascript:alert('img')" alt="test">
`;

    const html = await convertMarkdown(markdown);

    // Should not contain script tags or javascript: URLs
    expect(html).not.toContain('<script>');
    expect(html).not.toContain('onclick');
    expect(html).not.toContain('javascript:');
    expect(html).toContain('<h1>Safe Content</h1>');
  });

  it('should preserve safe HTML elements', async () => {
    const markdown = `
# Document

<p>Paragraph with <strong>bold</strong> and <em>italic</em></p>

<ul>
  <li>List item</li>
</ul>
`;

    const html = await convertMarkdown(markdown);

    expect(html).toContain('<h1>Document</h1>');
    expect(html).toContain('<strong>bold</strong>');
    expect(html).toContain('<em>italic</em>');
    expect(html).toContain('<ul>');
    expect(html).toContain('<li>List item</li>');
  });

  it('should handle complex nested markdown structures', async () => {
    const markdown = `
# Main Title

## Section 1

> This is a blockquote with **bold** text.
> 
> - Item 1
> - Item 2

## Section 2

1. First ordered item
2. Second item with \`inline code\`
3. Third item

### Subsection

Link to [example](https://example.com) and ![alt text](image.jpg).
`;

    const html = await convertMarkdown(markdown);

    expect(html).toContain('<blockquote>');
    expect(html).toContain('<ol>');
    expect(html).toContain('<a href="https://example.com">example</a>');
    expect(html).toContain('<img src="image.jpg" alt="alt text">');
    expect(html).toContain('<code>inline code</code>');
  });
});
