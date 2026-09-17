import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { Lightbox } from './Lightbox';
import { RoyalDivider, GoldCorner } from './common/RoyalMotifs';

export const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    if (activeImageIndex !== null && activeImageIndex < weddingData.gallery.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (activeImageIndex !== null && activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  return (
    <section id="gallery" className="relative py-16 sm:py-24 px-4 bg-parchment text-[#3e2015] overflow-hidden border-t border-b border-[#c99a3e]/40">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8c671b] font-semibold">
            Visual Memories
          </span>
          <h2 className="font-rozha fluid-section-title text-[#641f24] mt-2 mb-3 tracking-wide">
            Our Moments
          </h2>
          
          <RoyalDivider className="my-4 sm:my-5" />

          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#542d20] italic max-w-xl mx-auto px-2">
            Glimpses of love, laughter, and timeless Rajputana romance framed beneath the royal sun.
          </p>
        </div>

        {/* Asymmetrical Responsive Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {weddingData.gallery.map((img, index) => (
            <div
              key={img.id}
              onClick={() => openLightbox(index)}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl bg-[#fff4dc] border-2 border-[#c99a3e]/60 shadow-[0_6px_25px_rgba(0,0,0,0.12)] hover:border-[#ecc880] hover:shadow-[0_12px_35px_rgba(201,154,62,0.3)] transition-all duration-300 ${img.span}`}
            >
              {/* Corner flourishes */}
              <GoldCorner position="top-left" className="absolute top-1 left-1 w-5 sm:w-6 h-5 sm:h-6 opacity-70 z-10 pointer-events-none" />
              <GoldCorner position="top-right" className="absolute top-1 right-1 w-5 sm:w-6 h-5 sm:h-6 opacity-70 z-10 pointer-events-none" />
              <GoldCorner position="bottom-left" className="absolute bottom-1 left-1 w-5 sm:w-6 h-5 sm:h-6 opacity-70 z-10 pointer-events-none" />
              <GoldCorner position="bottom-right" className="absolute bottom-1 right-1 w-5 sm:w-6 h-5 sm:h-6 opacity-70 z-10 pointer-events-none" />

              {/* Image Container */}
              <div className={`w-full h-full min-h-[220px] sm:min-h-[280px] md:min-h-[320px] ${img.aspect} overflow-hidden relative`}>
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover / Tap Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#381013]/90 via-[#381013]/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6 text-[#fff4dc]">
                  <div className="flex items-center gap-1.5 text-[#ecc880] mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span className="font-cinzel text-[10px] sm:text-xs tracking-widest uppercase">Click to view</span>
                  </div>
                  <h3 className="font-rozha text-lg sm:text-2xl tracking-wide">{img.title}</h3>
                  <p className="font-cormorant italic text-xs sm:text-sm text-[#e8c894] mt-0.5">{img.subtitle}</p>
                </div>

                {/* Quick View Floating Badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-[#641f24]/80 text-[#ecc880] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                  <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <Lightbox
          image={weddingData.gallery[activeImageIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          hasNext={activeImageIndex < weddingData.gallery.length - 1}
          hasPrev={activeImageIndex > 0}
        />
      )}
    </section>
  );
};
