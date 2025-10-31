'use client';

import { useCloudinaryImages } from '@/hooks/useCloudinaryImages';
import { useEffect } from 'react';

export default function TestCloudinary() {
  const { data, loading, error } = useCloudinaryImages({
    category: 'all',
    shuffle: false,
    limit: 5,
  });

  useEffect(() => {
    console.log('=== CLOUDINARY TEST ===');
    console.log('Loading:', loading);
    console.log('Error:', error);
    console.log('Data:', data);
    if (data?.images) {
      console.log('First image:', data.images[0]);
      console.log('Total images:', data.images.length);
      console.log('Stats:', data.stats);
    }
  }, [data, loading, error]);

  if (loading) return <div className="p-8 text-white">Loading from Cloudinary...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!data) return <div className="p-8 text-yellow-500">No data</div>;

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Cloudinary Test</h1>
      <div className="mb-4 bg-gray-800 p-4 rounded">
        <h2 className="font-bold mb-2">Stats:</h2>
        <p>Total: {data.stats.total}</p>
        <p>BTS: {data.stats.bts}</p>
        <p>Official: {data.stats.official}</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {data.images.slice(0, 6).map((img, i) => (
          <div key={i} className="border border-white/20 p-2 rounded">
            <img 
              src={img.secureUrl} 
              alt={img.publicId}
              className="w-full aspect-square object-cover rounded mb-2"
              onError={(e) => {
                console.error('Image failed to load:', img.secureUrl);
                e.currentTarget.src = 'https://via.placeholder.com/200?text=Error';
              }}
            />
            <p className="text-xs truncate">{img.publicId}</p>
            <p className="text-xs text-gray-400">{img.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
