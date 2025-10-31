'use client';

import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import { useEffect, useRef, useState } from "react";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [lineProgress, setLineProgress] = useState(0);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set([0])); // Start with first card visible
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const journeyEvents = [
    {
      year: "2019",
      title: "Foundation & Vision",
      subtitle: "The Beginning",
      description: "Hacksters was established with a bold vision to revolutionize technology through innovative solutions and cutting-edge research.",
      side: "left" as const
    },
    {
      year: "2020",
      title: "First Major Breakthrough",
      subtitle: "Innovation Milestone",
      description: "Achieved our first significant technological breakthrough, setting the foundation for future advancements in AI and machine learning.",
      side: "right" as const
    },
    {
      year: "2021",
      title: "Expansion & Growth",
      subtitle: "Scaling Operations",
      description: "Expanded our team and operations, establishing partnerships with leading tech companies and securing initial funding.",
      side: "left" as const
    },
    {
      year: "2022",
      title: "Global Recognition",
      subtitle: "Industry Leadership",
      description: "Gained international recognition for our innovative solutions, winning prestigious awards and expanding our global presence.",
      side: "right" as const
    },
    {
      year: "2023",
      title: "Future Innovation",
      subtitle: "Next Chapter",
      description: "Continuing to push boundaries with advanced technologies, preparing for the next era of technological transformation.",
      side: "left" as const
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const viewportBottom = window.innerHeight;
      
      // Calculate overall timeline progress
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const scrollProgress = Math.max(0, Math.min(1, (viewportCenter - timelineTop) / timelineHeight));
      setLineProgress(scrollProgress);

      // Check which card is currently in center and which are visible
      let currentActive = -1;
      const newVisibleCards = new Set<number>();
      
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.top + cardRect.height / 2;
        const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
        
        // If card center is close to viewport center
        if (distanceFromCenter < 200 && cardRect.top < viewportCenter) {
          currentActive = index;
        }
        
        // Card is visible if it's in or has entered the viewport
        if (cardRect.top < viewportBottom && cardRect.bottom > -100) {
          newVisibleCards.add(index);
        }
      });
      
      // Merge with existing visible cards
      setVisibleCards(prev => {
        const updated = new Set(prev);
        newVisibleCards.forEach(i => updated.add(i));
        
        // Remove cards that scrolled too far past top
        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const cardRect = card.getBoundingClientRect();
          if (cardRect.bottom < -100) {
            updated.delete(index);
          }
        });
        
        return updated;
      });
      
      setActiveIndex(currentActive);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check - run multiple times to ensure it catches
    handleScroll();
    const timer1 = setTimeout(handleScroll, 50);
    const timer2 = setTimeout(handleScroll, 200);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <section id="timeline" className="relative min-h-screen py-20 bg-gradient-to-b from-transparent via-gray-900/15 to-transparent overflow-hidden">
      {/* Premium Journey Background Elements - Matching Gallery Theme */}
      <div className="absolute inset-0 pointer-events-none">

        
        {/* Premium Floating Geometric Shapes - Journey Theme */}
        <div className="absolute top-20 left-12 w-16 h-16 border border-cyan-400/15 rotate-45 float-enhanced"></div>
        <div className="absolute bottom-32 right-1/3 w-20 h-20 border border-purple-400/12 rounded-full parallax-fast" style={{animationDelay: '0.5s'}}></div>
        
        {/* Premium Dynamic Gradient Orbs */}
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-gradient-radial from-cyan-400/4 via-cyan-400/2 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/5 w-56 h-56 bg-gradient-radial from-purple-500/4 via-purple-500/2 to-transparent rounded-full blur-3xl"></div>
        
        {/* Premium Floating Particles */}
        <div className="absolute top-32 left-1/3 w-1.5 h-1.5 bg-cyan-400/30 rounded-full parallax-fast"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-400/30 rounded-full parallax-slow" style={{animationDelay: '2s'}}></div>
        
        {/* Premium Scanning Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Premium Corner Accent Elements */}
        <div className="absolute top-0 left-0 w-28 h-28 border-l-2 border-t-2 border-cyan-400/25"></div>
        <div className="absolute top-0 right-0 w-28 h-28 border-r-2 border-t-2 border-cyan-400/25"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 border-l-2 border-b-2 border-purple-400/25"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 border-r-2 border-b-2 border-purple-400/25"></div>
        
        {/* Premium Data Stream Lines */}
        <div className="absolute left-0 top-1/4 w-px h-28 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
        <div className="absolute right-0 top-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute left-0 bottom-1/4 w-px h-20 bg-gradient-to-t from-transparent via-green-400/30 to-transparent animate-pulse" style={{animationDelay: '2.5s'}}></div>
        
        {/* Premium Hexagonal Pattern - Journey Theme */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 opacity-8">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-400 fill-none stroke-1">
            <polygon points="50,5 85,25 85,75 50,95 15,75 15,25"/>
          </svg>
        </div>
        

      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-chillax">
            <span className="text-white">Our</span>{' '}
            <span className="neon-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-chillax">
            From humble beginnings to technological innovation leaders
          </p>
        </div>

        {/* Timeline with ScrollStack Cards */}
        <div className="relative max-w-7xl mx-auto" ref={timelineRef}>
          {/* Center Timeline Line - Premium Design */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex justify-center pointer-events-none">
            <div className="relative w-[2px]">
              {/* Subtle outer glow */}
              <div className="absolute inset-0 w-full bg-gradient-to-b from-cyan-400/10 via-purple-400/10 to-cyan-400/10 blur-sm" />
              
              {/* Background subtle line */}
              <div 
                className="absolute inset-0 w-full opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    to bottom,
                    transparent,
                    transparent 8px,
                    rgba(6, 182, 212, 0.3) 8px,
                    rgba(6, 182, 212, 0.3) 16px
                  )`
                }}
              />
              
              {/* Animated solid line that grows with premium gradient */}
              <div 
                className="absolute top-0 left-0 w-full transition-all duration-500 ease-out"
                style={{
                  height: `${lineProgress * 100}%`,
                  background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.9) 0%, rgba(139, 92, 246, 0.8) 50%, rgba(6, 182, 212, 0.9) 100%)',
                  boxShadow: `
                    0 0 10px rgba(6, 182, 212, 0.6),
                    0 0 20px rgba(6, 182, 212, 0.4),
                    0 0 30px rgba(6, 182, 212, 0.2),
                    inset 0 0 10px rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                {/* Animated shimmer effect */}
                <div 
                  className="absolute inset-0 w-full"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Journey Events */}
          <div className="space-y-32">
            {journeyEvents.map((event, index) => (
              <div 
                key={index} 
                className="relative"
                ref={(el) => { cardRefs.current[index] = el; }}
              >
                {/* Timeline Dot - Perfectly Centered with Premium Design */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Outer glow ring - only when active */}
                    {index <= activeIndex && (
                      <div 
                        className="absolute w-10 h-10 rounded-full"
                        style={{
                          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)'
                        }}
                      />
                    )}
                    
                    {/* Main dot - SOLID when active */}
                    <div 
                      className={`relative w-5 h-5 rounded-full transition-all duration-500 ease-out ${
                        index <= activeIndex 
                          ? 'bg-cyan-400 scale-110' 
                          : 'bg-gradient-to-br from-gray-500 to-gray-600'
                      }`}
                      style={{
                        boxShadow: index <= activeIndex 
                          ? `
                            0 0 0 3px rgba(10, 10, 10, 1),
                            0 0 0 4px rgba(6, 182, 212, 0.6),
                            0 0 20px rgba(6, 182, 212, 0.8),
                            0 0 40px rgba(6, 182, 212, 0.4)
                          ` 
                          : '0 0 0 3px rgba(10, 10, 10, 1), 0 0 0 4px rgba(75, 85, 99, 0.3)'
                      }}
                    >
                      {/* Inner highlight for depth */}
                      {index <= activeIndex && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-cyan-200/30 to-transparent" />
                      )}
                    </div>
                  </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  event.side === 'left' ? '' : 'lg:grid-flow-dense'
                }`}>
                  {/* Timeline Card - Enhanced with animations */}
                  <div 
                    className={`${event.side === 'left' ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'} 
                    transition-all duration-700 ease-out
                    ${visibleCards.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                    `}
                    style={{
                      transitionDelay: `${index * 150}ms`
                    }}
                  >
                    <div 
                      className={`
                        group relative overflow-hidden
                        bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 
                        border rounded-3xl p-8 backdrop-blur-xl 
                        transition-all duration-500 ease-out
                        hover:scale-[1.02] hover:-translate-y-1
                        ${index <= activeIndex 
                          ? 'border-cyan-400/40 shadow-lg shadow-cyan-400/20' 
                          : 'border-cyan-400/20 hover:border-cyan-400/40'
                        }
                      `}
                    >
                      {/* Animated gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-purple-400/0 to-cyan-400/0 group-hover:from-cyan-400/3 group-hover:via-purple-400/3 group-hover:to-cyan-400/3 transition-all duration-500 rounded-3xl" />
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out]" />
                      </div>

                      <div className="relative z-10">
                        <div 
                          className={`text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 
                          transition-all duration-300 group-hover:scale-105 inline-block
                          ${index <= activeIndex ? 'animate-[fadeInScale_0.6s_ease-out]' : ''}
                          `}
                          style={{ 
                            fontFamily: 'Grafier, sans-serif',
                            transitionDelay: `${index * 150 + 100}ms`
                          }}
                        >
                          {event.year}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-chillax group-hover:text-cyan-400/90 transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-cyan-400/80 text-sm font-medium mb-3 font-chillax group-hover:text-cyan-400 transition-colors duration-300">
                          {event.subtitle}
                        </p>
                        <p className="text-gray-300 leading-relaxed font-chillax">
                          {event.description}
                        </p>
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-cyan-400/30 group-hover:border-cyan-400/50 transition-colors duration-300 rounded-tl-3xl" />
                      <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-purple-400/30 group-hover:border-purple-400/50 transition-colors duration-300 rounded-br-3xl" />
                    </div>
                  </div>

                  {/* ScrollStack Card - On opposite side */}
                  <div className={`${event.side === 'right' ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'} h-[400px]`}>
                    <ScrollStack
                      className="h-full"
                      itemDistance={80}
                      itemScale={0.04}
                      itemStackDistance={25}
                      stackPosition="25%"
                      scaleEndPosition="10%"
                      baseScale={0.88}
                      rotationAmount={1}
                      blurAmount={0}
                      useWindowScroll={false}
                    >
                      {/* Placeholder cards - will be replaced with photos */}
                      <ScrollStackItem
                        itemClassName="!h-72 bg-gradient-to-br from-purple-900/90 via-purple-800/80 to-gray-900/90 border border-purple-400/20 backdrop-blur-xl"
                      >
                        <div className="h-full flex flex-col justify-center p-6">
                          <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3"
                            style={{ fontFamily: 'Grafier, sans-serif' }}
                          >
                            {event.year} - Photo 1
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 font-chillax">{event.title}</h3>
                          <p className="text-purple-400/80 text-sm font-medium mb-2 font-chillax">{event.subtitle}</p>
                          <p className="text-gray-300 text-sm leading-relaxed font-chillax">{event.description}</p>
                        </div>
                      </ScrollStackItem>
                      
                      <ScrollStackItem
                        itemClassName="!h-72 bg-gradient-to-br from-pink-900/90 via-purple-800/80 to-gray-900/90 border border-pink-400/20 backdrop-blur-xl"
                      >
                        <div className="h-full flex flex-col justify-center p-6">
                          <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-3"
                            style={{ fontFamily: 'Grafier, sans-serif' }}
                          >
                            {event.year} - Photo 2
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 font-chillax">{event.title}</h3>
                          <p className="text-pink-400/80 text-sm font-medium mb-2 font-chillax">Second Memory</p>
                          <p className="text-gray-300 text-sm leading-relaxed font-chillax">Scroll to see more memories from this milestone.</p>
                        </div>
                      </ScrollStackItem>
                      
                      <ScrollStackItem
                        itemClassName="!h-72 bg-gradient-to-br from-cyan-900/90 via-purple-800/80 to-gray-900/90 border border-cyan-400/20 backdrop-blur-xl"
                      >
                        <div className="h-full flex flex-col justify-center p-6">
                          <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3"
                            style={{ fontFamily: 'Grafier, sans-serif' }}
                          >
                            {event.year} - Photo 3
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 font-chillax">{event.title}</h3>
                          <p className="text-cyan-400/80 text-sm font-medium mb-2 font-chillax">Final Memory</p>
                          <p className="text-gray-300 text-sm leading-relaxed font-chillax">The journey continues with more achievements.</p>
                        </div>
                      </ScrollStackItem>
                    </ScrollStack>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
