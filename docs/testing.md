# Testing Guide

This document provides comprehensive information about testing in the Markdown Publisher Toolkit project.

## Overview

The project uses a multi-layered testing approach:

- **Unit Tests**: Fast, isolated tests using Vitest + jsdom
- **Integration Tests**: End-to-end browser tests using Playwright
- **Coverage Enforcement**: 85% minimum coverage for all metrics
- **Quality Gates**: Automated testing through git hooks

## Test Structure

```
test/
├── unit/                    # Unit tests (Vitest)
│   ├── setup.ts            # Test setup and configuration
│   ├── devto-api.test.ts   # API service tests
│   ├── markdown-processor.test.ts
│   ├── html-generator.test.ts
│   └── inline-css-processor.test.ts
└── integration/             # Integration tests (Playwright)
    ├── url-validation.spec.ts
    ├── api-integration.spec.ts
    └── conversion-flow.spec.ts
```

## Getting Started

### Prerequisites

1. **Node.js 18+** - Required for all testing frameworks
2. **Browsers** - Playwright will auto-install Chromium, Firefox, and WebKit

### Installation

```bash
# Install all dependencies (includes test frameworks)
npm install

# Install Playwright browsers (if not already done)
npx playwright install
```

## Running Tests

### Full Test Suite

```bash
# Run all tests (unit + integration) with coverage
npm test
```

### Unit Tests

```bash
# Run unit tests only
npm run test:unit

# Run with coverage report
npm run test:coverage

# Run in watch mode during development
npm run test:watch
```

### Integration Tests

```bash
# Run all integration tests
npm run test:integration

# Run specific test file
npx playwright test url-validation.spec.ts

# Run in specific browser
npx playwright test --project chromium

# Run with UI mode for debugging
npx playwright test --ui
```

## Unit Testing

### Framework: Vitest + jsdom

Unit tests focus on individual functions and components in isolation.

#### Key Features

- **Fast execution** - Runs in milliseconds
- **Mocking support** - Uses `vi.fn()` for external dependencies
- **JSX/React support** - Full React component testing
- **Coverage tracking** - Built-in V8 coverage provider

#### Writing Unit Tests

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { YourService } from '../../src/services/your-service';

describe('YourService', () => {
  let service: YourService;

  beforeEach(() => {
    service = new YourService();
    vi.clearAllMocks();
  });

  it('should perform expected behavior', () => {
    // Arrange
    const input = 'test-input';

    // Act
    const result = service.process(input);

    // Assert
    expect(result).toBe('expected-output');
  });
});
```

#### Mocking Guidelines

```typescript
// Mock fetch globally
const mockFetch = vi.fn();
global.fetch = mockFetch;

// Mock successful API response
mockFetch.mockResolvedValueOnce({
  ok: true,
  json: async () => ({ data: 'mock-data' }),
});

// Mock error response
mockFetch.mockRejectedValueOnce(new Error('Network error'));
```

## Integration Testing

### Framework: Playwright

Integration tests verify the complete user workflow in real browsers.

#### Key Features

- **Multi-browser testing** - Chrome, Firefox, Safari
- **Real browser automation** - Actual user interactions
- **Network interception** - Mock external APIs if needed
- **Visual debugging** - Screenshots and traces on failure

#### Writing Integration Tests

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should complete user workflow', async ({ page }) => {
    // Arrange - Set up test data
    const testInput = 'https://example.com/article';

    // Act - Perform user actions
    await page.getByLabel('Input Field').fill(testInput);
    await page.getByRole('button', { name: /submit/i }).click();

    // Assert - Verify expected outcomes
    await expect(page.getByText('Success!')).toBeVisible();
  });
});
```

#### Best Practices

1. **Use semantic selectors**: Prefer `getByRole`, `getByLabel` over CSS selectors
2. **Wait for state changes**: Use `expect().toBeVisible()` with timeouts
3. **Handle async operations**: Wait for API calls to complete
4. **Test error states**: Include negative test cases
5. **Clean test data**: Ensure tests don't interfere with each other

