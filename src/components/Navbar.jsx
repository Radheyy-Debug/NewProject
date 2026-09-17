import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key or outside click
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Blessings', href: '#blessings' },
    { name: 'Our Story', href: '#couple' },
    { name: 'Events', href: '#events' },
    { name: 'Venue', href: '#venue' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#381013]/95 backdrop-blur-md py-2.5 shadow-[0_4px_25px_rgba(0,0,0,0.5)] border-b border-[#c99a3e]/40'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-3.5 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Monogram / Brand */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
            aria-label="Rohan and Sneha Wedding Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#c99a3e] flex items-center justify-center bg-[#641f24]/80 shadow-md group-hover:border-[#ecc880] transition-colors shrink-0">
              <span className="font-rozha text-[#fff4dc] text-xs sm:text-sm tracking-wider">R&S</span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-[#ecc880] uppercase font-bold truncate max-w-[140px] sm:max-w-none">
                {weddingData.groom.name} & {weddingData.bride.name}
              </span>
              <span className="font-cormorant italic text-[10px] sm:text-[11px] text-[#e8c894] tracking-widest">
                Royal Invitation
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-cinzel text-xs tracking-[0.2em] text-[#fff4dc]/90 hover:text-[#ecc880] transition-colors uppercase relative py-1.5 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[1.5px] after:bg-[#c99a3e] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Quick RSVP & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* RSVP Desktop Button */}
            <a
              href="#rsvp"
              onClick={(e) => handleNavClick(e, '#rsvp')}
              className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2 min-h-[40px] rounded-full bg-gradient-to-r from-[#c65a2e] to-[#641f24] border border-[#c99a3e] text-[#fff4dc] text-xs font-cinzel tracking-widest uppercase shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              <Sparkles className="w-3 h-3 text-[#ecc880]" />
              RSVP
            </a>

            {/* Mobile Menu Toggle Button (Touch Target >= 44x44px) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-[#fff4dc] hover:text-[#ecc880] hover:bg-white/5 active:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2a0b0e]/98 backdrop-blur-2xl border-b border-[#c99a3e]/40 px-5 py-5 transition-all duration-200 shadow-2xl">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-cinzel text-sm tracking-[0.2em] text-[#fff4dc] hover:text-[#ecc880] py-3 px-3 rounded-lg hover:bg-[#641f24]/30 border-b border-[#c99a3e]/15 flex items-center justify-between min-h-[44px]"
              >
                <span>{link.name}</span>
                <span className="text-[#c99a3e] text-xs">✦</span>
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#rsvp"
                onClick={(e) => handleNavClick(e, '#rsvp')}
                className="w-full text-center py-3 min-h-[44px] flex items-center justify-center rounded-full bg-gradient-to-r from-[#c65a2e] to-[#641f24] border border-[#c99a3e] text-[#fff4dc] font-cinzel text-xs tracking-widest uppercase shadow-lg active:scale-98"
              >
                RSVP to Celebrate
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
