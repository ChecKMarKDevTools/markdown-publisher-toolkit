// Backend API client for frontend
/// <reference lib="dom" />

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  canonical_url?: string;
  comments_count: number;
  positive_reactions_count: number;
  public_reactions_count: number;
  page_views_count: number;
  published_timestamp: string;
  body_markdown: string;
  body_html: string;
  ltag_style: string; // cspell:disable-line
  ltag_script: string; // cspell:disable-line
  user: {
    name: string;
    username: string;
    twitter_username?: string;
    github_username?: string;
    user_id: number;
    website_url?: string;
    profile_image: string;
    profile_image_90: string;
  };
  organization?: {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
  };
  cover_image?: string;
  social_image: string;
  created_at: string;
  edited_at?: string;
  crossposted_at?: string;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string;
  tags: string;
}

export interface ConversionResult {
  success: boolean;
  html?: string;
  metadata?: {
    title: string;
    description: string;
    canonicalUrl: string;
    coverImage: string;
    author: string;
    publishedAt: string;
    tags: string[];
  };
  error?: string;
}

export interface DevToApiError extends Error {
  status?: number;
  details?: string;
}

class BackendApiClient {
  private async makeRequest<T>(
    endpoint: string,
    options: { method?: string; body?: string; headers?: Record<string, string> } = {},
  ): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const error = new Error(errorData.message || 'API request failed') as DevToApiError;
      error.status = response.status;
      error.details = errorData.details;
      throw error;
    }

    return response.json();
  }

  isValidDevToUrl(url: string): boolean {
    try {
      const parsed = new URL(url);
      if (parsed.hostname !== 'dev.to') {
        return false;
      }
      const pathParts = parsed.pathname.slice(1).split('/');
      return pathParts.length >= 2 && Boolean(pathParts[0]) && Boolean(pathParts[1]);
    } catch {
      return false;
    }
  }

  async fetchArticle(url: string): Promise<DevToArticle> {
    return this.makeRequest<DevToArticle>('/api/articles/fetch', {
      method: 'POST',
      body: JSON.stringify({ url }),
    });
  }

  async convertArticle(article: DevToArticle, canonicalUrl: string): Promise<ConversionResult> {
    return this.makeRequest<ConversionResult>('/api/articles/convert', {
      method: 'POST',
      body: JSON.stringify({ article, canonicalUrl }),
    });
  }
}

export const backendApi = new BackendApiClient();
