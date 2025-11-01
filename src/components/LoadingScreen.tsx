'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagesByFolder, getDomeGalleryUrl } from '@/lib/cloudinaryImages.constants';
import { BTS_EVENTS, PARTICIPATED_EVENTS } from '@/lib/eventsData';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState('Initializing...');

  useEffect(() => {
    let isMounted = true;
    const loadedImages = new Set<string>();

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (loadedImages.has(src)) {
          resolve();
          return;
        }

        const img = new Image();
        img.onload = () => {
          loadedImages.add(src);
          resolve();
        };
        img.onerror = () => {
          // Still resolve even on error to not block loading
          loadedImages.add(src);
          resolve();
        };
        img.src = src;
      });
    };

    const preloadFont = (fontFamily: string): Promise<void> => {
      return new Promise((resolve) => {
        if (document.fonts && document.fonts.load) {
          document.fonts.load(`1em ${fontFamily}`).then(() => {
            resolve();
          }).catch(() => {
            resolve(); // Resolve anyway if font fails
          });
        } else {
          resolve();
        }
      });
    };

    const loadAllAssets = async () => {
      try {
        // Phase 1: Fetch ALL Cloudinary images that Hero will use (0-50%)
        if (!isMounted) return;
        setLoadingPhase('Fetching your moments...');
        
        // Fetch ALL your Cloudinary images (same call Hero makes)
        const response = await fetch('/api/images?category=all&shuffle=true');
        const result = await response.json();
        
        let allCloudinaryImages: string[] = [];
        
        if (result.success && result.data?.images) {
          allCloudinaryImages = result.data.images
            .filter((img: any) => img.secureUrl && img.secureUrl.trim() !== '')
            .map((img: any) => img.secureUrl);
        }

        setLoadingPhase('Loading gallery images...');
        
        // Preload ALL dome gallery images (this could be 100+ images)
        for (let i = 0; i < allCloudinaryImages.length; i++) {
          await preloadImage(allCloudinaryImages[i]);
          if (isMounted) {
            const progress = (i + 1) / allCloudinaryImages.length * 40;
            setProgress(progress);
            
            // Update message at milestones
            if (progress > 10 && progress < 15) {
              setLoadingPhase('Preparing your victories...');
            } else if (progress > 25 && progress < 30) {
              setLoadingPhase('Arranging memories...');
            }
          }
        }

        // Load first timeline event (NMAM) ScrollStack images
        setLoadingPhase('Loading journey timeline...');
        const firstEventImages = getImagesByFolder('Official', 'NMAM');
        for (let i = 0; i < firstEventImages.length; i++) {
          await preloadImage(firstEventImages[i]);
          if (isMounted) {
            const phase1Progress = 40 + ((i + 1) / firstEventImages.length * 10);
            setProgress(phase1Progress);
          }
        }

                // Load fonts early
        setLoadingPhase('Loading custom fonts...');
        const fonts = ['Dala Floda', 'Grafier', 'Weird Serif'];
        for (let i = 0; i < fonts.length; i++) {
          await preloadFont(fonts[i]);
          if (isMounted) {
            const fontProgress = 50 + ((i + 1) / fonts.length * 10);
            setProgress(fontProgress);
          }
        }

        setLoadingPhase('Initializing animations...');
        
        // Wait for DOM to be ready
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve(true);
          } else {
            window.addEventListener('load', () => resolve(true), { once: true });
          }
        });

        if (isMounted) setProgress(70);
        setLoadingPhase('Polishing the experience...');
        
        // Additional delay to ensure Hero component has mounted and used cached images
        await new Promise(resolve => setTimeout(resolve, 600));

        if (isMounted) setProgress(85);
        setLoadingPhase('Applying final touches...');
        
        await new Promise(resolve => setTimeout(resolve, 400));

        if (isMounted) setProgress(100);
        setLoadingPhase('Ready!');

        // Small delay to show 100%
        await new Promise(resolve => setTimeout(resolve, 200));

        // SHOW PAGE NOW - All critical images are ready
        if (isMounted) {
          setIsComplete(true);
          setLoadingPhase('Ready!');
          
          setTimeout(() => {
            onLoadingComplete();
          }, 300);
        }

        // Continue loading remaining assets in background
        setTimeout(async () => {
          if (!isMounted) return;
          
          // Load remaining timeline events
          const remainingEvents = [
            { folder: 'Dizzy' },
            { folder: 'IIST-Trivandrum' },
            { folder: 'NEXOVATE Official' },
            { folder: 'SheLeads' },
            { folder: 'Srujana' },
          ];

          for (const event of remainingEvents) {
            const images = getImagesByFolder('Official', event.folder);
            images.forEach(src => preloadImage(src).catch(() => {}));
            await new Promise(resolve => setTimeout(resolve, 100)); // Small delay between events
          }

          // Load Where We've Been images
          PARTICIPATED_EVENTS.forEach(event => {
            const images = getImagesByFolder('BTS', event.folder);
            images.slice(0, 4).forEach(src => preloadImage(src).catch(() => {}));
          });

          // Load first 20 BTS photos
          const allBTSImages: string[] = [];
          BTS_EVENTS.forEach(event => {
            const images = getImagesByFolder('BTS', event.folder);
            allBTSImages.push(...images);
          });

          allBTSImages.slice(0, 20).forEach(src => {
            preloadImage(src).catch(() => {});
          });

          // Load remaining BTS images slowly
          await new Promise(resolve => setTimeout(resolve, 1000));
          allBTSImages.slice(20).forEach((src, index) => {
            setTimeout(() => {
              preloadImage(src).catch(() => {});
            }, index * 50); // Stagger loading
          });
        }, 500);

      } catch (error) {
        console.error('Loading error:', error);
        // Complete anyway to not block the site
        if (isMounted) {
          setProgress(100);
          setIsComplete(true);
          setTimeout(() => onLoadingComplete(), 500);
        }
      }
    };

    loadAllAssets();

    return () => {
      isMounted = false;
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
        >
          {/* Centered Progress Bar */}
          <div className="flex flex-col items-center gap-4 w-80 max-w-[90vw]">
            <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
            
            {/* Progress Text */}
            <div className="text-center">
              <p className="text-neutral-400 text-sm">
                {loadingPhase}
              </p>
              <p className="text-neutral-600 text-xs mt-1">
                {Math.round(progress)}%
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
