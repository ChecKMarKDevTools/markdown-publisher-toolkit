# Markdown Publisher Toolkit

Convert dev.to articles to optimized HTML with SEO, accessibility, and inline CSS processing.

## Badges

[![License Polyform Shield 1.0.0 Badge](https://img.shields.io/badge/Polyform%20Shield%201.0.0-fe864d?label=License\&labelColor=gray\&style=for-the-badge)](./LICENSE) ![React Badge](https://img.shields.io/badge/v19.1.1-gray?logo=react\&logoColor=000\&label=React\&labelColor=61DAFB\&style=for-the-badge) ![Vite Badge](https://img.shields.io/badge/v7.1.4-gray?style=for-the-badge\&logo=vite\&logoColor=fff\&label=Vite\&labelColor=646CFF) ![MUI Badge](https://img.shields.io/badge/v7.3.2-gray?logo=mui\&logoColor=fff\&label=MUI\&labelColor=007FFF\&style=for-the-badge) ![remark Badge](https://img.shields.io/badge/family-gray?logo=remark\&label=Remark\&labelColor=d80502\&logoColor=fff\&style=for-the-badge) ![Vitest Badge](https://img.shields.io/badge/v3.2.4-gray?logo=vitest\&logoColor=fff\&label=Vitest\&labelColor=6E9F18\&style=for-the-badge)

## Dev Dependencies

![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=fff\&style=for-the-badge) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint\&logoColor=fff\&style=for-the-badge) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier\&logoColor=000\&style=for-the-badge) ![CSpell Badge](https://img.shields.io/badge/cspell-f5ec00?style=for-the-badge) ![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright\&logoColor=fff\&style=for-the-badge) ![Commitlint](https://img.shields.io/badge/Commitlint-121212?logo=conventionalcommits\&logoColor=fff\&style=for-the-badge) ![Conventional Commits Badge](https://img.shields.io/badge/Conventional%20Commits-FE5196?logo=conventionalcommits\&logoColor=fff\&style=for-the-badge) ![Lefthook](https://img.shields.io/badge/Lefthook-FF5A18?logo=git\&logoColor=fff\&style=for-the-badge)

---

## Features ✨

- **Dev Community Integration** - Fetch articles directly from dev.to API
- **Markdown Processing** - Clean, semantic HTML conversion
- **SEO & Accessibility** - Meta tags, ARIA labels, semantic structure
- **CSS Inlining** - Platform-ready styling
- **Export Options** - Copy to clipboard or download HTML

---

## Quick Start 🚀

**Prerequisites:** Node.js 18+ and modern browser

```bash
git clone https://github.com/your-username/markdown-publisher-toolkit.git
cd markdown-publisher-toolkit
npm install
npm run dev
```

Visit `http://localhost:3000` to start converting articles.

## How to Use 📖

1. Paste a dev.to article URL
2. Click "Convert Article"
3. Preview the result
4. Copy or download the HTML

**Supported URLs:**

- `https://dev.to/username/article-title`
- `https://dev.to/organization/article-title`

## 🧪 Testing

```bash
npm test            # Full test suite with coverage
npm run test:unit   # Unit tests only
npm run test:integration # Browser tests
```

---

**Current Status:** 85% minimum coverage maintained

## Development 🛠️

**Project Structure:**

```
src/
├── components/     # React UI components
├── services/       # Business logic (API, processors)
├── hooks/         # Custom React hooks
├── types/         # TypeScript definitions
└── App.tsx        # Main application
```

**Scripts:**

```bash
npm run dev         # Development server
npm run build       # Production build
npm run lint        # Code linting
npm run format      # Code formatting
```

---

## Contributing 🤝

1. Install dependencies: `npm install`
2. Install Playwright: `npx playwright install`
3. Install git hooks: `npx lefthook install`
4. Run tests: `npm test`

**Requirements:**

- 85% test coverage minimum
- TypeScript strict mode
- ESLint + Prettier compliance
- Conventional Commits format

---

## License 📄

Every project has to have a stack of fine print somewhere. _Keep going, keep going, keep going..._ Here's mine, as painless as possible:

You know where [the license](./LICENSE) is, but I'll sum it up: **this is not open source** (even though you can still do just about anything you want with it). As long as you're not turning it into the next big SaaS or selling subscriptions in the cloud, then have fun! Else, **you've gotta ask me first.**

Basically? This project's got boundaries. Be cool, don't try to sneak it into a product launch, and we'll get along just fine. 😘

---

## Acknowledgments 🙏

- **Coder Legion**: For the inspiration—and for letting me ask a million questions.
  - Seriously, Andrew had _no idea_ what he was signing up for, but deserves a medal for surviving the process. 🏅
- **Dev Community**: For providing an excellent API, an even better platform, and the kind of dev crowd that makes all of this even remotely possible.
  - Without y'all, this project probably wouldn't exist in the first place.

### The ones who had no idea they helped

...but this would've been impossible without them

- **Unified Ecosystem**: For all the markdown magic under the hood. Seriously, your tools just work.
- **Verdent Team**: For building the kind of platform that makes "just one more experiment" dangerously easy.

---

## Contact 📧

- **Project Maintainer**: Ashley Childress
- **Email**: <human@checkmarkdevtools.dev>

[![dev.to Badge](https://img.shields.io/badge/dev.to-0A0A0A?logo=devdotto\&logoColor=fff\&style=for-the-badge)](https://dev.to/anchildress1) [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin\&logoColor=white\&style=for-the-badge)](https://linkedin.com/in/anchildress1) [![Medium](https://img.shields.io/badge/Medium-12100E?logo=medium\&logoColor=white\&style=for-the-badge)](https://medium.com/@anchildress1) [![Reddit Badge](https://img.shields.io/badge/Reddit-FF4500?logo=reddit\&logoColor=fff\&style=for-the-badge)](https://www.reddit.com/user/anchildress1/) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube\&logoColor=white\&style=for-the-badge)](https://youtube.com/@anchildress1) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge\&logo=buy-me-a-coffee\&logoColor=black)](https://www.buymeacoffee.com/anchildress1)

---

🛡️ _This project was created with the help of AI._
