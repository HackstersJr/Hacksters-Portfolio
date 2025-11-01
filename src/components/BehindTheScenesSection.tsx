'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { BTS_EVENTS, getEventsByCategory } from '@/lib/eventsData';
import { getImagesByFolder } from '@/lib/cloudinaryImages.constants';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type FilterType = 'all' | 'win' | 'participated';

interface PhotoData {
  src: string;
  eventName: string;
  university: string;
  year: string;
  category: 'win' | 'participated';
}

export default function BehindTheScenesSection() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentEventPhotos, setCurrentEventPhotos] = useState<{ src: string }[]>([]);
  const [visibleCount, setVisibleCount] = useState(20);

  // Prepare all photos with metadata
  const allPhotos = useMemo(() => {
    const photos: PhotoData[] = [];
    
    BTS_EVENTS.forEach(event => {
      const images = getImagesByFolder('BTS', event.folder);
      images.forEach(src => {
        photos.push({
          src,
          eventName: event.name,
          university: event.university,
          year: event.year,
          category: event.category,
        });
      });
    });
    
    return photos;
  }, []);

  // Filter photos based on selected filter
  const filteredPhotos = useMemo(() => {
    if (filter === 'all') return allPhotos;
    return allPhotos.filter(photo => photo.category === filter);
  }, [allPhotos, filter]);

  // Visible photos (for load more functionality)
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  const breakpointColumns = {
    default: 4,
    1280: 3,
    768: 2,
    640: 2,
  };

  const openLightbox = (photo: PhotoData, index: number) => {
    // Find all photos from the same event
    const eventPhotos = filteredPhotos
      .filter(p => p.eventName === photo.eventName)
      .map(p => ({ src: p.src }));
    
    // Find the index of clicked photo within the event photos
    const photoIndexInEvent = eventPhotos.findIndex(p => p.src === photo.src);
    
    setCurrentEventPhotos(eventPhotos);
    setLightboxIndex(photoIndexInEvent >= 0 ? photoIndexInEvent : 0);
    setLightboxOpen(true);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 20);
  };

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'All Events', value: 'all' },
    { label: 'Wins', value: 'win' },
    { label: 'Participated', value: 'participated' },
  ];

  return (
    <section id="behind-the-scenes" className="relative min-h-screen py-20 px-4 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/10 to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            <span className="text-white">Behind The </span>
            <span className="inline-block text-glow-cyan">
              Scenes
            </span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
            Candid moments from our journey
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterButtons.map(btn => (
            <button
              key={btn.value}
              onClick={() => {
                setFilter(btn.value);
                setVisibleCount(20); // Reset count when filter changes
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === btn.value
                  ? 'bg-cyan-500/20 text-cyan-400 border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/20'
                  : 'bg-neutral-800/50 text-neutral-400 border-2 border-neutral-700/50 hover:border-cyan-400/30 hover:text-cyan-300'
              }`}
            >
              {btn.label}
              <span className="ml-2 text-xs opacity-70">
                ({btn.value === 'all' ? allPhotos.length : allPhotos.filter(p => p.category === btn.value).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        {visiblePhotos.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Masonry
              breakpointCols={breakpointColumns}
              className="flex -ml-4 w-auto"
              columnClassName="pl-4 bg-clip-padding"
            >
              {visiblePhotos.map((photo, index) => (
                <motion.div
                  key={`${photo.src}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                  className="mb-4 group cursor-pointer"
                  onClick={() => openLightbox(photo, index)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                    <div className="relative aspect-[4/5] md:aspect-[3/4]">
                      <Image
                        src={photo.src}
                        alt={`${photo.eventName} - BTS`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1280px) 25vw, 20vw"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-bold text-sm md:text-base mb-1">
                            {photo.eventName}
                          </h3>
                          <p className="text-neutral-300 text-xs md:text-sm mb-2">
                            {photo.university}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              photo.category === 'win'
                                ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/50'
                                : 'bg-purple-500/30 text-purple-300 border border-purple-400/50'
                            }`}>
                              {photo.category === 'win' ? '🏆 WIN' : '📸 BTS'}
                            </span>
                            <span className="text-neutral-400 text-xs">{photo.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>

            {/* Load More Button */}
            {visibleCount < filteredPhotos.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center mt-12"
              >
                <button
                  onClick={loadMore}
                  className="px-8 py-4 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/30 hover:border-cyan-500/50 rounded-full text-cyan-300 font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  Load More Photos
                  <span className="ml-2 text-sm opacity-70">
                    ({filteredPhotos.length - visibleCount} remaining)
                  </span>
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">No photos available for this filter</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentEventPhotos}
        index={lightboxIndex}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </section>
  );
}
