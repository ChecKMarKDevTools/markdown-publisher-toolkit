import { defineConfig, devices } from '@playwright/test';
import { resolve } from 'path';

// Get the root directory (where package.json with workspaces is located)
const getRootDir = () => {
  const cwd = process.cwd();
  if (cwd.endsWith('frontend')) {
    return resolve(cwd, '..');
  }
  return cwd;
};

const rootDir = getRootDir();
const backendDir = resolve(rootDir, 'backend');
const frontendDir = resolve(rootDir, 'frontend');

export default defineConfig({
  testDir: './frontend/test/integration',
  testIgnore: '**/convert-cli.spec.ts',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: [
    {
      command: 'npm run dev',
      url: 'http://localhost:3001/health',
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
      cwd: backendDir,
    },
    {
      command: 'npm run dev',
      url: 'http://localhost:3000',
      reuseExistingServer: !process.env.CI,
      timeout: 120 * 1000,
      cwd: frontendDir,
    },
  ],
});
