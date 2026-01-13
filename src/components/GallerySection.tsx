'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { BTS_EVENTS, getEventsByCategory } from '@/lib/eventsData';
import { EVENTS, getThumbnailUrl, getLightboxUrl } from '@/lib/cloudinaryImages.constants';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

type FilterType = 'all' | 'win' | 'participated';

interface PhotoData {
  src: string;
  eventName: string;
  eventId: string;
  university: string;
  year: string;
  category: 'win' | 'participated';
}

export default function GallerySection() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedEvent, setSelectedEvent] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentEventPhotos, setCurrentEventPhotos] = useState<{ src: string }[]>([]);
  const [visibleCount, setVisibleCount] = useState(20);

  // Get unique events for the selected category
  const availableEvents = useMemo(() => {
    if (filter === 'all') return BTS_EVENTS;
    return BTS_EVENTS.filter(event => event.category === filter);
  }, [filter]);

  // Prepare all photos with metadata
  const allPhotos = useMemo(() => {
    const photos: PhotoData[] = [];

    BTS_EVENTS.forEach(event => {
      // Map event folders to new event keys
      const eventKeyMap: Record<string, string> = {
        'IEEE BTS': '1. IEEE',
        'Dizzy Hackers BTS': '2. Dizzy Hackers',
        'SheLeads BTS': '3. SheLeads',
        'Innovatex BTS': '4. Innovatex',
        'NMAM BTS': '5. Hackfest NMAM',
        'NEXOVATE BTS': '6. Nexovate',
        'Eureka BTS': '7. Eureka',
        'Iotopia BTS': '8. Iotopia',
        'Srujana BTS': '9. Srujana Chanakya',
        'Nasa Space Apps': '10. Nasa Space Apps',
        'Pravruthi Ramiah BTS': '11. Pravruthi Ramiah',
        'IIST-Trivandrum BTS': '12. Hackorbital IIST-Trivandrum',
        'MAD Expo BTS': '13. MAD Expo',
      };
      const eventKey = eventKeyMap[event.folder];
      
      if (eventKey && EVENTS[eventKey]) {
        // Get BTS images
        const btsImages = EVENTS[eventKey].bts || [];
        btsImages.forEach(src => {
          photos.push({
            src,
            eventName: event.name,
            eventId: event.id,
            university: event.university,
            year: event.year,
            category: event.category,
          });
        });

        // Get Win images (only if event category is 'win')
        if (event.category === 'win') {
          const winImages = EVENTS[eventKey].win || [];
          winImages.forEach(src => {
            photos.push({
              src,
              eventName: event.name,
              eventId: event.id,
              university: event.university,
              year: event.year,
              category: 'win',
            });
          });
        }
      }
    });

    return photos;
  }, []);

  // Filter photos based on selected filter and event
  const filteredPhotos = useMemo(() => {
    let photos = allPhotos;

    // Filter by category
    if (filter !== 'all') {
      photos = photos.filter(photo => photo.category === filter);
    }

    // Filter by specific event
    if (selectedEvent !== 'all') {
      photos = photos.filter(photo => photo.eventId === selectedEvent);
    }

    // Randomize photos when on "All Events" tab
    if (filter === 'all' && selectedEvent === 'all') {
      photos = [...photos].sort(() => Math.random() - 0.5);
    }

    return photos;
  }, [allPhotos, filter, selectedEvent]);

  // Visible photos (for load more functionality)
  const visiblePhotos = filteredPhotos.slice(0, visibleCount);

  const breakpointColumns = {
    default: 5,
    1536: 4,
    1280: 3,
    768: 2,
    640: 2,
  };

  const openLightbox = (photo: PhotoData, index: number) => {
    // Find all photos from the same event
    const eventPhotos = filteredPhotos
      .filter(p => p.eventName === photo.eventName)
      .map(p => ({ src: getLightboxUrl(p.src) })); // Use optimized lightbox URLs

    // Find the index of clicked photo within the event photos
    const photoIndexInEvent = eventPhotos.findIndex(p => p.src === getLightboxUrl(photo.src));

    setCurrentEventPhotos(eventPhotos);
    setLightboxIndex(photoIndexInEvent >= 0 ? photoIndexInEvent : 0);
    setLightboxOpen(true);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 20);
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    setSelectedEvent('all'); // Reset event filter when category changes
    setVisibleCount(20);
  };

  const handleEventChange = (eventId: string) => {
    setSelectedEvent(eventId);
    setVisibleCount(20);
  };

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: 'All Events', value: 'all' },
    { label: 'Wins', value: 'win' },
    { label: 'Participated', value: 'participated' },
  ];

  return (
    <section id="gallery" className="relative min-h-screen py-32 md:py-40 px-4 bg-black/50">
      <div className="relative z-10 max-w-[1600px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
            style={{ fontFamily: '"Dala Floda", serif', letterSpacing: '-0.02em' }}
          >
            Gallery
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-chillax max-w-lg mx-auto">
            Candid moments from our journey
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {filterButtons.map(btn => (
            <button
              key={btn.value}
              onClick={() => handleFilterChange(btn.value)}
              className={`px-5 py-2.5 rounded-full font-chillax text-sm font-medium transition-all duration-200 ${filter === btn.value
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
            >
              {btn.label}
              <span className="ml-2 text-xs opacity-60">
                ({btn.value === 'all' ? allPhotos.length : allPhotos.filter(p => p.category === btn.value).length})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Event Sub-filters (show when not on 'all' filter) */}
        {filter !== 'all' && availableEvents.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            <button
              onClick={() => handleEventChange('all')}
              className={`px-4 py-2 rounded-full text-sm font-chillax font-medium transition-all duration-200 ${selectedEvent === 'all'
                  ? 'bg-white/10 text-white border border-white/20'
                  : 'bg-transparent text-gray-400 border border-white/5 hover:border-white/10 hover:text-gray-200'
                }`}
            >
              All {filter === 'win' ? 'Wins' : 'Participated'}
            </button>
            {availableEvents.map(event => (
              <button
                key={event.id}
                onClick={() => handleEventChange(event.id)}
                className={`px-4 py-2 rounded-full text-sm font-chillax font-medium transition-all duration-200 ${selectedEvent === event.id
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-transparent text-gray-400 border border-white/5 hover:border-white/10 hover:text-gray-200'
                  }`}
              >
                {event.name}
              </button>
            ))}
          </motion.div>
        )}

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
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 8) * 0.03 }}
                  className="mb-4 group cursor-pointer"
                  onClick={() => openLightbox(photo, index)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-all duration-300">
                    <div className="relative">
                      <Image
                        src={getThumbnailUrl(photo.src)}
                        alt={`${photo.eventName} - BTS`}
                        width={600}
                        height={800}
                        className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        loading="lazy"
                      />

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-white font-semibold text-sm font-chillax mb-1">
                            {photo.eventName}
                          </h3>
                          <p className="text-gray-300 text-xs font-chillax">
                            {photo.university} · {photo.year}
                          </p>
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
                className="flex justify-center mt-16"
              >
                <button
                  onClick={loadMore}
                  className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-full text-gray-300 hover:text-white font-chillax font-medium transition-all duration-200"
                >
                  Load more
                  <span className="ml-2 text-sm text-gray-400">
                    ({filteredPhotos.length - visibleCount} left)
                  </span>
                </button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg font-chillax">No photos available for this filter</p>
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
