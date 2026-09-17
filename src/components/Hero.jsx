import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldCorner, HangingLantern } from './common/RoyalMotifs';

export const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(weddingData.weddingDateISO).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-[100svh] w-full flex flex-col justify-between items-center text-center overflow-hidden bg-[#200508] pt-20 sm:pt-24 pb-6 sm:pb-10 px-3 sm:px-4"
    >
      {/* Background Layer: Shows complete original picture on mobile without zooming */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#200508]">
        {/* Ambient Blurred Backdrop for seamless color blend on mobile portrait screens */}
        <img 
          src="/assets/Background.png" 
          alt="" 
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-45 scale-110"
        />
        
        {/* Sharp Original Image - Contained on mobile so entire illustration & composition is 100% visible */}
        <img 
          src="/assets/Background.png" 
          alt="Royal Rajasthani Desert Sunset" 
          className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
        />

        {/* Soft atmospheric gradient overlays for text contrast and seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a080c]/75 via-black/30 to-[#200508]/95" />
      </div>

      {/* Decorative Hanging Lanterns on sides */}
      <div className="absolute top-14 left-2 sm:left-6 md:left-12 pointer-events-none hidden sm:block z-10">
        <HangingLantern className="w-6 sm:w-8 md:w-10 h-28 sm:h-36 md:h-44 text-[#ecc880]" />
      </div>
      <div className="absolute top-14 right-2 sm:right-6 md:right-12 pointer-events-none hidden sm:block z-10">
        <HangingLantern className="w-6 sm:w-8 md:w-10 h-30 sm:h-40 md:h-48 text-[#ecc880]" />
      </div>

      {/* Traditional Rajasthani Ornate Frame Overlay */}
      <div className="absolute inset-2 sm:inset-4 md:inset-8 border border-[#c99a3e]/40 pointer-events-none rounded-sm z-10">
        <div className="absolute inset-1 sm:inset-1.5 md:inset-2 border border-[#ecc880]/20 pointer-events-none" />
        <GoldCorner position="top-left" className="absolute -top-1 -left-1 w-7 sm:w-12 md:w-16 h-7 sm:h-12 md:h-16" />
        <GoldCorner position="top-right" className="absolute -top-1 -right-1 w-7 sm:w-12 md:w-16 h-7 sm:h-12 md:h-16" />
        <GoldCorner position="bottom-left" className="absolute -bottom-1 -left-1 w-7 sm:w-12 md:w-16 h-7 sm:h-12 md:h-16" />
        <GoldCorner position="bottom-right" className="absolute -bottom-1 -right-1 w-7 sm:w-12 md:w-16 h-7 sm:h-12 md:h-16" />
      </div>

      {/* Top Auspicious Shloka */}
      <div className="relative z-10 max-w-4xl mx-auto mt-1 sm:mt-2">
        <div className="inline-block px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-full bg-[#381013]/85 border border-[#c99a3e]/70 backdrop-blur-md shadow-lg mb-1.5 sm:mb-2.5">
          <p className="font-yatra text-[#ecc880] text-xs sm:text-sm md:text-base tracking-widest">
            {weddingData.ganeshInvocation}
          </p>
        </div>
        <p className="font-cormorant italic text-[#fff4dc] text-xs sm:text-base md:text-lg tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light drop-shadow-md">
          Together with their families
        </p>
      </div>

      {/* Main Couple Names & Invitation Body */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto py-2 sm:py-4 px-2">
        {/* Couple Names with responsive clamp typography */}
        <div className="space-y-0.5 sm:space-y-1">
          <h1 className="font-rozha fluid-hero-name tracking-wide gold-text-gradient drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            {weddingData.groom.name.toUpperCase()}
          </h1>
          <div className="flex items-center justify-center gap-3 sm:gap-4 py-0.5 sm:py-1">
            <span className="h-[1px] w-8 sm:w-16 md:w-24 bg-gradient-to-r from-transparent to-[#ecc880]" />
            <span className="font-script text-2xl sm:text-4xl md:text-5xl text-[#fff4dc] font-normal leading-none">&</span>
            <span className="h-[1px] w-8 sm:w-16 md:w-24 bg-gradient-to-l from-transparent to-[#ecc880]" />
          </div>
          <h1 className="font-rozha fluid-hero-name tracking-wide gold-text-gradient drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            {weddingData.bride.name.toUpperCase()}
          </h1>
        </div>

        {/* Invitation Text */}
        <p className="font-cormorant italic text-[#fcefd2] text-sm sm:text-lg md:text-xl mt-2.5 sm:mt-4 mb-1 sm:mb-2 font-normal tracking-wide drop-shadow-md max-w-xl mx-auto">
          invite you to celebrate their royal wedding
        </p>

        {/* Wedding Date & Location Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2.5 sm:mt-3">
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#4a1519]/90 border border-[#c99a3e] backdrop-blur-md text-[#fff4dc] shadow-xl">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ecc880]" />
            <span className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] font-semibold">
              {weddingData.dateFormatted}
            </span>
          </div>
          
          <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#4a1519]/90 border border-[#c99a3e] backdrop-blur-md text-[#fff4dc] shadow-xl">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ecc880]" />
            <span className="font-cinzel text-[11px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em]">
              {weddingData.locationDisplay}
            </span>
          </div>
        </div>
      </div>

      {/* Countdown Timer to Wedding */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-2">
        <div className="bg-[#2e0c10]/95 border border-[#c99a3e]/80 rounded-xl p-2 sm:p-3.5 backdrop-blur-md shadow-2xl">
          <p className="font-cinzel text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#ecc880] mb-1 sm:mb-1.5">
            Counting Down To The Celebrations
          </p>
          <div className="grid grid-cols-4 gap-1.5 sm:gap-3 text-[#fff4dc]">
            <div className="flex flex-col items-center p-1 sm:p-1.5 rounded bg-black/50 border border-[#c99a3e]/30">
              <span className="font-rozha text-base sm:text-xl md:text-2xl text-[#ecc880] leading-tight">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-widest uppercase text-[#e8c894]">Days</span>
            </div>
            <div className="flex flex-col items-center p-1 sm:p-1.5 rounded bg-black/50 border border-[#c99a3e]/30">
              <span className="font-rozha text-base sm:text-xl md:text-2xl text-[#ecc880] leading-tight">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-widest uppercase text-[#e8c894]">Hours</span>
            </div>
            <div className="flex flex-col items-center p-1 sm:p-1.5 rounded bg-black/50 border border-[#c99a3e]/30">
              <span className="font-rozha text-base sm:text-xl md:text-2xl text-[#ecc880] leading-tight">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-widest uppercase text-[#e8c894]">Mins</span>
            </div>
            <div className="flex flex-col items-center p-1 sm:p-1.5 rounded bg-black/50 border border-[#c99a3e]/30">
              <span className="font-rozha text-base sm:text-xl md:text-2xl text-[#ecc880] leading-tight">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="font-cinzel text-[8px] sm:text-[9px] tracking-widest uppercase text-[#e8c894]">Secs</span>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a 
          href="#blessings" 
          className="inline-flex flex-col items-center mt-2 sm:mt-3 text-[#ecc880] hover:text-[#fff4dc] transition-colors group p-1"
          aria-label="Scroll to blessings section"
        >
          <span className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.25em] uppercase mb-0.5">Scroll to Explore</span>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce text-[#c99a3e] group-hover:text-[#ecc880]" />
        </a>
      </div>
    </section>
  );
};
