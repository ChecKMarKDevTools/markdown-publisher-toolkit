/**
 * Coder Legion HTML template generator
 */
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

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${this.escapeHtml(title)}</title>
    <meta name="description" content="${this.escapeHtml(metadata.description)}">
    <link rel="canonical" href="${metadata.canonicalUrl}">
    
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
    </style>
</head>
<body>
    <article>
        <header class="article-header">
            <h1 class="article-title">${this.escapeHtml(title)}</h1>
            <div class="article-meta">
                By <strong>${this.escapeHtml(metadata.author)}</strong> • 
                Published on ${new Date(metadata.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
            </div>
            ${coverImageUrl ? `<img src="${coverImageUrl}" alt="${this.escapeHtml(title)}" class="article-cover">` : ''}
        </header>
        
        <div class="article-content">
            ${content}
        </div>
        
        ${
          metadata.tags.length > 0
            ? `
        <div class="article-tags">
            ${metadata.tags.map((tag) => `<span class="tag">#${this.escapeHtml(tag)}</span>`).join('')}
        </div>
        `
            : ''
        }
        
        <footer class="article-footer">
            <p>Originally published at <a href="${metadata.canonicalUrl}" target="_blank" rel="noopener">${metadata.canonicalUrl}</a></p>
            <p><em>Converted by Verdent Deck</em> • <a href="mailto:verdent@codeck.ai">verdent@codeck.ai</a></p>
        </footer>
    </article>
</body>
</html>`;
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
