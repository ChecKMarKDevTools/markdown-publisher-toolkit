# Contributing to Markdown Publisher Toolkit

Thank you for your interest in contributing! This guide covers everything you need to know to get started.

## Development Setup

### Prerequisites

- **Node.js 18+** (with npm)
- **Git** for version control
- **Modern browser** for testing

### Initial Setup

```bash
# Clone the repository
git clone <repository-url>
cd markdown-publisher-toolkit

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Install git hooks
npx lefthook install

# Start development server
npm run dev
```

## Development Workflow

### 1. Create Feature Branch

```bash
git checkout -b feat/your-feature-name
```

### 2. Make Changes

Follow the project structure and coding conventions:

```
src/
├── components/          # React components
├── services/           # Business logic and API services
├── types/              # TypeScript type definitions
├── utils/              # Helper functions
└── styles/             # CSS and styling
```

### 3. Run Tests

```bash
# Run all tests
npm test

# Run unit tests with coverage
npm run test:coverage

# Run integration tests
npm run test:integration
```

### 4. Quality Checks

The git hooks will automatically run on commit/push, but you can run manually:

```bash
# Format code
npm run format

# Lint code
npm run lint

# Spell check
npx cspell "**/*.{js,ts,tsx,md,json}"

# Build check
npm run build
```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define proper types and interfaces
- Avoid `any` type - use proper typing
- Use strict null checks

```typescript
// ✅ Good
interface ArticleData {
  title: string;
  content: string;
  publishedAt: Date | null;
}

// ❌ Avoid
const data: any = fetchData();
```

### React Components

- Use functional components with hooks
- Implement proper error boundaries
- Use TypeScript for props and state
- Follow accessibility best practices

```typescript
interface Props {
  title: string;
  onSubmit: (data: FormData) => void;
}

export const MyComponent: React.FC<Props> = ({ title, onSubmit }) => {
  // Component implementation
};
```

### Services and Utilities

- Keep business logic separate from UI
- Use dependency injection patterns
- Implement proper error handling
- Add comprehensive unit tests

```typescript
export class ApiService {
  constructor(private baseUrl: string) {}

  async fetchData(): Promise<ApiResponse> {
    try {
      // Implementation
    } catch (error) {
      throw new ServiceError('Failed to fetch data', error);
    }
  }
}
```

## Testing Guidelines

### Unit Tests

- Test individual functions and components
- Mock external dependencies
- Aim for 85%+ coverage
- Use descriptive test names

```typescript
describe('MarkdownProcessor', () => {
  it('should convert markdown to HTML with proper formatting', () => {
    const processor = new MarkdownProcessor();
    const result = processor.process('# Title\n\nContent');
    expect(result).toContain('<h1>Title</h1>');
  });
});
```

### Integration Tests

- Test complete user workflows
- Use real browser interactions
- Handle async operations properly
- Test error states and edge cases

```typescript
test('should complete article conversion flow', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Article URL').fill('https://dev.to/example');
  await page.getByRole('button', { name: /convert/i }).click();
  await expect(page.getByText('Conversion completed!')).toBeVisible();
});
```

## Git Workflow

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

feat(api): add support for dev.to article fetching
fix(ui): resolve form validation errors
docs(readme): update installation instructions
test(unit): add tests for markdown processor
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Pull Requests

1. **Create descriptive PR title** following conventional commits
2. **Fill out PR template** with context and testing info
3. **Ensure all checks pass** (tests, linting, build)
4. **Request review** from maintainers
5. **Address feedback** promptly

### Review Process

- **Code quality**: Follow established patterns
- **Test coverage**: Ensure adequate testing
- **Documentation**: Update docs for new features
- **Performance**: Consider impact on bundle size
- **Security**: Review for potential vulnerabilities

## Architecture Guidelines

### Service Layer

- **Single Responsibility**: Each service has one clear purpose
- **Dependency Injection**: Services receive dependencies via constructor
- **Error Handling**: Use custom error classes with proper context
- **Async/Await**: Prefer async/await over Promises

### State Management

- **Local State**: Use React hooks for component state
- **Shared State**: Consider Context API for complex state
- **Form State**: Use controlled components with validation
- **Error State**: Always handle and display errors gracefully

### API Integration

- **Type Safety**: Define interfaces for all API responses
- **Error Handling**: Implement retry logic and user-friendly errors
- **Loading States**: Show appropriate loading indicators
- **Caching**: Consider caching for frequently accessed data

## Common Patterns

### Error Handling

```typescript
// Service layer
export class ServiceError extends Error {
  constructor(
    message: string,
    public cause?: unknown,
    public code?: string,
  ) {
    super(message);
    this.name = 'ServiceError';
  }
}

// Component layer
const [error, setError] = useState<string | null>(null);

try {
  await service.performAction();
  setError(null);
} catch (err) {
  setError(err instanceof Error ? err.message : 'Unknown error');
}
```

### Loading States

```typescript
const [loading, setLoading] = useState(false);

const handleSubmit = async () => {
  setLoading(true);
  try {
    await performAsyncAction();
  } finally {
    setLoading(false);
  }
};
```

### Form Validation

```typescript
const [formData, setFormData] = useState<FormData>({});
const [errors, setErrors] = useState<FormErrors>({});

const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};
  if (!data.url) errors.url = 'URL is required';
  if (!isValidUrl(data.url)) errors.url = 'Invalid URL format';
  return errors;
};
```

## Performance Guidelines

### Bundle Size

- **Import only what you need**: Use tree-shaking friendly imports
- **Lazy loading**: Load components on demand when possible
- **Bundle analysis**: Regularly check bundle size impact

### Runtime Performance

- **Memoization**: Use React.memo and useMemo for expensive operations
- **Debouncing**: Debounce user input for API calls
- **Virtualization**: Consider for large lists

### Network Optimization

- **Request batching**: Combine related API calls
- **Caching**: Cache responses when appropriate
- **Compression**: Ensure proper compression is enabled

## Security Considerations

### Input Validation

- **Sanitize all inputs**: Never trust user input
- **URL validation**: Verify URLs before processing
- **XSS prevention**: Escape HTML content properly

### API Security

- **Rate limiting**: Respect API rate limits
- **Error messages**: Don't expose sensitive information
- **HTTPS only**: Always use secure connections

## Documentation

### Code Documentation

- **JSDoc comments**: Document public APIs
- **README updates**: Keep README current with changes
- **Type definitions**: Use self-documenting type names

### User Documentation

- **Feature documentation**: Document new features
- **API changes**: Document breaking changes
- **Migration guides**: Provide upgrade instructions

## Getting Help

### Resources

- **Project documentation**: Check `/docs` directory
- **Test examples**: Review existing tests for patterns
- **Code examples**: Look at similar implementations

### Communication

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and ideas
- **Pull Request Comments**: For code-specific questions

## Release Process

### Version Management

- **Semantic versioning**: Follow semver for releases
- **Changelog**: Maintain clear changelog
- **Breaking changes**: Document breaking changes clearly

### Quality Gates

All changes must pass:

- ✅ Unit tests (85%+ coverage)
- ✅ Integration tests
- ✅ Linting and formatting
- ✅ Build process
- ✅ Type checking
- ✅ Code review

Thank you for contributing to making this project better! 🚀
