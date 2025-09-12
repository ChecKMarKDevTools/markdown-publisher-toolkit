import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    setupFiles: ['./test/unit/setup.ts'],
    exclude: ['**/node_modules/**'],
    include: ['**/test/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**'],
      exclude: ['node_modules/**', 'test/**', 'dist/**', '**/*.d.ts'],
      thresholds: {
        global: {
          branches: 85,
          functions: 85,
          lines: 85,
          statements: 85,
        },
      },
    },
  },
});
