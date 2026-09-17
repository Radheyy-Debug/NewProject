import React from 'react';
import { weddingData } from '../data/weddingData';
import { EventCard } from './EventCard';
import { RoyalDivider } from './common/RoyalMotifs';

export const Events = () => {
  return (
    <section id="events" className="relative py-16 sm:py-24 px-4 bg-parchment text-[#3e2015] overflow-hidden border-t border-b border-[#c99a3e]/40">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#8c671b] font-semibold">
            Itinerary of Joy
          </span>
          <h2 className="font-rozha fluid-section-title text-[#641f24] mt-2 mb-3 tracking-wide">
            The Wedding Celebrations
          </h2>
          
          <RoyalDivider className="my-4 sm:my-5" />

          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#542d20] italic max-w-xl mx-auto px-2">
            Join us in the sacred rituals, festive melodies, and joyous royal gatherings across our multi-day festivities.
          </p>
        </div>

        {/* Responsive Events Grid: 1 col on mobile, 2 col on tablet, 3 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {weddingData.events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};
