export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  slug: string;
  path: string;
  cover_image: string;
  social_image: string;
  canonical_url: string;
  body_markdown: string;
  body_html: string;
  published_at: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_timestamp: string;
  reading_time_minutes: number;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
  organization: {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
  } | null;
  tags: string[];
  tag_list: string[];
}

export interface DevToApiError {
  error: string;
  status: number;
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
