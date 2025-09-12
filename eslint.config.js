import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import cspellPlugin from '@cspell/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: [
      '**/dist/**',
      '**/*.md',
      '**/*.mmd',
      '**/.env*',
      '.gitignore',
      'package.json',
      'package-lock.json',
      'frontend/coverage/**',
      'frontend/playwright-report/**',
      'frontend/test-results/**',
      'backend/coverage/**',
      'coverage/**',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
  },
  {
    files: ['*.js', 'scripts/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@cspell': cspellPlugin,
    },
    rules: {
      '@cspell/spellchecker': ['warn', { autoFix: true }],
      'no-warning-comments': ['error', { terms: ['eslint-disable'], location: 'anywhere' }],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    },
  },
  {
    files: ['frontend/src/**/*.{jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@cspell': cspellPlugin,
      '@typescript-eslint': tsPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs['recommended-latest'].rules,
      ...reactRefresh.configs.vite.rules,
      'no-unused-vars': 'off', // Turn off base rule
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      'react/jsx-uses-react': 'off', // With React 17+ and the new JSX Transform
      'react/jsx-uses-vars': 'error', // enforces that variables used in JSX are properly recognized
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      '@cspell/spellchecker': ['warn', { autoFix: true }],
      'no-warning-comments': ['error', { terms: ['eslint-disable'], location: 'anywhere' }],
    },
  },
  // Node.js JavaScript files in backend
  {
    files: ['backend/src/**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@cspell': cspellPlugin,
    },
    rules: {
      '@cspell/spellchecker': ['warn', { autoFix: true }],
      'no-warning-comments': ['error', { terms: ['eslint-disable'], location: 'anywhere' }],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    },
  },
  // TypeScript files in monorepo packages
  {
    files: ['frontend/src/**/*.ts', 'backend/src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@cspell': cspellPlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-unused-vars': 'off', // Turn off base rule
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@cspell/spellchecker': ['warn', { autoFix: true }],
      'no-warning-comments': ['error', { terms: ['eslint-disable'], location: 'anywhere' }],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    },
  },
  {
    files: ['**/test/**/*', '**/src/__tests__/**/*', '**/tests-e2e/**/*'],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.vitest,
        global: 'writable',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'CatchClause',
          message:
            'Do not use catch statements in test files. Use expect(...).rejects or .toThrow() for error assertions.',
        },
      ],
      // Allow unused vars in tests (helpers, parameter documentation, etc.).
      'no-unused-vars': 'off', // Turn off base rule
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    files: ['scripts/**/*'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['**/*.config.js', 'scripts/**/*'],
    rules: {
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
    },
  },
];
