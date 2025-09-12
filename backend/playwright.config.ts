import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test/integration',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'cli-tests',
      testMatch: 'test/integration/**/*.spec.ts',
    },
  ],
});
