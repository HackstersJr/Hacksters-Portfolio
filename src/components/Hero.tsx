'use client';

import DomeGallery from './DomeGallery';
import { MorphingText } from '@/components/ui/morphing-text';
import { useCloudinaryImages } from '@/hooks/useCloudinaryImages';
import { useMemo } from 'react';

export default function Hero() {
  // Fetch all images from Cloudinary (BTS + Official), shuffled randomly
  const { data, loading, error } = useCloudinaryImages({
    category: 'all',
    shuffle: true,
  });

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Map Cloudinary images to DomeGallery format - ONLY use actual images
  const domeImages = useMemo(() => {
    if (!data?.images || data.images.length === 0) {
      // Don't show dome until we have real images
      return [];
    }

    // Filter out any images with empty/invalid URLs and map to DomeGallery format
    const validImages = data.images
      .filter(img => img.secureUrl && img.secureUrl.trim() !== '')
      .map((img) => ({
        src: img.secureUrl,
        alt: `Hacksters ${img.category} - ${img.publicId.split('/').pop() || 'image'}`,
      }));

    return validImages;
  }, [data]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* DomeGallery Background - Always show with fallback to default images */}
      <div className="absolute inset-0 z-0 opacity-60">
        <DomeGallery
          images={domeImages}
          fit={0.6}
          overlayBlurColor="#000000"
          maxVerticalRotationDeg={3}
          dragSensitivity={15}
          grayscale={false}
        />
      </div>

      {/* Loading state - show when loading and no images yet */}
      {loading && domeImages.length === 0 && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="text-white/40 text-sm">Loading gallery...</div>
        </div>
      )}

      {/* Error state - minimal */}
      {error && (
        <div className="absolute top-4 right-4 z-30 bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm">
          ⚠️ {error}
        </div>
      )}

      <div className="relative z-20 text-center px-4">
        {/* HACKSTERS - Using Righteous (BOLD, ROUNDED, FUTURISTIC) */}
        <h1 
          className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-bold mb-4 md:mb-6 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.6)] tracking-tight leading-none"
          style={{ fontFamily: 'var(--font-righteous), "Righteous", cursive' }}
        >
          HACKSTERS
        </h1>
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row items-center justify-center gap-x-2 md:gap-x-3 gap-y-2 w-full">
          {/* Tagline - Using Chillax (FUNKY, MODERN) with tighter letter spacing */}
          <span 
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white font-medium drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] whitespace-nowrap leading-none sm:translate-y-[-2px] md:translate-y-[-4px] lg:translate-y-[-6px]"
            style={{ fontFamily: '"Chillax", var(--font-inter), sans-serif', letterSpacing: '-0.03em' }}
          >
            Where ideas become
          </span>
          {/* Morphing Text - Let it use its default font */}
          <div className="inline-flex items-center justify-center sm:justify-start w-full sm:w-[140px] md:w-[160px] lg:w-[280px]">
            <MorphingText 
              texts={[
                "reality",
                "innovations",
                "legends",
                "breakthroughs",
                "winners",
                "impact",
                "phenomena",
                "solutions",
                "change",
                "magic",
                "inspiration",
                "culture",
                "progress",
                "growth",
                "possibilities",
                "journeys",
                "success",
                "transformation",
                "momentum",
                "excellence",
                "creativity",
                "marvels",
                "stories",
                "energy",
                "dreams",
                "influence",
                "milestones",
                "masterpieces"
              ]}
              className="text-cyan-400 drop-shadow-[0_4px_14px_rgba(6,182,212,0.55)] !h-8 sm:!h-10 md:!h-12 lg:!h-16 !text-xl sm:!text-2xl md:!text-3xl lg:!text-5xl !leading-none !w-full !text-center sm:!text-left"
            />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute w-2 h-2 bg-cyan-400/30 rounded-full" style={{ left: '20%', top: '30%' }}></div>
        <div className="floating-element absolute w-2 h-2 bg-cyan-400/30 rounded-full" style={{ left: '80%', top: '60%', animationDelay: '1s' }}></div>
        <div className="floating-element absolute w-2 h-2 bg-cyan-400/30 rounded-full" style={{ left: '60%', top: '20%', animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
