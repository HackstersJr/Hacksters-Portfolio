'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  // Loading screen disabled - set to false to skip it
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        {children}
      </div>
    </>
  );
}
