import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { RoyalDivider, GoldCorner } from './common/RoyalMotifs';

export const CoupleSection = () => {
  return (
    <section id="couple" className="relative py-16 sm:py-24 px-4 bg-[#23080b] text-[#fff4dc] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-gradient-to-br from-[#c65a2e]/15 via-[#641f24]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#ecc880] font-semibold">
            The Royal Couple
          </span>
          <h2 className="font-rozha fluid-section-title text-[#fff4dc] mt-2 mb-3 tracking-wide gold-text-gradient">
            {weddingData.romanticQuote.title}
          </h2>
          
          <RoyalDivider dark={true} className="my-4 sm:my-5" />

          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#f3dfbe] italic leading-relaxed font-light px-2">
            "{weddingData.romanticQuote.text}"
          </p>
        </div>

        {/* Couple Profile Cards with Royal Jharokha Arch Framing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 items-stretch">
          {/* Groom Card */}
          <div className="relative group bg-gradient-to-b from-[#3a1014] to-[#26070a] rounded-2xl p-5 sm:p-8 border border-[#c99a3e]/50 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:border-[#ecc880] transition-all duration-300 flex flex-col justify-between">
            <GoldCorner position="top-left" className="absolute top-2 left-2 w-7 sm:w-8 h-7 sm:h-8 opacity-75" />
            <GoldCorner position="top-right" className="absolute top-2 right-2 w-7 sm:w-8 h-7 sm:h-8 opacity-75" />

            <div className="flex flex-col items-center text-center">
              {/* Illustrated Frame */}
              <div className="relative w-40 h-52 sm:w-48 sm:h-60 rounded-t-full border-2 border-[#c99a3e] p-1.5 sm:p-2 bg-[#4a1519]/60 mb-5 sm:mb-6 shadow-inner overflow-hidden">
                <div className="w-full h-full rounded-t-full overflow-hidden bg-gradient-to-b from-[#641f24] to-[#1a0507] flex items-center justify-center relative">
                  <img 
                    src="/assets/download (1).jpg" 
                    alt="Rohan - The Groom" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26070a] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

              <span className="font-cinzel text-xs tracking-[0.25em] text-[#ecc880] uppercase mb-1">
                The Groom
              </span>
              <h3 className="font-rozha text-2xl sm:text-3xl md:text-4xl text-[#fff4dc] tracking-wide mb-1">
                {weddingData.groom.fullName}
              </h3>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#e8c894] mb-3 sm:mb-4">
                {weddingData.groom.title}
              </p>
              
              <div className="w-16 h-[1px] bg-[#c99a3e]/40 mb-3 sm:mb-4" />

              <p className="font-cormorant text-sm sm:text-base md:text-lg text-[#fff4dc]/85 leading-relaxed font-light">
                {weddingData.groom.about}
              </p>
            </div>
          </div>

          {/* Bride Card */}
          <div className="relative group bg-gradient-to-b from-[#3a1014] to-[#26070a] rounded-2xl p-5 sm:p-8 border border-[#c99a3e]/50 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:border-[#ecc880] transition-all duration-300 flex flex-col justify-between">
            <GoldCorner position="top-left" className="absolute top-2 left-2 w-7 sm:w-8 h-7 sm:h-8 opacity-75" />
            <GoldCorner position="top-right" className="absolute top-2 right-2 w-7 sm:w-8 h-7 sm:h-8 opacity-75" />

            <div className="flex flex-col items-center text-center">
              {/* Illustrated Frame */}
              <div className="relative w-40 h-52 sm:w-48 sm:h-60 rounded-t-full border-2 border-[#c99a3e] p-1.5 sm:p-2 bg-[#4a1519]/60 mb-5 sm:mb-6 shadow-inner overflow-hidden">
                <div className="w-full h-full rounded-t-full overflow-hidden bg-gradient-to-b from-[#641f24] to-[#1a0507] flex items-center justify-center relative">
                  <img 
                    src="/assets/download (2).jpg" 
                    alt="Sneha - The Bride" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#26070a] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>

              <span className="font-cinzel text-xs tracking-[0.25em] text-[#ecc880] uppercase mb-1">
                The Bride
              </span>
              <h3 className="font-rozha text-2xl sm:text-3xl md:text-4xl text-[#fff4dc] tracking-wide mb-1">
                {weddingData.bride.fullName}
              </h3>
              <p className="font-cormorant italic text-xs sm:text-sm text-[#e8c894] mb-3 sm:mb-4">
                {weddingData.bride.title}
              </p>
              
              <div className="w-16 h-[1px] bg-[#c99a3e]/40 mb-3 sm:mb-4" />

              <p className="font-cormorant text-sm sm:text-base md:text-lg text-[#fff4dc]/85 leading-relaxed font-light">
                {weddingData.bride.about}
              </p>
            </div>
          </div>
        </div>

        {/* Central Love Knot Icon */}
        <div className="mt-8 sm:mt-12 flex justify-center items-center gap-3 text-[#ecc880]">
          <span className="h-[1px] w-12 sm:w-16 bg-[#c99a3e]/50" />
          <div className="p-2 rounded-full border border-[#c99a3e]/60 bg-[#4a1519]/80 shadow-md">
            <Heart className="w-4 sm:w-5 h-4 sm:h-5 fill-[#c65a2e] text-[#ecc880]" />
          </div>
          <span className="h-[1px] w-12 sm:w-16 bg-[#c99a3e]/50" />
        </div>
      </div>
    </section>
  );
};
