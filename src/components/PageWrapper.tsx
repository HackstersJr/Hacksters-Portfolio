'use client';

import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {showContent && children}
    </>
  );
}
