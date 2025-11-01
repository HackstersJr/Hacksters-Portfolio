'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PARTICIPATED_EVENTS } from '@/lib/eventsData';
import { getImagesByFolder } from '@/lib/cloudinaryImages.constants';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function WhereWeveBeenSection() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<{ src: string }[]>([]);

  const openGallery = (folder: string) => {
    const images = getImagesByFolder('BTS', folder);
    setLightboxImages(images.map(src => ({ src })));
    setLightboxOpen(true);
  };

  return (
    <section id="where-weve-been" className="relative min-h-screen py-20 px-4 bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-white">Where We&apos;ve </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Been</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
            Events we participated in, experiences that shaped us
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTICIPATED_EVENTS.map((event, index) => {
            const images = getImagesByFolder('BTS', event.folder);
            const displayImages = images.slice(0, 4);

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div
                  className="relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
                  onClick={() => openGallery(event.folder)}
                  onMouseEnter={() => setSelectedEvent(event.id)}
                  onMouseLeave={() => setSelectedEvent(null)}
                >
                  {/* Photo Collage */}
                  <div className="relative h-64 bg-neutral-800">
                    {displayImages.length > 0 ? (
                      <div className="grid grid-cols-2 gap-1 h-full p-1">
                        {displayImages.map((img, i) => (
                          <div
                            key={i}
                            className={`relative overflow-hidden rounded-lg ${
                              i === 0 && displayImages.length === 3 ? 'col-span-2' : ''
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`${event.name} - Photo ${i + 1}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-neutral-500">
                        No photos available
                      </div>
                    )}
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                      selectedEvent === event.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 text-xs font-semibold bg-purple-500/30 backdrop-blur-sm rounded-full border border-purple-400/50 text-purple-300">
                            PARTICIPATED
                          </span>
                          {images.length > 0 && (
                            <span className="text-xs text-neutral-300">
                              {images.length} photo{images.length !== 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {event.name}
                    </h3>
                    <div className="space-y-1 mb-3">
                      <p className="text-neutral-400 text-sm font-medium">
                        {event.university}
                      </p>
                      <p className="text-neutral-500 text-xs">
                        {event.year} • {event.location}
                      </p>
                    </div>
                    <p className="text-neutral-400 text-sm line-clamp-2">
                      {event.description}
                    </p>

                    {/* View Gallery Button */}
                    <button className="mt-4 w-full py-2 px-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-500/50 rounded-lg text-purple-300 font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 group">
                      <span>View Gallery</span>
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxImages}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.95)' },
        }}
      />
    </section>
  );
}
