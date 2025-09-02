import type { DevToArticle, DevToApiError } from '../types/api';

export class DevToApiService {
  private static readonly BASE_URL = 'https://dev.to/api';

  /**
   * Extract article ID from dev.to URL
   * Supports formats:
   * - https://dev.to/username/article-title-123
   * - https://dev.to/username/article-title-123/comments
   */
  private extractArticleId(url: string): number | null {
    try {
      const parsed = new URL(url);
      if (parsed.hostname !== 'dev.to') {
        return null;
      }

      // Remove leading slash and split path
      const pathParts = parsed.pathname.slice(1).split('/');

      // Need at least username and article slug
      if (pathParts.length < 2) {
        return null;
      }

      // Get the article slug (second part)
      const articleSlug = pathParts[1];

      // Extract ID from the end of the slug (format: title-123)
      const idMatch = articleSlug.match(/-(\d+)$/);

      if (!idMatch) {
        return null;
      }

      return parseInt(idMatch[1], 10);
    } catch {
      return null;
    }
  }

  /**
   * Validate if URL is a dev.to article URL
   */
  public isValidDevToUrl(url: string): boolean {
    return this.extractArticleId(url) !== null;
  }

  /**
   * Fetch article data from dev.to API
   */
  public async fetchArticle(url: string): Promise<DevToArticle> {
    const articleId = this.extractArticleId(url);

    if (!articleId) {
      throw new Error('Invalid dev.to URL format');
    }

    try {
      const response = await fetch(`${DevToApiService.BASE_URL}/articles/${articleId}`);

      if (!response.ok) {
        const errorData: DevToApiError = {
          error: `Failed to fetch article: ${response.status} ${response.statusText}`,
          status: response.status,
        };
        throw new Error(errorData.error);
      }

      const article: DevToArticle = await response.json();
      return article;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Unknown error occurred while fetching article');
    }
  }

  /**
   * Test if dev.to API is accessible
   */
  public async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${DevToApiService.BASE_URL}/articles?per_page=1`);
      return response.ok;
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const devToApi = new DevToApiService();
