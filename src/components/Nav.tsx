'use client';

import { useEffect } from 'react';

export default function Nav() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('py-4');
        navbar.classList.remove('py-6');
      } else {
        navbar.classList.add('py-6');
        navbar.classList.remove('py-4');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300" id="navbar">
      <div className="container mx-auto px-4">
        <div className="glass-nav rounded-full px-8 py-4 max-w-2xl mx-auto">
          <ul className="flex items-center justify-center space-x-8 font-chillax">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 text-gray-300">Home</a></li>
            <li><a href="#timeline" onClick={(e) => { e.preventDefault(); scrollToSection('timeline'); }} className="nav-link px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 text-gray-300">Timeline</a></li>
            <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="nav-link px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 text-gray-300">Gallery</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 text-gray-300">About</a></li>
            <li><a href="#team" onClick={(e) => { e.preventDefault(); scrollToSection('team'); }} className="nav-link px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 text-gray-300">Team</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cyan-400 text-gray-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
