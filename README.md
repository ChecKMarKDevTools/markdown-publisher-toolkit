# Markdown Publisher Toolkit

[![License Apache-2.0 Badge](https://img.shields.io/badge/License-Apache%202.0-blue.svg?logo=apache\&logoColor=white\&style=for-the-badge)](https://www.typescriptlang.org/)
![TypeScript Badge](https://img.shields.io/badge/v5.9.2-gray?logo=typescript\&logoColor=fff\&label=TypeScript\&labelColor=3178C6\&style=for-the-badge) ![React Badge](https://img.shields.io/badge/v19.1.1-gray?logo=react\&logoColor=000\&label=React\&labelColor=61DAFB\&style=for-the-badge) ![Vite Badge](https://img.shields.io/badge/v7.1.4-gray?style=for-the-badge\&logo=vite\&logoColor=fff\&label=Vite\&labelColor=646CFF) ![MUI Badge](https://img.shields.io/badge/v7.3.2-gray?logo=mui\&logoColor=fff\&label=MUI\&labelColor=007FFF\&style=for-the-badge) ![remark Badge](https://img.shields.io/badge/family-gray?logo=remark\&label=Remark\&labelColor=d80502\&logoColor=fff\&style=for-the-badge) ![Vitest Badge](https://img.shields.io/badge/v3.2.4-gray?logo=vitest\&logoColor=fff\&label=Vitest\&labelColor=6E9F18\&style=for-the-badge)

## Dev Dependencies

![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint\&logoColor=fff\&style=for-the-badge) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier\&logoColor=000\&style=for-the-badge) ![CSpell Badge](https://img.shields.io/badge/cspell-f5ec00?style=for-the-badge) ![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright\&logoColor=fff\&style=for-the-badge) ![Commitlint](https://img.shields.io/badge/Commitlint-121212?logo=conventionalcommits\&logoColor=fff\&style=for-the-badge) ![Conventional Commits Badge](https://img.shields.io/badge/Conventional%20Commits-FE5196?logo=conventionalcommits\&logoColor=fff\&style=for-the-badge) ![Lefthook](https://img.shields.io/badge/Lefthook-FF5A18?logo=git\&logoColor=fff\&style=for-the-badge)

A powerful web application that converts dev.to articles to optimized HTML for Coder Legion, with support for SEO, accessibility, and inline CSS processing.

## ✨ Features

### Core Functionality

- **Dev.to Integration**: Fetch articles directly from dev.to API using article URLs
- **Markdown Processing**: Convert markdown content to clean, semantic HTML
- **HTML Generation**: Create SEO-optimized, accessible HTML documents
- **CSS Inlining**: Process CSS for email/platform compatibility
- **Multi-format Output**: HTML with embedded styles ready for any platform

### User Experience

- **Intuitive Interface**: Clean, Material-UI based design with Google Fonts
- **Real-time Validation**: Instant URL validation and error handling
- **Live Preview**: Preview converted content before downloading
- **Multiple Export Options**: Copy to clipboard or download as HTML file
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Developer Experience

- **TypeScript**: Full type safety and excellent developer experience
- **Modern React**: Functional components with hooks and latest best practices
- **Comprehensive Testing**: Unit tests with Vitest and integration tests with Playwright
- **Quality Assurance**: ESLint, Prettier, spell-checking, and git hooks
- **Documentation**: Extensive docs for contributors and users

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** (with npm)
- **Modern browser** (Chrome, Firefox, Safari)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/markdown-publisher-toolkit.git
cd markdown-publisher-toolkit

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to use the application.

## 📖 Usage

### Basic Workflow

1. **Open the application** in your browser
2. **Paste a dev.to article URL** (e.g., `https://dev.to/username/article-title`)
3. **Click "Convert Article"** to process the content
4. **Preview the result** in the built-in viewer
5. **Copy to clipboard** or **download as HTML file**

### Supported URLs

The toolkit supports standard dev.to article URLs:

```
✅ https://dev.to/username/article-title
✅ https://dev.to/username/article-title/comments
✅ https://dev.to/organization/article-title
```

### Output Features

The generated HTML includes:

- **SEO Optimization**: Meta tags, Open Graph, Twitter Cards, Schema.org markup
- **Accessibility**: ARIA labels, semantic HTML, skip links, proper heading structure
- **Responsive Design**: Mobile-friendly with proper viewport settings
- **Performance**: Inline CSS, optimized images, minimal external dependencies
- **Canonical URLs**: Properly credited back to original dev.to article

## 🧪 Testing

### Running Tests

```bash
# Run full test suite (unit + integration + coverage)
npm test

# Run only unit tests
npm run test:unit

# Run with coverage report
npm run test:coverage

# Run integration tests
npm run test:integration
```

### Test Coverage

The project maintains **85% minimum coverage** across:

- ✅ **55 unit tests** covering all core services
- ✅ **15 integration tests** covering user workflows
- ✅ **Multi-browser support** (Chrome, Firefox, Safari)
- ✅ **Automated quality gates** via git hooks

For detailed testing information, see our [Testing Guide](docs/testing.md).

## 🛠️ Development

### Project Structure

```
src/
├── components/           # React UI components
│   ├── Header.tsx       # App header with branding
│   ├── MainForm.tsx     # Main conversion form
│   └── OutputDisplay.tsx # Results display and export
├── services/            # Business logic layer
│   ├── devto-api.ts     # Dev.to API integration
│   ├── markdown-processor.ts # Markdown to HTML conversion
│   ├── html-generator.ts # SEO-optimized HTML generation
│   └── inline-css-processor.ts # CSS inlining
├── hooks/               # Custom React hooks
│   └── useDevToConversion.ts # Main conversion workflow
├── types/               # TypeScript definitions
│   └── api.ts          # API response types
└── App.tsx             # Main application component
```

### Key Technologies

- **Frontend**: React 19, TypeScript, Material-UI, Vite
- **Processing**: Unified/Remark/Rehype ecosystem for markdown
- **Styling**: Emotion CSS-in-JS with Material-UI theming
- **Testing**: Vitest (unit) + Playwright (integration)
- **Quality**: ESLint, Prettier, lefthook git hooks

### Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Testing
npm run test            # Full test suite with coverage
npm run test:unit       # Unit tests only
npm run test:integration # Browser tests only
npm run test:coverage   # Coverage report

# Quality
npm run lint            # ESLint checking
npm run format          # Prettier formatting
npm run spellcheck      # Spell checking
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](docs/contributing.md) for details.

### Development Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Install git hooks
npx lefthook install

# Run tests to verify setup
npm test
```

### Quality Standards

All contributions must meet:

- ✅ **85% test coverage** minimum
- ✅ **TypeScript strict mode** compliance
- ✅ **ESLint + Prettier** formatting
- ✅ **Conventional Commits** format
- ✅ **All tests passing** (unit + integration)

## 📋 Requirements & Compatibility

### Technical Requirements

- **Node.js**: 18.0.0 or higher
- **NPM**: 8.0.0 or higher
- **Browsers**: Chrome 90+, Firefox 88+, Safari 14+

### API Dependencies

- **Dev.to API**: Uses public Forem API (no authentication required)
- **Rate Limits**: Respects dev.to API rate limiting
- **CORS**: Handled via dev.to's public API endpoints

## 🚦 Current Status

### Working Features ✅

- ✅ Dev.to URL validation and article fetching
- ✅ Markdown to HTML conversion with syntax highlighting
- ✅ SEO-optimized HTML generation with meta tags
- ✅ CSS inlining for email/platform compatibility
- ✅ Copy to clipboard and file download
- ✅ Responsive UI with error handling
- ✅ Comprehensive unit test coverage (85%+)

### Known Limitations ⚠️

- **Integration Tests**: Some API integration tests may timeout in CI environments
- **Large Articles**: Very large articles may take longer to process
- **Dev.to API**: Dependent on dev.to API availability and rate limits

### Roadmap 🗺️

- [ ] **Enhanced CSS Support**: More sophisticated CSS selector processing
- [ ] **Batch Processing**: Convert multiple articles at once
- [ ] **Template System**: Custom HTML templates and themes
- [ ] **API Integration**: Additional blog platform support (Medium, Hashnode)
- [ ] **Performance**: Lazy loading and bundle optimization

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Dev.to Community**: For providing an excellent API and platform
- **Unified Ecosystem**: For robust markdown processing tools
- **Material-UI Team**: For beautiful React components
- **Playwright Team**: For excellent testing framework
- **Verdent Team**: For project vision and requirements

## 📧 Contact

- **Project Maintainer**: Ashley Childress
- **Email**: <verdent@codeck.ai>
- **Attribution**: All output includes "Converted by Verdent Deck" footer

---

_This project is part of the Verdent ecosystem, focused on enhancing developer productivity and content creation workflows._
