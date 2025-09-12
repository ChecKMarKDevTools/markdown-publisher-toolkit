import { useState, useCallback } from 'react';
import { backendApi } from '../services/backend-api';
import type { DevToArticle, ConversionResult } from '../services/backend-api';

interface UseDevToConversionState {
  loading: boolean;
  error: string | null;
  article: DevToArticle | null;
  result: ConversionResult | null;
}

export const useDevToConversion = () => {
  const [state, setState] = useState<UseDevToConversionState>({
    loading: false,
    error: null,
    article: null,
    result: null,
  });

  const validateUrl = useCallback((url: string): boolean => {
    return backendApi.isValidDevToUrl(url);
  }, []);

  const convertArticle = useCallback(async (url: string): Promise<void> => {
    setState((prev) => ({
      ...prev,
      loading: true,
      error: null,
      article: null,
      result: null,
    }));

    try {
      // Fetch article from dev.to API
      const article = await backendApi.fetchArticle(url);

      setState((prev) => ({
        ...prev,
        article,
      }));

      // Convert markdown to HTML using the processor
      const canonicalUrl = article.canonical_url || article.url;
      const result = await backendApi.convertArticle(article, canonicalUrl);

      setState((prev) => ({
        ...prev,
        loading: false,
        result,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }));
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      loading: false,
      error: null,
      article: null,
      result: null,
    });
  }, []);

  return {
    ...state,
    validateUrl,
    convertArticle,
    reset,
  };
};
