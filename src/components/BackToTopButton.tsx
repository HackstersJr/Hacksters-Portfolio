'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 450);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 h-11 w-11 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
    >
      <ChevronUp className="mx-auto h-5 w-5" />
    </button>
  );
}
