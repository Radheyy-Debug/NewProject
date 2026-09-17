import React from 'react';
import { weddingData } from '../data/weddingData';
import { GaneshaMotif, RoyalDivider } from './common/RoyalMotifs';

export const Blessings = () => {
  return (
    <section id="blessings" className="relative py-14 sm:py-20 px-4 bg-parchment text-[#3e2015] overflow-hidden border-t-2 border-b-2 border-[#c99a3e]/50">
      {/* Subtle Rajasthani corner patterns */}
      <div className="absolute top-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-[#d89b45]/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tl from-[#d89b45]/15 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Lord Ganesha Minimalist Auspicious Motif */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="p-3 sm:p-4 rounded-full bg-[#fff4dc] border border-[#c99a3e]/60 shadow-[0_4px_15px_rgba(201,154,62,0.2)]">
            <GaneshaMotif className="w-11 h-11 sm:w-14 sm:h-14" />
          </div>
        </div>

        {/* Sanskrit Heading */}
        <h2 className="font-yatra text-xl sm:text-2xl md:text-3xl text-[#641f24] tracking-wider mb-2 sm:mb-3">
          {weddingData.ganeshInvocation}
        </h2>

        {/* Shloka in Devanagari */}
        <p className="font-yatra text-xs sm:text-sm md:text-base text-[#8c671b] leading-relaxed max-w-lg mx-auto whitespace-pre-line mb-3 sm:mb-4 italic opacity-90 px-2">
          {weddingData.ganeshShloka}
        </p>

        {/* Royal Divider */}
        <RoyalDivider className="my-4 sm:my-6" />

        {/* English Blessing Text */}
        <blockquote className="font-cormorant text-lg sm:text-xl md:text-2xl text-[#4a2215] font-normal leading-relaxed max-w-xl mx-auto italic px-2">
          "With the blessings of Lord Ganesha and the love of our families, we begin a beautiful new journey together."
        </blockquote>

        {/* Family names / Heritage note */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#c99a3e]/30 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 text-[#641f24]">
          <div className="text-center">
            <p className="font-cinzel text-[11px] sm:text-xs tracking-widest text-[#8c671b] uppercase">Groom's Family</p>
            <p className="font-cormorant font-semibold text-sm sm:text-base text-[#542d20]">{weddingData.groom.title}</p>
          </div>
          <div className="hidden sm:block text-[#c99a3e]">✦</div>
          <div className="text-center">
            <p className="font-cinzel text-[11px] sm:text-xs tracking-widest text-[#8c671b] uppercase">Bride's Family</p>
            <p className="font-cormorant font-semibold text-sm sm:text-base text-[#542d20]">{weddingData.bride.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
