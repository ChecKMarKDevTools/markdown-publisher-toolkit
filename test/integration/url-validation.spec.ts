import { test, expect } from '@playwright/test';

test.describe('dev.to URL Validation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('accepts valid dev.to URLs', async ({ page }) => {
    const urlInput = page.getByLabel('dev.to Article URL');

    // Test valid URLs
    const validUrls = [
      'https://dev.to/username/article-title',
      'https://dev.to/ben/state-of-the-web-crawling-in-2024',
      'https://dev.to/anchildress1/my-article-title',
      'https://dev.to/devteam/there-s-a-new-dev-theme-in-town',
      'https://dev.to/username/article-title/comments',
    ];

    for (const url of validUrls) {
      await urlInput.fill(url);

      // Should not show error
      await expect(page.getByText('Please enter a valid dev.to URL')).not.toBeVisible();

      // Convert button should be enabled
      await expect(page.getByRole('button', { name: /convert/i })).toBeEnabled();
    }
  });

  test('rejects invalid URLs', async ({ page }) => {
    const urlInput = page.getByLabel('dev.to Article URL');

    // Test invalid URLs
    const invalidUrls = [
      'https://google.com',
      'https://medium.com/article',
      'https://dev.to', // No path
      'https://dev.to/', // Empty path
      'https://dev.to/username', // No article slug
      'not-a-url',
      '',
    ];

    for (const url of invalidUrls) {
      await urlInput.fill(url);

      if (url.length > 0) {
        // Should show error for non-empty invalid URLs
        await expect(page.getByText(/Please enter a valid dev.to URL/)).toBeVisible();
      }

      // Convert button should be disabled
      await expect(page.getByRole('button', { name: /convert/i })).toBeDisabled();
    }
  });

  test('shows proper placeholder and help text', async ({ page }) => {
    const urlInput = page.getByLabel('dev.to Article URL');

    await expect(urlInput).toHaveAttribute('placeholder', 'https://dev.to/username/article-title');
    await expect(
      page.getByText('Paste the full URL of the dev.to article you want to convert'),
    ).toBeVisible();
  });
});
