'use client';

import { useState, useEffect } from 'react';
import type { CloudinaryImage } from '@/lib/cloudinary';

interface FetchImagesOptions {
  category?: 'bts' | 'official' | 'all';
  shuffle?: boolean;
  limit?: number;
}

interface ImageData {
  images: CloudinaryImage[];
  stats: {
    total: number;
    bts: number;
    official: number;
  };
}

const imageDataCache = new Map<string, ImageData>();
const imageRequestCache = new Map<string, Promise<ImageData>>();

function getCacheKey(options: FetchImagesOptions): string {
  return JSON.stringify({
    category: options.category ?? 'all',
    shuffle: options.shuffle ?? true,
    limit: options.limit ?? null,
  });
}

export async function fetchCloudinaryImages(options: FetchImagesOptions = {}): Promise<ImageData> {
  const { category = 'all', shuffle = true, limit } = options;
  const cacheKey = getCacheKey({ category, shuffle, limit });

  const cachedData = imageDataCache.get(cacheKey);
  if (cachedData) {
    return cachedData;
  }

  const cachedRequest = imageRequestCache.get(cacheKey);
  if (cachedRequest) {
    return cachedRequest;
  }

  const requestPromise = (async () => {
    try {
      const params = new URLSearchParams();
      if (category !== 'all') params.append('category', category);
      if (shuffle) params.append('shuffle', 'true');
      if (limit) params.append('limit', limit.toString());

      const response = await fetch(`/api/images?${params.toString()}`);
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch images');
      }

      const data = result.data as ImageData;
      imageDataCache.set(cacheKey, data);
      return data;
    } finally {
      imageRequestCache.delete(cacheKey);
    }
  })();

  imageRequestCache.set(cacheKey, requestPromise);
  return requestPromise;
}

export function useCloudinaryImages(options: FetchImagesOptions = {}) {
  const { category = 'all', shuffle = true, limit } = options;
  
  const [data, setData] = useState<ImageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        setLoading(true);
        setError(null);

        const imageData = await fetchCloudinaryImages({ category, shuffle, limit });
        setData(imageData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        console.error('Error fetching Cloudinary images:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [category, shuffle, limit]);

  return { data, loading, error };
}
