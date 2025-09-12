import { describe, it, expect, vi, beforeEach } from 'vitest';
import { DevToApiService } from '../../src/services/devto-api';
import type { DevToArticle } from '../../src/types/api';

// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('DevToApiService', () => {
  let service: DevToApiService;

  beforeEach(() => {
    service = new DevToApiService();
    vi.clearAllMocks();
  });

  describe('isValidDevToUrl', () => {
    it('should validate correct dev.to URLs', () => {
      const validUrls = [
        'https://dev.to/username/article-title',
        'https://dev.to/ben/state-of-the-web-crawling-in-2024',
        'https://dev.to/anchildress1/my-article-title',
        'https://dev.to/devteam/there-s-a-new-dev-theme-in-town',
        'https://dev.to/username/article-title/comments',
      ];

      validUrls.forEach((url) => {
        expect(service.isValidDevToUrl(url)).toBe(true);
      });
    });

    it('should reject invalid URLs', () => {
      const invalidUrls = [
        'https://google.com',
        'https://medium.com/article',
        'https://dev.to',
        'https://dev.to/',
        'https://dev.to/username',
        'not-a-url',
        '',
      ];

      invalidUrls.forEach((url) => {
        expect(service.isValidDevToUrl(url)).toBe(false);
      });
    });

    it('should handle malformed URLs gracefully', () => {
      const malformedUrls = [
        'dev.to/username/article',
        'http://dev.to/username/article',
        'https://dev.to/username/',
        'https://dev.to//article',
      ];

      malformedUrls.forEach((url) => {
        expect(() => service.isValidDevToUrl(url)).not.toThrow();
      });
    });
  });

  describe('fetchArticle', () => {
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
      body_markdown: '# Test content',
    };

    it('should fetch article successfully', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
        json: async () => mockArticle,
      });

      const result = await service.fetchArticle('https://dev.to/testuser/test-article');

      expect(mockFetch).toHaveBeenCalledWith('https://dev.to/api/articles/testuser/test-article', {
        headers: {
          'User-Agent': 'Markdown Publisher Toolkit (verdent@codeck.ai)',
        },
      });
      expect(result).toEqual(mockArticle);
    });

    it('should throw error for invalid URL', async () => {
      await expect(service.fetchArticle('https://google.com')).rejects.toThrow(
        'Invalid dev.to URL format',
      );
    });

    it('should handle API errors', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
        status: 404,
        statusText: 'Not Found',
      });

      await expect(
        service.fetchArticle('https://dev.to/testuser/nonexistent-article'),
      ).rejects.toThrow('Failed to fetch article: 404 Not Found');
    });

    it('should handle network errors', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      await expect(service.fetchArticle('https://dev.to/testuser/test-article')).rejects.toThrow(
        'Network error',
      );
    });

    it('should handle unknown errors', async () => {
      mockFetch.mockRejectedValueOnce('Unknown error');

      await expect(service.fetchArticle('https://dev.to/testuser/test-article')).rejects.toThrow(
        'Unknown error occurred while fetching article',
      );
    });
  });

  describe('testConnection', () => {
    it('should return true for successful connection', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: true,
      });

      const result = await service.testConnection();

      expect(mockFetch).toHaveBeenCalledWith('https://dev.to/api/articles?per_page=1');
      expect(result).toBe(true);
    });

    it('should return false for failed connection', async () => {
      mockFetch.mockResolvedValueOnce({
        ok: false,
      });

      const result = await service.testConnection();
      expect(result).toBe(false);
    });

    it('should return false for network errors', async () => {
      mockFetch.mockRejectedValueOnce(new Error('Network error'));

      const result = await service.testConnection();
      expect(result).toBe(false);
    });
  });
});
