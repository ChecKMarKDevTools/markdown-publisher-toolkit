import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CoderLegionHtmlGenerator } from '../../src/services/html-generator';

// Mock the inline-css-processor module
vi.mock('../../src/services/inline-css-processor', () => ({
  inlineCSSProcessor: {
    inlineCSS: vi.fn((html: string) =>
      html.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '<!-- CSS inlined -->'),
    ),
  },
}));

describe('CoderLegionHtmlGenerator', () => {
  let generator: CoderLegionHtmlGenerator;

  beforeEach(() => {
    generator = new CoderLegionHtmlGenerator();
    vi.clearAllMocks();
  });

  const mockMetadata = {
    description: 'Test article description',
    canonicalUrl: 'https://dev.to/testuser/test-article',
    coverImage: 'https://example.com/cover.jpg',
    author: 'Test User',
    publishedAt: '2024-01-01T12:00:00Z',
    tags: ['javascript', 'testing', 'webdev'],
  };

  describe('generateHtml', () => {
    it('should generate complete HTML document with proper structure', () => {
      const title = 'Test Article Title';
      const content = '<p>This is test content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('<!DOCTYPE html>');
      expect(result).toContain('<html lang="en">');
      expect(result).toContain('</html>');
      expect(result).toContain('<head>');
      expect(result).toContain('<body>');
      expect(result).toContain(content);
    });

    it('should include proper meta tags', () => {
      const title = 'Test Article Title';
      const content = '<p>Test content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('<meta charset="UTF-8">');
      expect(result).toContain(
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      );
      expect(result).toContain(
        '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">',
      );
      expect(result).toContain('<meta name="googlebot" content="index, follow">');
      expect(result).toContain(`<meta name="description" content="${mockMetadata.description}">`);
      expect(result).toContain(`<meta name="author" content="${mockMetadata.author}">`);
    });

    it('should include canonical URL', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain(`<link rel="canonical" href="${mockMetadata.canonicalUrl}">`);
    });

    it('should include Open Graph meta tags', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('<meta property="og:type" content="article">');
      expect(result).toContain(`<meta property="og:title" content="${title}">`);
      expect(result).toContain(
        `<meta property="og:description" content="${mockMetadata.description}">`,
      );
      expect(result).toContain(`<meta property="og:url" content="${mockMetadata.canonicalUrl}">`);
      expect(result).toContain(
        `<meta property="og:image" content="${mockMetadata.coverImage}?v=2">`,
      );
    });

    it('should include Twitter Card meta tags', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('<meta property="twitter:card" content="summary_large_image">');
      expect(result).toContain(`<meta property="twitter:title" content="${title}">`);
      expect(result).toContain(
        `<meta property="twitter:description" content="${mockMetadata.description}">`,
      );
      expect(result).toContain(
        `<meta property="twitter:image" content="${mockMetadata.coverImage}?v=2">`,
      );
    });

    it('should include structured data (JSON-LD)', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('<script type="application/ld+json">');
      expect(result).toContain('"@context": "https://schema.org"');
      expect(result).toContain('"@type": "Article"');
      expect(result).toContain(`"headline": "${title}"`);
      expect(result).toContain('"@type": "Person"');
      expect(result).toContain(`"name": "${mockMetadata.author}"`);
      expect(result).toContain(`"datePublished": "${mockMetadata.publishedAt}"`);
      expect(result).toContain(`"url": "${mockMetadata.canonicalUrl}"`);
    });

    it('should add version parameter to cover image', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain(`${mockMetadata.coverImage}?v=2`);
    });

    it('should handle missing cover image gracefully', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';
      const metadataWithoutCover = { ...mockMetadata, coverImage: '' };

      const result = generator.generateHtml(title, content, metadataWithoutCover);

      expect(result).not.toContain('<meta property="og:image"');
      expect(result).not.toContain('<meta property="twitter:image"');
      expect(result).not.toContain('class="article-cover"');
    });

    it('should include article tags', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      mockMetadata.tags.forEach((tag) => {
        expect(result).toContain(`<span class="tag" itemprop="keywords">#${tag}</span>`);
        expect(result).toContain(`<meta name="article:tag" content="${tag}">`);
      });
    });

    it('should handle empty tags array', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';
      const metadataWithoutTags = { ...mockMetadata, tags: [] };

      const result = generator.generateHtml(title, content, metadataWithoutTags);

      expect(result).not.toContain('class="article-tags"');
    });

    it('should include accessibility features', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain(
        '<a href="#main-content" class="skip-link">Skip to main content</a>',
      );
      expect(result).toContain('role="main" id="main-content"');
      expect(result).toContain('role="contentinfo"');
      expect(result).toContain('role="complementary"');
      expect(result).toContain('aria-label=');
      expect(result).toContain('loading="lazy"');
    });

    it('should include semantic HTML structure', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('<article itemscope itemtype="https://schema.org/Article">');
      expect(result).toContain('<header class="article-header">');
      expect(result).toContain('<main class="article-content"');
      expect(result).toContain('<footer class="article-footer"');
      expect(result).toContain('itemprop="headline"');
      expect(result).toContain('itemprop="author"');
      expect(result).toContain('itemprop="datePublished"');
      expect(result).toContain('itemprop="articleBody"');
    });

    it('should escape HTML in metadata', () => {
      const title = 'Title with <script>alert("xss")</script>';
      const content = '<p>Content</p>';
      const maliciousMetadata = {
        ...mockMetadata,
        description: 'Description with <script>alert("xss")</script>',
        author: 'Author with <script>alert("xss")</script>',
      };

      const result = generator.generateHtml(title, content, maliciousMetadata);

      expect(result).not.toContain('<script>alert("xss")</script>');
      expect(result).toContain('&lt;script&gt;');
      expect(result).toContain('&quot;');
    });

    it('should format published date correctly', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('January 1, 2024');
      expect(result).toContain(`datetime="${mockMetadata.publishedAt}"`);
    });

    it('should include Verdent attribution in footer', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      expect(result).toContain('Converted by Verdent Deck');
      expect(result).toContain('verdent@codeck.ai');
      expect(result).toContain('Originally published at');
    });

    it('should call inline CSS processor', () => {
      const title = 'Test Article';
      const content = '<p>Content</p>';

      const result = generator.generateHtml(title, content, mockMetadata);

      // Should have called inlineCSS and replaced style tags
      expect(result).toContain('<!-- CSS inlined -->');
      expect(result).not.toContain('<style>');
    });
  });

  describe('URL version parameter handling', () => {
    it('should add version parameter to valid URLs', () => {
      const metadataWithHttpUrl = {
        ...mockMetadata,
        coverImage: 'http://example.com/image.jpg',
      };

      const result = generator.generateHtml('Test', '<p>Content</p>', metadataWithHttpUrl);

      expect(result).toContain('http://example.com/image.jpg?v=2');
    });

    it('should handle invalid URLs gracefully', () => {
      const metadataWithInvalidUrl = {
        ...mockMetadata,
        coverImage: 'not-a-valid-url',
      };

      const result = generator.generateHtml('Test', '<p>Content</p>', metadataWithInvalidUrl);

      expect(result).toContain('not-a-valid-url');
    });

    it('should preserve existing query parameters', () => {
      const metadataWithQueryParams = {
        ...mockMetadata,
        coverImage: 'https://example.com/image.jpg?width=800&height=600',
      };

      const result = generator.generateHtml('Test', '<p>Content</p>', metadataWithQueryParams);

      expect(result).toContain('width=800');
      expect(result).toContain('height=600');
      expect(result).toContain('v=2');
    });
  });
});
