'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Preload critical images including gallery images
  // List of critical images to preload (including gallery images from DomeGallery)
  const criticalImages = [
    // Logo
    'https://res.cloudinary.com/dlnvozmgw/image/upload/v1738317056/Hacksters_Logo-removebg-preview_pr8kvz.png',
    // Gallery images from DomeGallery DEFAULT_IMAGES
    'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1755497595318-7e5e3523854f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1745965976680-d00be7dc0377?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1752588975228-21f44630bb3c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://pbs.twimg.com/media/Gyla7NnXMAAXSo_?format=jpg&name=large'
  ];    let loadedCount = 0;
    const totalImages = criticalImages.length;

    const preloadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.onload = () => {
          loadedCount++;
          setProgress((loadedCount / totalImages) * 100);
          resolve(img);
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload all images
    Promise.all(criticalImages.map(src => preloadImage(src)))
      .then(() => {
        // Wait for DOM to be fully ready
        if (document.readyState === 'complete') {
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onLoadingComplete();
              window.scrollTo({ top: 0, behavior: 'instant' });
            }, 800);
          }, 500);
        } else {
          window.addEventListener('load', () => {
            setTimeout(() => {
              setIsComplete(true);
              setTimeout(() => {
                onLoadingComplete();
                window.scrollTo({ top: 0, behavior: 'instant' });
              }, 800);
            }, 500);
          });
        }
      })
      .catch(() => {
        // Even if some images fail, continue loading
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => {
            onLoadingComplete();
            window.scrollTo({ top: 0, behavior: 'instant' });
          }, 800);
        }, 500);
      });
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex items-center justify-center"
          style={{
            background: 'transparent',
          }}
        >
          {/* Logo - SUPER BIG */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative w-[90vw] h-[90vh] md:w-[80vw] md:h-[80vh] max-w-[1200px] max-h-[1200px]"
          >
            {/* Subtle glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(0,200,255,0.2) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(120,80,255,0.2) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(0,200,255,0.2) 0%, transparent 70%)',
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Logo fills from left to right */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Background logo (faded) */}
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="https://res.cloudinary.com/dswllszlj/image/upload/v1761937846/Hacksters_Logo-removebg-preview_pr8kvz.png"
                  alt="Hacksters Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Animated fill effect - logo reveals left to right */}
              <motion.div
                className="absolute inset-0"
                style={{
                  clipPath: `inset(0 ${100 - progress}% 0 0)`,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src="https://res.cloudinary.com/dswllszlj/image/upload/v1761937846/Hacksters_Logo-removebg-preview_pr8kvz.png"
                    alt="Hacksters Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Holographic shimmer overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </div>
              </motion.div>

              {/* Glowing edge at fill position */}
              <motion.div
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent blur-sm"
                style={{
                  left: `${progress}%`,
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

