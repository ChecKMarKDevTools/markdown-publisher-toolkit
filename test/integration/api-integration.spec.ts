import { test, expect } from '@playwright/test';

// Mock article data for consistent testing
const mockArticleData = {
  id: 12345,
  title: 'Test Article for Integration Tests',
  description: 'This is a test article used for integration testing',
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
  tags: ['testing', 'javascript'],
  tag_list: 'testing, javascript',
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
  body_html: '<h1>Test Content</h1><p>This is test content for integration tests.</p>',
  body_markdown: '# Test Content\n\nThis is test content for integration tests.',
};

test.describe('API Integration Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Mock successful API responses
    await page.route(
      '**/dev.to/api/articles/augmentcode/auggie-cli-is-now-available-to-everyone-hkg',
      async (route) => {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            ...mockArticleData,
            id: 67890,
            title: 'Auggie CLI is now available to everyone!',
            user: {
              ...mockArticleData.user,
              name: 'AugmentCode',
              username: 'augmentcode',
            },
            body_markdown: '# Auggie CLI\n\nGreat news! The CLI is now available.',
          }),
        });
      },
    );

    await page.goto('/');
  });

  test('successfully fetches a mocked dev.to article', async ({ page }) => {
    const testUrl = 'https://dev.to/augmentcode/auggie-cli-is-now-available-to-everyone-hkg';

    await page.getByLabel('dev.to Article URL').fill(testUrl);
    await page.getByRole('button', { name: /convert/i }).click();

    // Wait for article to be fetched successfully
    await expect(page.getByText('Article fetched successfully!')).toBeVisible({ timeout: 10000 });

    // Should show article metadata
    await expect(page.getByText(/by AugmentCode \(@augmentcode\)/)).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Auggie CLI is now available to everyone!' }),
    ).toBeVisible();
  });

  test('handles API errors gracefully', async ({ page }) => {
    // Mock 404 error for non-existent article
    await page.route(
      '**/dev.to/api/articles/nonexistent/article-that-does-not-exist',
      async (route) => {
        await route.fulfill({
          status: 404,
          contentType: 'application/json',
          body: JSON.stringify({ error: 'Not Found' }),
        });
      },
    );

    const invalidUrl = 'https://dev.to/nonexistent/article-that-does-not-exist';

    await page.getByLabel('dev.to Article URL').fill(invalidUrl);
    await page.getByRole('button', { name: /convert/i }).click();

    // Wait for error message
    await expect(page.getByText(/Failed to fetch article/)).toBeVisible({ timeout: 10000 });
  });

  test('shows loading state during conversion', async ({ page }) => {
    // Add delay to mock response to test loading state
    await page.route(
      '**/dev.to/api/articles/ben/state-of-the-web-crawling-in-2024',
      async (route) => {
        // Add a small delay to see loading state
        await new Promise((resolve) => setTimeout(resolve, 1000));
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            ...mockArticleData,
            id: 11111,
            title: 'State of the Web Crawling in 2024',
            user: {
              ...mockArticleData.user,
              name: 'Ben Halpern',
              username: 'ben',
            },
          }),
        });
      },
    );

    const testUrl = 'https://dev.to/ben/state-of-the-web-crawling-in-2024';

    await page.getByLabel('dev.to Article URL').fill(testUrl);

    // Check initial state
    const convertButton = page.getByRole('button', { name: /convert/i });
    await expect(convertButton).toBeEnabled();

    // Click and verify loading state
    await convertButton.click();

    // Should show disabled state during loading
    await expect(convertButton).toBeDisabled();

    // Wait for completion
    await expect(page.getByText('Article fetched successfully!')).toBeVisible({ timeout: 10000 });

    // Button should be enabled again
    await expect(convertButton).toBeEnabled();
  });
});
