import React from 'react';
import { MapPin, Navigation, Compass, Plane, Train, PhoneCall, ExternalLink } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { RoyalDivider, GoldCorner } from './common/RoyalMotifs';

export const Venue = () => {
  return (
    <section id="venue" className="relative py-16 sm:py-24 px-4 bg-[#23080b] text-[#fff4dc] overflow-hidden">
      {/* Background Image / Texture overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url('/assets/Background.png')` }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#ecc880] font-semibold">
            Royal Destination
          </span>
          <h2 className="font-rozha fluid-section-title text-[#fff4dc] mt-2 mb-3 tracking-wide gold-text-gradient">
            {weddingData.venue.tagline}
          </h2>
          
          <RoyalDivider dark={true} className="my-4 sm:my-5" />

          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#f3dfbe] italic leading-relaxed max-w-2xl mx-auto px-2">
            {weddingData.venue.description}
          </p>
        </div>

        {/* Venue Showcase Grid: 1 col on mobile, 12 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Palace Information & Map Link */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#3a1014] to-[#26070a] rounded-2xl p-5 sm:p-8 md:p-10 border border-[#c99a3e]/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between relative">
            <GoldCorner position="top-left" className="absolute top-2 left-2 w-7 sm:w-8 h-7 sm:h-8 opacity-75" />
            <GoldCorner position="top-right" className="absolute top-2 right-2 w-7 sm:w-8 h-7 sm:h-8 opacity-75" />

            <div>
              <div className="flex items-center gap-2 text-[#ecc880] mb-2">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-[#c99a3e]" />
                <span className="font-cinzel text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase">The Wedding Abode</span>
              </div>

              <h3 className="font-rozha text-2xl sm:text-3xl md:text-4xl text-[#fff4dc] tracking-wider mb-2 gold-text-gradient">
                {weddingData.venue.name}
              </h3>
              
              <p className="font-cinzel text-xs sm:text-sm text-[#e8c894] tracking-widest uppercase mb-5 sm:mb-6 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c65a2e] shrink-0" />
                <span>{weddingData.venue.city}, {weddingData.venue.state}</span>
              </p>

              {/* Travel Instructions */}
              <div className="space-y-3.5 sm:space-y-4 my-5 sm:my-6 border-t border-[#c99a3e]/30 pt-5 sm:pt-6">
                {weddingData.venue.travelDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#4a1519] border border-[#c99a3e]/40 text-[#ecc880] shrink-0 mt-0.5">
                      {idx === 0 ? <Plane className="w-4 h-4" /> : idx === 1 ? <Train className="w-4 h-4" /> : <PhoneCall className="w-4 h-4" />}
                    </div>
                    <div>
                      <h4 className="font-cinzel text-[11px] sm:text-xs uppercase tracking-widest text-[#ecc880] font-bold">
                        {detail.title}
                      </h4>
                      <p className="font-cormorant text-xs sm:text-sm md:text-base text-[#fff4dc]/85 leading-relaxed font-light">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View on Map Antique Button */}
            <div className="pt-5 sm:pt-6 border-t border-[#c99a3e]/30 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <a
                href={weddingData.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 min-h-[44px] rounded-full bg-gradient-to-r from-[#c65a2e] to-[#641f24] border-2 border-[#ecc880] text-[#fff4dc] font-cinzel text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold shadow-[0_4px_20px_rgba(198,90,46,0.5)] hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2.5"
              >
                <Navigation className="w-4 h-4 text-[#ecc880]" />
                VIEW ON MAP
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>

              <span className="font-cormorant italic text-xs text-[#e8c894] text-center sm:text-left">
                Opens live directions in Google Maps
              </span>
            </div>
          </div>

          {/* Fort / Palace Visual Map Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#3a1014] to-[#26070a] rounded-2xl p-3 sm:p-4 border border-[#c99a3e]/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)] flex flex-col justify-between overflow-hidden relative group">
            <div className="relative w-full h-64 sm:h-80 lg:h-full min-h-[260px] rounded-xl overflow-hidden border border-[#c99a3e]/40">
              <img 
                src="/assets/Jaisalmer Fort.jpg" 
                alt="The Royal Palace Jaisalmer" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26070a] via-transparent to-black/20" />

              {/* Pin Overlay on Venue */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl bg-[#2b0b0e]/95 backdrop-blur-md border border-[#c99a3e]/70 text-center">
                <p className="font-cinzel text-[11px] sm:text-xs text-[#ecc880] tracking-widest uppercase font-semibold">
                  Jaisalmer Golden Fort & Royal Palace
                </p>
                <p className="font-cormorant italic text-[11px] sm:text-xs text-[#fff4dc]/80 mt-0.5">
                  Thar Desert, Rajasthan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
