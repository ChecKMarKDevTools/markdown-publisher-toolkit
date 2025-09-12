import express from 'express';
import cors from 'cors';
import { devToApi } from './services/devto-api.js';
import { markdownProcessor } from './services/markdown-processor.js';
import type { DevToArticle } from './types/api.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'markdown-publisher-toolkit-backend' });
});

// Fetch article from dev.to
app.post('/api/articles/fetch', async (req, res) => {
  try {
    const { url } = req.body;

    if (!url || typeof url !== 'string') {
      return res.status(400).json({
        error: 'URL is required and must be a string',
      });
    }

    if (!devToApi.isValidDevToUrl(url)) {
      return res.status(400).json({
        error: 'Invalid dev.to URL format',
      });
    }

    const article = await devToApi.fetchArticle(url);
    res.json(article);
  } catch (error) {
    console.error('Error fetching article:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to fetch article',
    });
  }
});

// Convert article to HTML
app.post('/api/articles/convert', async (req, res) => {
  try {
    const { article, canonicalUrl } = req.body;

    if (!article || !canonicalUrl) {
      return res.status(400).json({
        error: 'Article and canonicalUrl are required',
      });
    }

    const result = await markdownProcessor.convertArticle(article as DevToArticle, canonicalUrl);
    res.json(result);
  } catch (error) {
    console.error('Error converting article:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to convert article',
    });
  }
});

// Convert standalone markdown (for CLI compatibility)
app.post('/api/convert/markdown', async (req, res) => {
  try {
    const { markdown } = req.body;

    if (!markdown || typeof markdown !== 'string') {
      return res.status(400).json({
        error: 'Markdown content is required and must be a string',
      });
    }

    const { convertMarkdown } = await import('./convert.js');
    const html = await convertMarkdown(markdown);

    res.json({ html });
  } catch (error) {
    console.error('Error converting markdown:', error);
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to convert markdown',
    });
  }
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use(
  (error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    console.error('Unhandled error:', error);
    res.status(500).json({
      error: 'Internal server error',
    });
  },
);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});

export { app };
