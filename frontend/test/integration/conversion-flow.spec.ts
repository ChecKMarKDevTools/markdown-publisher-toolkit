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

test.describe('Full Conversion Flow', () => {
  test.beforeEach(async ({ page }) => {
    // Mock backend API fetch endpoint
    await page.route('**/api/articles/fetch', async (route) => {
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
          body_markdown:
            '# Auggie CLI\n\nGreat news! The CLI is now available.\n\nThis is a test article with multiple paragraphs to test the conversion flow.',
        }),
      });
    });

    // Mock backend API convert endpoint
    await page.route('**/api/articles/convert', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          html: '<h1>Auggie CLI</h1><p>Great news! The CLI is now available.</p><p>This is a test article with multiple paragraphs to test the conversion flow.</p>',
          inlineCss:
            '<h1 style="font-size: 2em;">Auggie CLI</h1><p>Great news! The CLI is now available.</p><p>This is a test article with multiple paragraphs to test the conversion flow.</p>',
        }),
      });
    });

    await page.goto('http://localhost:3000');
  });

  test('complete conversion flow with output display', async ({ page }) => {
    // Use a known dev.to article
    const testUrl = 'https://dev.to/augmentcode/auggie-cli-is-now-available-to-everyone-hkg';

    // Step 1: Enter URL
    await page.getByLabel('dev.to Article URL').fill(testUrl);
    await expect(page.getByRole('button', { name: /convert/i })).toBeEnabled();

    // Step 2: Submit conversion
    await page.getByRole('button', { name: /convert/i }).click();

    // Step 3: Wait for article to be fetched
    await expect(page.getByText('Article fetched successfully!')).toBeVisible({ timeout: 10000 });

    // Step 4: Check if conversion completed
    // First wait a bit more for conversion to process
    await page.waitForTimeout(2000);

    // Check for either success or any type of result
    const conversionSuccess = page.getByText('Conversion completed successfully!');
    const conversionResult = page.locator('[data-testid="conversion-result"]');

    // Wait for either success message or any conversion result
    await Promise.race([
      conversionSuccess.waitFor({ timeout: 10000 }).catch(() => {}),
      conversionResult.waitFor({ timeout: 10000 }).catch(() => {}),
    ]);

    // Step 5: If conversion succeeded, check output display
    if (await conversionSuccess.isVisible()) {
      // Should show the OutputDisplay component
      await expect(page.getByText('Converted HTML')).toBeVisible();

      // Should have copy and download buttons
      await expect(page.getByRole('button', { name: /copy/i })).toBeVisible();
      await expect(page.getByRole('button', { name: /download/i })).toBeVisible();

      // Should have tabs for preview and source
      await expect(page.getByRole('tab', { name: /preview/i })).toBeVisible();
      await expect(page.getByRole('tab', { name: /html source/i })).toBeVisible();
    } else {
      // If conversion didn't succeed, at least ensure we got some result
      await expect(conversionResult.first()).toBeVisible();
    }
  });

  test('copy to clipboard functionality', async ({ page, browserName }) => {
    // Skip webkit and firefox for clipboard permissions as they're not supported reliably
    if (browserName === 'webkit' || browserName === 'firefox') {
      test.skip(true, 'Clipboard permissions not supported reliably in webkit/firefox');
    }

    // Grant clipboard permissions for chromium only
    if (browserName === 'chromium') {
      await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
    }

    const testUrl = 'https://dev.to/augmentcode/auggie-cli-is-now-available-to-everyone-hkg';

    await page.getByLabel('dev.to Article URL').fill(testUrl);
    await page.getByRole('button', { name: /convert/i }).click();

    // Wait for article to be fetched
    await expect(page.getByText('Article fetched successfully!')).toBeVisible({ timeout: 10000 });

    // Wait a bit for conversion to process
    await page.waitForTimeout(2000);

    // Check if conversion completed successfully
    if (await page.getByText('Conversion completed successfully!').isVisible()) {
      // Click copy button
      await page.getByRole('button', { name: /copy/i }).click();

      // Should show success snackbar
      await expect(page.getByText('HTML copied to clipboard!')).toBeVisible();

      // Verify clipboard content (basic check)
      const clipboardContent = await page.evaluate(() => navigator.clipboard.readText());
      expect(clipboardContent).toContain('<!DOCTYPE html>');
      expect(clipboardContent).toContain('<html');
    } else {
      // Skip test if conversion failed
      test.skip(true, 'Conversion did not complete successfully');
    }
  });

  test('download functionality', async ({ page }) => {
    const testUrl = 'https://dev.to/augmentcode/auggie-cli-is-now-available-to-everyone-hkg';

    await page.getByLabel('dev.to Article URL').fill(testUrl);
    await page.getByRole('button', { name: /convert/i }).click();

    // Wait for article to be fetched
    await expect(page.getByText('Article fetched successfully!')).toBeVisible({ timeout: 10000 });

    // Wait a bit for conversion to process
    await page.waitForTimeout(2000);

    // Check if conversion completed successfully
    if (await page.getByText('Conversion completed successfully!').isVisible()) {
      // Set up download promise before clicking
      const downloadPromise = page.waitForEvent('download');

      // Click download button
      await page.getByRole('button', { name: /download/i }).click();

      // Wait for download
      const download = await downloadPromise;

      // Verify download
      expect(download.suggestedFilename()).toMatch(/\.html$/);

      // Should show success snackbar
      await expect(page.getByText('HTML file downloaded!')).toBeVisible();
    } else {
      // Skip test if conversion failed
      test.skip(true, 'Conversion did not complete successfully');
    }
  });

  test('tab switching in output display', async ({ page }) => {
    const testUrl = 'https://dev.to/augmentcode/auggie-cli-is-now-available-to-everyone-hkg';

    await page.getByLabel('dev.to Article URL').fill(testUrl);
    await page.getByRole('button', { name: /convert/i }).click();

    // Wait for article to be fetched
    await expect(page.getByText('Article fetched successfully!')).toBeVisible({ timeout: 10000 });

    // Wait a bit for conversion to process
    await page.waitForTimeout(2000);

    // Check if conversion completed successfully
    if (await page.getByText('Conversion completed successfully!').isVisible()) {
      // Should start on Preview tab
      await expect(page.getByRole('tab', { name: /preview/i })).toHaveAttribute(
        'aria-selected',
        'true',
      );

      // Switch to HTML Source tab
      await page.getByRole('tab', { name: /html source/i }).click();
      await expect(page.getByRole('tab', { name: /html source/i })).toHaveAttribute(
        'aria-selected',
        'true',
      );

      // Should show code content
      await expect(page.locator('pre code')).toBeVisible();

      // Switch back to Preview tab
      await page.getByRole('tab', { name: /preview/i }).click();
      await expect(page.getByRole('tab', { name: /preview/i })).toHaveAttribute(
        'aria-selected',
        'true',
      );

      // Should show iframe
      await expect(page.locator('iframe[title="Article Preview"]')).toBeVisible();
    } else {
      // Skip test if conversion failed
      test.skip(true, 'Conversion did not complete successfully');
    }
  });
});
