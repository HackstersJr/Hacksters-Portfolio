'use client';

import { useEffect } from 'react';

export default function Scripts() {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => {
      observer.observe(el);
    });

    // Social icon hover effects
    document.querySelectorAll('.social-icon').forEach((icon: Element) => {
      const htmlIcon = icon as HTMLElement;
      htmlIcon.addEventListener('mouseenter', function(this: HTMLElement) {
        const glow = document.createElement('div');
        glow.className = 'absolute inset-0 rounded-full bg-cyan-400/20 blur-xl';
        glow.style.animation = 'pulse 1s infinite';
        this.appendChild(glow);
      });
      
      htmlIcon.addEventListener('mouseleave', function(this: HTMLElement) {
        const glow = this.querySelector('.absolute');
        if (glow) {
          glow.remove();
        }
      });
    });

    // Active navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('text-cyan-400');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-cyan-400');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything, just runs effects
}
