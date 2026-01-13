'use client';

import { useCloudinaryImages } from '@/hooks/useCloudinaryImages';
import { useState } from 'react';

/**
 * Development tool to preview and manage Cloudinary images
 * Only visible in development mode
 */
export default function CloudinaryDebugPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState<'all' | 'bts' | 'official'>('all');

  const { data, loading, error } = useCloudinaryImages({
    category,
    shuffle: false,
  });

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-[9999] bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium transition-colors"
      >
        📸 Images ({data?.stats.total || 0})
      </button>

      {/* Debug Panel */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-96 bg-black/95 border-l border-cyan-500/30 z-[9998] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Cloudinary Images</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white"
              >
                ✕
              </button>
            </div>

            {/* Stats */}
            {data && (
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-cyan-500/10 rounded p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400">{data.stats.total}</div>
                  <div className="text-xs text-white/60">Total</div>
                </div>
                <div className="bg-purple-500/10 rounded p-3 text-center">
                  <div className="text-2xl font-bold text-purple-400">{data.stats.bts}</div>
                  <div className="text-xs text-white/60">BTS</div>
                </div>
                <div className="bg-pink-500/10 rounded p-3 text-center">
                  <div className="text-2xl font-bold text-pink-400">{data.stats.official}</div>
                  <div className="text-xs text-white/60">Official</div>
                </div>
              </div>
            )}

            {/* Category Filter */}
            <div className="mb-6">
              <label className="block text-sm text-white/60 mb-2">Filter by Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as 'all' | 'bts' | 'official')}
                className="w-full bg-white/5 border border-white/10 text-white rounded px-3 py-2 text-sm"
              >
                <option value="all">All Images</option>
                <option value="bts">BTS Only</option>
                <option value="official">Official Only</option>
              </select>
            </div>

            {/* Loading/Error States */}
            {loading && (
              <div className="text-center py-8 text-white/60">
                Loading images...
              </div>
            )}

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded p-4 text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Image Grid */}
            {data && (
              <div className="space-y-4">
                <div className="text-sm text-white/60">
                  Showing {data.images.length} images
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {data.images.map((img) => (
                    <div
                      key={img.publicId}
                      className="group relative aspect-square bg-white/5 rounded overflow-hidden hover:ring-2 hover:ring-cyan-500/50 transition-all"
                    >
                      <img
                        src={img.secureUrl}
                        alt={img.publicId}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-2 flex flex-col justify-end">
                        <div className="text-xs text-white/80 font-mono truncate">
                          {img.publicId.split('/').pop()}
                        </div>
                        <div className={`text-xs mt-1 ${img.category === 'BTS' ? 'text-purple-400' : 'text-pink-400'
                          }`}>
                          {img.category}
                        </div>
                        <div className="text-xs text-white/40">
                          {img.width}×{img.height}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
