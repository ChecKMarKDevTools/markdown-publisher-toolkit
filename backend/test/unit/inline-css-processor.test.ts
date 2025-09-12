import { describe, it, expect, beforeEach } from 'vitest';
import { InlineCSSProcessor } from '../../src/services/inline-css-processor';

describe('InlineCSSProcessor', () => {
  let processor: InlineCSSProcessor;

  beforeEach(() => {
    processor = new InlineCSSProcessor();
  });

  describe('inlineCSS', () => {
    it('should remove style tags and inline CSS', () => {
      const html = `
        <html>
        <head>
          <style>
            body { color: red; font-size: 16px; }
            .title { font-weight: bold; }
          </style>
        </head>
        <body>
          <h1 class="title">Hello World</h1>
        </body>
        </html>
      `;

      const result = processor.inlineCSS(html);

      expect(result).not.toContain('<style>');
      expect(result).not.toContain('</style>');
      expect(result).toContain('style="');
    });

    it('should handle HTML without style tags', () => {
      const html = '<div>No styles here</div>';

      const result = processor.inlineCSS(html);

      expect(result).toBe(html);
    });

    it('should apply body styles', () => {
      const html = `
        <style>
          body { color: red; font-size: 16px; }
        </style>
        <body>Content</body>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<body');
      expect(result).toContain('style="color: red; font-size: 16px"');
    });

    it('should apply class styles', () => {
      const html = `
        <style>
          .highlight { background-color: yellow; color: black; }
        </style>
        <div class="highlight">Highlighted text</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('class="highlight"');
      expect(result).toContain('style="background-color: yellow; color: black"');
    });

    it('should handle multiple classes', () => {
      const html = `
        <style>
          .highlight { background-color: yellow; }
          .bold { font-weight: bold; }
        </style>
        <div class="highlight bold">Text</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('background-color: yellow');
      expect(result).toContain('font-weight: bold');
    });

    it('should handle comma-separated selectors', () => {
      const html = `
        <style>
          .class1, .class2 { color: blue; }
        </style>
        <div class="class1">Text 1</div>
        <div class="class2">Text 2</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('class="class1" style="color: blue"');
      expect(result).toContain('class="class2" style="color: blue"');
    });

    it('should merge with existing inline styles', () => {
      const html = `
        <style>
          .highlight { background-color: yellow; }
        </style>
        <div class="highlight" style="color: red;">Text</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('color: red');
      expect(result).toContain('background-color: yellow');
    });

    it('should apply nested selector styles for h1 elements', () => {
      const html = `
        <style>
          .article-content h1 { color: blue; font-size: 24px; }
        </style>
        <div class="article-content">
          <h1>Main Title</h1>
        </div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<h1');
      expect(result).toContain('style="color: blue; font-size: 24px"');
      expect(result).not.toContain('<style>');
    });

    it('should apply nested selector styles for h2 elements', () => {
      const html = `
        <style>
          .article-content h2 { color: green; margin-top: 2rem; }
        </style>
        <div class="article-content">
          <h2>Section Title</h2>
        </div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<h2');
      expect(result).toContain('style="color: green; margin-top: 2rem"');
      expect(result).not.toContain('<style>');
    });

    it('should apply nested selector styles for h3 elements', () => {
      const html = `
        <style>
          .article-content h3 { color: purple; font-weight: bold; }
        </style>
        <div class="article-content">
          <h3>Subsection Title</h3>
        </div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<h3');
      expect(result).toContain('style="color: purple; font-weight: bold"');
      expect(result).not.toContain('<style>');
    });

    it('should apply nested blockquote styles', () => {
      const html = `
        <style>
          .article-content blockquote { border-left: 4px solid #ccc; padding-left: 1rem; }
        </style>
        <div class="article-content">
          <blockquote>Quote text</blockquote>
        </div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<blockquote');
      expect(result).toContain('style="border-left: 4px solid #ccc; padding-left: 1rem"');
      expect(result).not.toContain('<style>');
    });

    it('should apply nested pre styles', () => {
      const html = `
        <style>
          .article-content pre { background-color: #f6f8fa; padding: 1rem; }
        </style>
        <div class="article-content">
          <pre>Code block content</pre>
        </div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<pre');
      expect(result).toContain('style="background-color: #f6f8fa; padding: 1rem"');
      expect(result).not.toContain('<style>');
    });

    it('should apply nested code styles', () => {
      const html = `
        <style>
          .article-content code { background-color: #f6f8fa; font-family: monospace; }
        </style>
        <div class="article-content">
          <p>Inline <code>code</code> text</p>
        </div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<code');
      expect(result).toContain('style="background-color: #f6f8fa; font-family: monospace"');
      expect(result).not.toContain('<style>');
    });

    it('should remove CSS comments', () => {
      const html = `
        <style>
          /* This is a comment */
          .test { color: red; }
          /* Another comment */
        </style>
        <div class="test">Text</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('style="color: red"');
      expect(result).not.toContain('/* This is a comment */');
    });

    it('should handle malformed CSS gracefully', () => {
      const html = `
        <style>
          .test { color: red
          .other { font-size: 16px; }
        </style>
        <div class="test">Text</div>
        <div class="other">Other text</div>
      `;

      const result = processor.inlineCSS(html);

      // Should not crash and should remove style tag
      expect(result).not.toContain('<style>');
      expect(result).toContain('<div class="test">');
      expect(result).toContain('<div class="other">');
    });

    it('should handle empty style tags', () => {
      const html = `
        <style></style>
        <style>   </style>
        <div>Content</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).not.toContain('<style>');
      expect(result).toContain('<div>Content</div>');
    });

    it('should preserve element attributes order', () => {
      const html = `
        <style>
          .test { color: red; }
        </style>
        <div id="myid" class="test" data-value="123">Content</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('id="myid"');
      expect(result).toContain('class="test"');
      expect(result).toContain('data-value="123"');
      expect(result).toContain('style="color: red"');
    });

    it('should handle complex nested selectors properly', () => {
      const html = `
        <style>
          .article-content h1 { margin-top: 2rem; }
          .article-content h2 { margin-top: 2rem; }
          .article-content h3 { margin-top: 2rem; }
        </style>
        <div class="article-content">
          <h1>H1 Title</h1>
          <h2>H2 Title</h2>
          <h3>H3 Title</h3>
        </div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('<h1');
      expect(result).toContain('<h2');
      expect(result).toContain('<h3');
      expect(result).not.toContain('<style>');
      expect(result).toContain('margin-top: 2rem');
    });

    it('should handle CSS properties with semicolons correctly (simplified)', () => {
      const html = `
        <style>
          .test { 
            color: red; 
            font-size: 16px; 
          }
        </style>
        <div class="test">Content</div>
      `;

      const result = processor.inlineCSS(html);

      expect(result).toContain('color: red');
      expect(result).toContain('font-size: 16px');
    });

    it('should handle style merging with proper separators', () => {
      const html = `
        <style>
          .test { color: blue; }
        </style>
        <div class="test" style="font-size: 16px">Content</div>
      `;

      const result = processor.inlineCSS(html);

      // Should merge properly with semicolon separator
      expect(result).toContain('font-size: 16px');
      expect(result).toContain('color: blue');
      expect(result).toMatch(/style="[^"]*font-size: 16px[^"]*; color: blue[^"]*"/);
    });

    it('should handle empty CSS properties string', () => {
      const html = `
        <style>
          .empty { }
        </style>
        <div class="empty">Content</div>
      `;

      const result = processor.inlineCSS(html);

      // Should not add empty style attribute
      expect(result).toContain('<div class="empty">Content</div>');
      expect(result).not.toContain('style=""');
    });

    it('should handle CSS with only whitespace in properties', () => {
      const html = `
        <style>
          .whitespace {   ; ; ; }
        </style>
        <div class="whitespace">Content</div>
      `;

      const result = processor.inlineCSS(html);

      // Should not add empty style attribute for whitespace-only properties
      expect(result).toContain('<div class="whitespace">Content</div>');
      expect(result).not.toContain('style=""');
    });
  });
});
