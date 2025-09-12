import type { DevToArticle, DevToApiError } from '../types/api';

export class DevToApiService {
  private static readonly BASE_URL = 'https://dev.to/api';

  /**
   * Extract username and slug from dev.to URL
   * Supports formats:
   * - https://dev.to/username/article-slug
   * - https://dev.to/username/article-slug/comments
   */
  private extractArticlePath(url: string): { username: string; slug: string } | null {
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

      const username = pathParts[0];
      const slug = pathParts[1];

      // Basic validation
      if (!username || !slug) {
        return null;
      }

      return { username, slug };
    } catch {
      return null;
    }
  }

  /**
   * Validate if URL is a dev.to article URL
   */
  public isValidDevToUrl(url: string): boolean {
    return this.extractArticlePath(url) !== null;
  }

  /**
   * Fetch article data from dev.to API using username/slug path
   */
  public async fetchArticle(url: string): Promise<DevToArticle> {
    const pathInfo = this.extractArticlePath(url);

    if (!pathInfo) {
      throw new Error('Invalid dev.to URL format');
    }

    try {
      const apiUrl = `${DevToApiService.BASE_URL}/articles/${pathInfo.username}/${pathInfo.slug}`;
      const response = await fetch(apiUrl, {
        headers: {
          'User-Agent': 'Markdown Publisher Toolkit (verdent@codeck.ai)',
        },
      });

      if (!response.ok) {
        const errorData: DevToApiError = {
          error: `Failed to fetch article: ${response.status} ${response.statusText}`,
          status: response.status,
        };
        throw new Error(errorData.error);
      }

      const article = (await response.json()) as DevToArticle;
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
