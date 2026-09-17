import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, Shirt } from 'lucide-react';
import { EventMotif, GoldCorner } from './common/RoyalMotifs';

export const EventCard = ({ event }) => {
  // Generate Google Calendar Link
  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent(`${event.title} - Rohan & Sneha's Wedding`);
    const details = encodeURIComponent(`${event.description}\nDress Code: ${event.dressCode}`);
    const location = encodeURIComponent(`${event.venue}, ${event.location}`);
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div className="relative group bg-[#fefaf0] text-[#3e2015] rounded-xl p-5 sm:p-7 md:p-8 border-2 border-[#c99a3e]/60 shadow-[0_6px_25px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(201,154,62,0.3)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Delicate inner double border */}
      <div className="absolute inset-1.5 border border-[#c99a3e]/30 pointer-events-none rounded-lg" />
      
      {/* Corner gold flourishes */}
      <GoldCorner position="top-left" className="absolute top-1 left-1 w-6 sm:w-7 h-6 sm:h-7 opacity-80" />
      <GoldCorner position="top-right" className="absolute top-1 right-1 w-6 sm:w-7 h-6 sm:h-7 opacity-80" />
      <GoldCorner position="bottom-left" className="absolute bottom-1 left-1 w-6 sm:w-7 h-6 sm:h-7 opacity-80" />
      <GoldCorner position="bottom-right" className="absolute bottom-1 right-1 w-6 sm:w-7 h-6 sm:h-7 opacity-80" />

      {/* Top Motif Header */}
      <div>
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="p-2.5 sm:p-3 rounded-full bg-[#fff4dc] border border-[#c99a3e]/40 shadow-sm group-hover:scale-105 transition-transform duration-300">
            <EventMotif type={event.motif} className="w-8 h-8 sm:w-9 sm:h-9" />
          </div>
        </div>

        {/* Event Title */}
        <div className="text-center mb-3 sm:mb-4">
          <h3 
            className="font-rozha fluid-event-title tracking-wider uppercase mb-1"
            style={{ color: event.themeColor || '#641f24' }}
          >
            {event.title}
          </h3>
          <div className="w-10 sm:w-12 h-[1.5px] bg-[#c99a3e] mx-auto opacity-70" />
        </div>

        {/* Event Meta: Date, Time, Venue */}
        <div className="space-y-2 sm:space-y-2.5 my-4 text-sm sm:text-base font-cormorant">
          <div className="flex items-center gap-2.5 text-[#542d20]">
            <Calendar className="w-4 h-4 text-[#c65a2e] shrink-0" />
            <span className="font-semibold text-sm sm:text-base">{event.date}</span>
          </div>

          <div className="flex items-center gap-2.5 text-[#542d20]">
            <Clock className="w-4 h-4 text-[#d89b45] shrink-0" />
            <span className="text-sm sm:text-base">{event.time}</span>
          </div>

          <div className="flex items-start gap-2.5 text-[#542d20]">
            <MapPin className="w-4 h-4 text-[#641f24] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm sm:text-base">{event.venue}</p>
              <p className="text-xs text-[#8c671b] italic">{event.location}</p>
            </div>
          </div>

          {event.dressCode && (
            <div className="flex items-start gap-2.5 text-[#542d20] pt-0.5">
              <Shirt className="w-4 h-4 text-[#17634b] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] sm:text-xs uppercase font-cinzel tracking-wider text-[#8c671b] block">Dress Code</span>
                <span className="text-xs italic text-[#3e2015]">{event.dressCode}</span>
              </div>
            </div>
          )}
        </div>

        {/* Short Description */}
        <p className="font-cormorant text-xs sm:text-sm italic text-[#542d20]/90 leading-relaxed border-t border-[#c99a3e]/25 pt-2.5 sm:pt-3 mb-4 sm:mb-5">
          {event.description}
        </p>
      </div>

      {/* Action: Add to Calendar Button (Min Touch Target >= 44px) */}
      <div className="pt-1">
        <a
          href={createGoogleCalendarLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 min-h-[44px] rounded-md bg-[#fff4dc] hover:bg-[#641f24] text-[#641f24] hover:text-[#fff4dc] border border-[#c99a3e]/80 font-cinzel text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2 transition-colors duration-200 shadow-sm active:scale-98"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d89b45]" />
          Add to Calendar
        </a>
      </div>
    </div>
  );
};
