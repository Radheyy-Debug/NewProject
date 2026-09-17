import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GoldCorner } from './common/RoyalMotifs';

export const Lightbox = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  const touchStartX = useRef(null);

  // Prevent background scrolling while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50 && hasNext) {
      onNext();
    } else if (diff < -50 && hasPrev) {
      onPrev();
    }
    touchStartX.current = null;
  };

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Modal"
    >
      {/* Close button - min 44x44px touch target */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-[#641f24]/90 border border-[#c99a3e] text-[#fff4dc] hover:bg-[#641f24] active:scale-95 transition-all shadow-lg cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Prev button - min 44x44px touch target */}
      {hasPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#641f24]/90 border border-[#c99a3e] text-[#fff4dc] hover:bg-[#641f24] active:scale-95 transition-all shadow-lg cursor-pointer"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button - min 44x44px touch target */}
      {hasNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#641f24]/90 border border-[#c99a3e] text-[#fff4dc] hover:bg-[#641f24] active:scale-95 transition-all shadow-lg cursor-pointer"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Lightbox Card Container */}
      <div 
        className="relative max-w-4xl max-h-[90vh] w-full p-2.5 sm:p-5 rounded-2xl bg-[#2e0c10] border-2 border-[#c99a3e] shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <GoldCorner position="top-left" className="absolute top-1 left-1 w-6 sm:w-8 h-6 sm:h-8 opacity-80" />
        <GoldCorner position="top-right" className="absolute top-1 right-1 w-6 sm:w-8 h-6 sm:h-8 opacity-80" />
        <GoldCorner position="bottom-left" className="absolute bottom-1 left-1 w-6 sm:w-8 h-6 sm:h-8 opacity-80" />
        <GoldCorner position="bottom-right" className="absolute bottom-1 right-1 w-6 sm:w-8 h-6 sm:h-8 opacity-80" />

        <div className="overflow-hidden rounded-lg max-h-[65vh] sm:max-h-[70vh] flex items-center justify-center w-full">
          <img
            src={image.src}
            alt={image.title}
            decoding="async"
            className="max-h-[65vh] sm:max-h-[70vh] max-w-full object-contain rounded-lg shadow-inner"
          />
        </div>

        <div className="text-center mt-3 sm:mt-4 px-2">
          <h3 className="font-rozha text-lg sm:text-2xl text-[#fff4dc] tracking-wide">
            {image.title}
          </h3>
          <p className="font-cormorant italic text-xs sm:text-base text-[#e8c894] mt-0.5 sm:mt-1">
            {image.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};
