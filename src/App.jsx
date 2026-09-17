import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Blessings } from './components/Blessings';
import { CoupleSection } from './components/CoupleSection';
import { Events } from './components/Events';
import { Venue } from './components/Venue';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#200508] text-[#fff4dc] selection:bg-[#c65a2e] selection:text-white">
      {/* Sticky / Floating Royal Navbar */}
      <Navbar />

      {/* Main Wedding Invitation Sections */}
      <main>
        {/* 1. Hero / Landing Section with Sunset & Countdown */}
        <Hero />

        {/* 2. Lord Ganesha / Blessings Section */}
        <Blessings />

        {/* 3. Couple Introduction: Two Souls, One Beautiful Journey */}
        <CoupleSection />

        {/* 4. Wedding Celebrations Itinerary */}
        <Events />

        {/* 5. Venue: The Celebration Awaits */}
        <Venue />

        {/* 6. Photo Gallery with Lightbox */}
        <Gallery />

        {/* 7. Royal RSVP Form */}
        <RSVP />
      </main>

      {/* 8. Royal Footer with Shubh Vivah */}
      <Footer />
    </div>
  );
}

export default App;
