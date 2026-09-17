import React from 'react';
import { ArrowUp } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { RoyalDivider, KalashMotif } from './common/RoyalMotifs';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#200508] text-[#fff4dc] pt-14 sm:pt-20 pb-8 sm:pb-12 px-4 border-t-2 border-[#c99a3e]/60 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Auspicious Kalash / Diya */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="p-2.5 sm:p-3 rounded-full bg-[#381013] border border-[#c99a3e]/40 shadow-lg">
            <KalashMotif className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>
        </div>

        {/* Shubh Vivah */}
        <h3 className="font-yatra text-2xl sm:text-3xl text-[#ecc880] tracking-widest mb-2 sm:mb-3">
          {weddingData.weddingAuspicious}
        </h3>

        {/* Sanskrit Mangalam Blessing */}
        <p className="font-yatra text-xs sm:text-sm text-[#d89b45]/90 max-w-lg mx-auto italic mb-4 sm:mb-6 px-2">
          {weddingData.auspiciousShloka}
        </p>

        {/* Thank You Note */}
        <h2 className="font-rozha text-2xl sm:text-4xl text-[#fff4dc] tracking-wide mb-2 sm:mb-3 gold-text-gradient">
          Thank You
        </h2>

        <p className="font-cormorant text-lg sm:text-2xl text-[#f3dfbe] italic leading-relaxed max-w-lg mx-auto mb-5 sm:mb-6 px-2">
          "Your presence and blessings will make our royal celebration even more beautiful and unforgettable."
        </p>

        {/* With Love Rohan & Sneha */}
        <div className="space-y-0.5 sm:space-y-1 mb-6 sm:mb-8">
          <p className="font-cinzel text-[11px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#ecc880]">
            With boundless love & gratitude,
          </p>
          <p className="font-script text-3xl sm:text-5xl text-[#fff4dc] pt-1">
            {weddingData.groom.name} & {weddingData.bride.name}
          </p>
          <p className="font-cinzel text-[11px] sm:text-xs text-[#e8c894] tracking-widest uppercase pt-1">
            {weddingData.hashtag}
          </p>
        </div>

        <RoyalDivider dark={true} className="my-6 sm:my-8" />

        {/* Back to top button (Touch target >= 44x44px) */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#4a1519] border border-[#c99a3e] text-[#ecc880] hover:text-[#fff4dc] hover:bg-[#641f24] active:scale-95 transition-all shadow-md group cursor-pointer"
            aria-label="Back to Top of Page"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <span className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-[#e8c894]">
            Back to Top
          </span>
        </div>

        {/* Copyright & Date */}
        <p className="font-cormorant text-[11px] sm:text-xs text-[#e8c894]/60 tracking-wider mt-8 sm:mt-12">
          © {new Date().getFullYear()} {weddingData.groom.name} & {weddingData.bride.name} • Royal Rajasthani Wedding Invitation
        </p>
      </div>
    </footer>
  );
};
