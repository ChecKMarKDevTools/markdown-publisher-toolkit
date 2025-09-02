/**
 * Coder Legion HTML template generator
 */
import { inlineCSSProcessor } from './inline-css-processor';

export class CoderLegionHtmlGenerator {
  /**
   * Generate a complete HTML document optimized for Coder Legion
   */
  public generateHtml(
    title: string,
    content: string,
    metadata: {
      description: string;
      canonicalUrl: string;
      coverImage: string;
      author: string;
      publishedAt: string;
      tags: string[];
    },
  ): string {
    // Process cover image URL with ?v=2 parameter
    const coverImageUrl = metadata.coverImage ? this.addVersionParam(metadata.coverImage) : '';

    const htmlWithStyles = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow">
    <title>${this.escapeHtml(title)}</title>
    <meta name="description" content="${this.escapeHtml(metadata.description)}">
    <link rel="canonical" href="${metadata.canonicalUrl}">
    
    <!-- Schema.org structured data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${this.escapeHtml(title)}",
      "description": "${this.escapeHtml(metadata.description)}",
      "author": {
        "@type": "Person",
        "name": "${this.escapeHtml(metadata.author)}"
      },
      "datePublished": "${metadata.publishedAt}",
      "url": "${metadata.canonicalUrl}",
      ${coverImageUrl ? `"image": "${coverImageUrl}",` : ''}
      "publisher": {
        "@type": "Organization",
        "name": "Verdent Deck",
        "url": "https://codeck.ai"
      },
      "keywords": "${metadata.tags.map((tag) => this.escapeHtml(tag)).join(', ')}",
      "articleSection": "Technology",
      "inLanguage": "en-US"
    }
    </script>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="${this.escapeHtml(title)}">
    <meta property="og:description" content="${this.escapeHtml(metadata.description)}">
    <meta property="og:url" content="${metadata.canonicalUrl}">
    ${coverImageUrl ? `<meta property="og:image" content="${coverImageUrl}">` : ''}
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="${this.escapeHtml(title)}">
    <meta property="twitter:description" content="${this.escapeHtml(metadata.description)}">
    ${coverImageUrl ? `<meta property="twitter:image" content="${coverImageUrl}">` : ''}
    
    <!-- Article metadata -->
    <meta name="author" content="${this.escapeHtml(metadata.author)}">
    <meta name="article:published_time" content="${metadata.publishedAt}">
    ${metadata.tags.map((tag) => `<meta name="article:tag" content="${this.escapeHtml(tag)}">`).join('\n    ')}
    
    <style>
        /* Inline CSS for Coder Legion compatibility */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .article-header {
            margin-bottom: 2rem;
        }
        
        .article-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        
        .article-meta {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        
        .article-cover {
            width: 100%;
            height: auto;
            border-radius: 8px;
            margin-bottom: 2rem;
        }
        
        .article-content h1, .article-content h2, .article-content h3 {
            margin-top: 2rem;
            margin-bottom: 1rem;
        }
        
        .article-content blockquote {
            border-left: 4px solid #e1e8ed;
            padding-left: 1rem;
            margin: 1.5rem 0;
            font-style: italic;
        }
        
        .article-content pre {
            background-color: #f6f8fa;
            border-radius: 6px;
            padding: 1rem;
            overflow-x: auto;
        }
        
        .article-content code {
            background-color: #f6f8fa;
            padding: 0.2rem 0.4rem;
            border-radius: 3px;
            font-size: 0.9em;
        }
        
        .article-content pre code {
            background: none;
            padding: 0;
        }
        
        .article-tags {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid #e1e8ed;
        }
        
        .tag {
            display: inline-block;
            background-color: #f1f3f4;
            color: #5f6368;
            padding: 0.25rem 0.5rem;
            border-radius: 12px;
            font-size: 0.8rem;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
        }
        
        .article-footer {
            margin-top: 3rem;
            padding-top: 2rem;
            border-top: 2px solid #e1e8ed;
            text-align: center;
            color: #666;
            font-size: 0.9rem;
        }
        
        /* Accessibility enhancements */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            background: #000;
            color: #fff;
            padding: 8px;
            text-decoration: none;
            border-radius: 3px;
            z-index: 1000;
        }
        
        .skip-link:focus {
            top: 6px;
        }
        
        /* Focus styles for better accessibility */
        a:focus,
        button:focus {
            outline: 2px solid #005fcc;
            outline-offset: 2px;
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
            body {
                background: #fff;
                color: #000;
            }
            
            .article-content blockquote {
                border-left-color: #000;
            }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            * {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <article itemscope itemtype="https://schema.org/Article">
        <header class="article-header">
            <h1 class="article-title" itemprop="headline">${this.escapeHtml(title)}</h1>
            <div class="article-meta" role="contentinfo" aria-label="Article metadata">
                By <strong itemprop="author" itemscope itemtype="https://schema.org/Person">
                    <span itemprop="name">${this.escapeHtml(metadata.author)}</span>
                </strong> • 
                Published on <time itemprop="datePublished" datetime="${metadata.publishedAt}">
                    ${new Date(metadata.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                </time>
            </div>
            ${coverImageUrl ? `<img src="${coverImageUrl}" alt="${this.escapeHtml(title)}" class="article-cover" itemprop="image" loading="lazy">` : ''}
        </header>
        
        <main class="article-content" itemprop="articleBody" role="main" id="main-content">
            ${content}
        </main>
        
        ${
          metadata.tags.length > 0
            ? `
        <aside class="article-tags" role="complementary" aria-label="Article tags">
            ${metadata.tags.map((tag) => `<span class="tag" itemprop="keywords">#${this.escapeHtml(tag)}</span>`).join('')}
        </aside>
        `
            : ''
        }
        
        <footer class="article-footer" role="contentinfo" aria-label="Article attribution">
            <p>Originally published at <a href="${metadata.canonicalUrl}" target="_blank" rel="noopener noreferrer" aria-label="View original article on dev.to (opens in new tab)">${metadata.canonicalUrl}</a></p>
            <p><em>Converted by Verdent Deck</em> • <a href="mailto:verdent@codeck.ai" aria-label="Contact Verdent Deck">verdent@codeck.ai</a></p>
        </footer>
    </article>
</body>
</html>`;

    // Convert CSS in <style> tags to inline styles for Coder Legion compatibility
    return inlineCSSProcessor.inlineCSS(htmlWithStyles);
  }

  /**
   * Add ?v=2 parameter to image URL for cache busting
   */
  private addVersionParam(url: string): string {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('v', '2');
      return urlObj.toString();
    } catch {
      // If URL parsing fails, return original URL
      return url;
    }
  }

  /**
   * Escape HTML special characters
   */
  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }
}

// Export singleton instance
export const htmlGenerator = new CoderLegionHtmlGenerator();