## Coverage Requirements

### Thresholds (85% minimum)

- **Branches**: 85%
- **Functions**: 85%
- **Lines**: 85%
- **Statements**: 85%

### Coverage Reports

```bash
# Generate coverage report
npm run test:coverage

# View HTML report
open coverage/index.html
```

### Exclusions

The following are excluded from coverage:

- `node_modules/`
- `test/` directory
- `dist/` build output
- `*.d.ts` type definitions
- Configuration files

## Quality Gates

### Git Hooks (lefthook)

#### Pre-commit

- **Format & Lint**: Auto-format and lint staged files
- **Spell Check**: Verify spelling in code and documentation
- **Coverage Check**: Ensure unit tests pass with 85% coverage

#### Pre-push

- **Unit Tests**: All unit tests must pass
- **Build Check**: Project must build successfully

#### Commit Message

- **Conventional Commits**: Enforce commit message format
- **No Warnings**: Treat linting warnings as errors

### Continuous Integration

```bash
# Verify pre-commit hooks work
npm run test:coverage

# Verify pre-push hooks work
npm run test:unit && npm run build
```

## Debugging Tests

### Unit Tests

```bash
# Run tests in debug mode
npm run test:debug

# Run specific test file
npx vitest run path/to/test.ts

# Use console.log for debugging
console.log('Debug value:', variable)
```

### Integration Tests

```bash
# Run with browser UI visible
npx playwright test --headed

# Debug specific test
npx playwright test --debug path/to/test.spec.ts

# Generate trace for failed tests
npx playwright test --trace on
```

### Common Issues

1. **Timing Issues**: Use proper waits instead of fixed delays

   ```typescript
   // ❌ Don't use fixed delays
   await page.waitForTimeout(5000);

   // ✅ Wait for specific conditions
   await expect(element).toBeVisible({ timeout: 30000 });
   ```

2. **Flaky Tests**: Ensure tests are deterministic

   ```typescript
   // ❌ Assuming immediate state changes
   await button.click();
   expect(result).toBeVisible();

   // ✅ Wait for async operations
   await button.click();
   await expect(result).toBeVisible();
   ```

3. **Mock Cleanup**: Always reset mocks between tests
   ```typescript
   beforeEach(() => {
     vi.clearAllMocks();
   });
   ```

## Contributing

### Adding New Tests

1. **Unit Tests**: Add to appropriate file in `test/unit/`
2. **Integration Tests**: Add to appropriate file in `test/integration/`
3. **Coverage**: Ensure new code has adequate test coverage
4. **Documentation**: Update this guide if adding new testing patterns

### Test Organization

- **Group related tests** using `describe` blocks
- **Use descriptive names** that explain the expected behavior
- **Follow AAA pattern**: Arrange, Act, Assert
- **Keep tests focused** - one assertion per test when possible

### Performance Considerations

- **Unit tests should be fast** (< 100ms each)
- **Integration tests can be slower** but avoid unnecessary waits
- **Parallel execution** is enabled for both unit and integration tests
- **Mock external dependencies** to avoid network calls in unit tests

## Troubleshooting

### Common Problems

1. **Tests timeout**: Increase timeout or check for proper waits
2. **Coverage below threshold**: Add tests or check exclusions
3. **Flaky integration tests**: Review timing and state management
4. **Mock issues**: Verify mock setup and cleanup

### Getting Help

1. Check the [Vitest documentation](https://vitest.dev/)
2. Check the [Playwright documentation](https://playwright.dev/)
3. Review existing tests for patterns
4. Ask in project discussions or issues

## Future Improvements

- **Visual regression testing**: Consider adding screenshot comparisons
- **Performance testing**: Add benchmarks for critical paths
- **Accessibility testing**: Integrate automated a11y checks
- **Cross-platform testing**: Extend browser coverage if needed
