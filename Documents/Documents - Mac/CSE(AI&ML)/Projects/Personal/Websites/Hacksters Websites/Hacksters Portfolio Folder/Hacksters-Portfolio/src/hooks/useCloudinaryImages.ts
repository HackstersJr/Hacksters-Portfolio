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

        const params = new URLSearchParams();
        if (category !== 'all') params.append('category', category);
        if (shuffle) params.append('shuffle', 'true');
        if (limit) params.append('limit', limit.toString());

        const response = await fetch(`/api/images?${params.toString()}`);
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message || 'Failed to fetch images');
        }

        setData(result.data);
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
