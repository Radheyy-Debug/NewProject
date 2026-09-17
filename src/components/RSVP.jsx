import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Heart, Sparkles, User, Users, MessageSquare, Phone } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { RoyalDivider, GoldCorner } from './common/RoyalMotifs';

export const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'accept',
    guests: '2',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      if (formData.attendance === 'accept') {
        confetti({
          particleCount: 75,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#c99a3e', '#ecc880', '#c65a2e', '#641f24', '#fff4dc'],
        });
      }
    }, 600);
  };

  return (
    <section id="rsvp" className="relative py-16 sm:py-24 px-3 sm:px-4 bg-[#23080b] text-[#fff4dc] overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-cinzel text-xs md:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#ecc880] font-semibold">
            Your Presence is Cherished
          </span>
          <h2 className="font-rozha fluid-section-title text-[#fff4dc] mt-2 mb-3 tracking-wide gold-text-gradient">
            We Would Love To Celebrate With You
          </h2>
          
          <RoyalDivider dark={true} className="my-4 sm:my-5" />

          <p className="font-cormorant text-base sm:text-lg md:text-xl text-[#f3dfbe] italic leading-relaxed px-2">
            Kindly grace us with your response by {weddingData.rsvp.deadline} to help us make your royal stay memorable.
          </p>
        </div>

        {/* Royal Invitation RSVP Card / Scroll */}
        <div className="relative bg-[#fdf8ee] text-[#3e2015] rounded-2xl p-4 sm:p-8 md:p-12 border-2 sm:border-4 border-[#c99a3e]/80 shadow-[0_15px_50px_rgba(0,0,0,0.65)] overflow-hidden">
          {/* Inner Ornate Gold Border */}
          <div className="absolute inset-1.5 sm:inset-3 border border-[#c99a3e]/40 pointer-events-none rounded-xl" />
          
          <GoldCorner position="top-left" className="absolute top-1 sm:top-2 left-1 sm:left-2 w-7 sm:w-10 h-7 sm:h-10 opacity-90" />
          <GoldCorner position="top-right" className="absolute top-1 sm:top-2 right-1 sm:right-2 w-7 sm:w-10 h-7 sm:h-10 opacity-90" />
          <GoldCorner position="bottom-left" className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-7 sm:w-10 h-7 sm:h-10 opacity-90" />
          <GoldCorner position="bottom-right" className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-7 sm:w-10 h-7 sm:h-10 opacity-90" />

          {/* Traditional Royal Wax Seal / Stamp */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="wax-seal w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#ecc880]/60 flex flex-col items-center justify-center text-[#fff4dc] shadow-xl select-none">
              <span className="font-rozha text-sm sm:text-base tracking-widest text-[#ecc880]">R & S</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-cinzel text-[#fff4dc]/80">ROYAL SEAL</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-6 sm:py-8 px-2 animate-fadeIn">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#17634b]/15 text-[#17634b] border border-[#17634b]/40 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="font-rozha text-2xl sm:text-3xl text-[#641f24] tracking-wide mb-2">
                {formData.attendance === 'accept' ? 'Shubh Aagman! We Await You' : 'Warm Wishes Received'}
              </h3>
              <p className="font-cormorant text-lg sm:text-xl text-[#542d20] italic max-w-md mx-auto mb-6">
                {formData.attendance === 'accept'
                  ? `Thank you, ${formData.name}. We eagerly look forward to celebrating our special moments with you in Jaisalmer!`
                  : `Thank you, ${formData.name}, for your heartfelt wishes. You will be missed in our celebrations.`}
              </p>
              
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 min-h-[44px] rounded-full border border-[#c99a3e] bg-[#fff4dc] text-[#641f24] font-cinzel text-xs tracking-widest uppercase hover:bg-[#641f24] hover:text-[#fff4dc] active:scale-95 transition-colors"
              >
                Update Response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 max-w-xl mx-auto">
              {/* Full Name */}
              <div>
                <label htmlFor="rsvp-name" className="block font-cinzel text-xs uppercase tracking-widest text-[#641f24] font-semibold mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#c99a3e]" />
                  Your Full Name <span className="text-[#c65a2e]">*</span>
                </label>
                <input
                  id="rsvp-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Maharaja Vikramaditya / Priya Sharma"
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-lg bg-[#fffdfa] border border-[#c99a3e]/60 text-[#3e2015] placeholder-[#8c671b]/50 focus:outline-none focus:border-[#641f24] focus:ring-1 focus:ring-[#641f24] font-cormorant text-base transition-all"
                />
              </div>

              {/* Attendance Radio Pills */}
              <div>
                <label className="block font-cinzel text-xs uppercase tracking-widest text-[#641f24] font-semibold mb-2">
                  Will You Be Joining Us? <span className="text-[#c65a2e]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                    className={`py-3 px-3 sm:px-4 min-h-[44px] rounded-xl border-2 font-cinzel text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.attendance === 'accept'
                        ? 'bg-[#641f24] text-[#fff4dc] border-[#c99a3e] shadow-md scale-[1.01]'
                        : 'bg-[#fffdfa] text-[#542d20] border-[#c99a3e]/40 hover:border-[#c99a3e]'
                    }`}
                  >
                    <Sparkles className={`w-4 h-4 ${formData.attendance === 'accept' ? 'text-[#ecc880]' : 'text-[#c99a3e]'}`} />
                    JOYFULLY ACCEPT
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                    className={`py-3 px-3 sm:px-4 min-h-[44px] rounded-xl border-2 font-cinzel text-xs tracking-wider uppercase font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      formData.attendance === 'decline'
                        ? 'bg-[#542d20] text-[#fff4dc] border-[#c99a3e] shadow-md scale-[1.01]'
                        : 'bg-[#fffdfa] text-[#542d20] border-[#c99a3e]/40 hover:border-[#c99a3e]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${formData.attendance === 'decline' ? 'text-[#ecc880]' : 'text-[#c99a3e]'}`} />
                    REGRETFULLY DECLINE
                  </button>
                </div>
              </div>

              {/* Number of Guests & Phone Number */}
              {formData.attendance === 'accept' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label htmlFor="rsvp-guests" className="block font-cinzel text-xs uppercase tracking-widest text-[#641f24] font-semibold mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#c99a3e]" />
                      Number of Guests
                    </label>
                    <select
                      id="rsvp-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-lg bg-[#fffdfa] border border-[#c99a3e]/60 text-[#3e2015] focus:outline-none focus:border-[#641f24] font-cormorant text-base cursor-pointer"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests (Family)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rsvp-phone" className="block font-cinzel text-xs uppercase tracking-widest text-[#641f24] font-semibold mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#c99a3e]" />
                      Contact / Mobile
                    </label>
                    <input
                      id="rsvp-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 XXXXX"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] rounded-lg bg-[#fffdfa] border border-[#c99a3e]/60 text-[#3e2015] placeholder-[#8c671b]/50 focus:outline-none focus:border-[#641f24] font-cormorant text-base"
                    />
                  </div>
                </div>
              )}

              {/* Personal Message / Wishes */}
              <div>
                <label htmlFor="rsvp-message" className="block font-cinzel text-xs uppercase tracking-widest text-[#641f24] font-semibold mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#c99a3e]" />
                  Blessings & Message for the Couple
                </label>
                <textarea
                  id="rsvp-message"
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your warm wishes, blessings, or dietary preferences..."
                  className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-[#fffdfa] border border-[#c99a3e]/60 text-[#3e2015] placeholder-[#8c671b]/50 focus:outline-none focus:border-[#641f24] font-cormorant text-base resize-none"
                />
              </div>

              {/* Submit Button (Touch target >= 44px) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 min-h-[46px] rounded-xl bg-gradient-to-r from-[#641f24] via-[#7d272d] to-[#641f24] border-2 border-[#c99a3e] text-[#fff4dc] font-cinzel text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold shadow-[0_4px_20px_rgba(100,31,36,0.5)] hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Royal Response...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#ecc880]" />
                      Confirm RSVP Response
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Help Contact */}
          <div className="text-center mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#c99a3e]/30 text-xs font-cormorant text-[#542d20] px-2">
            <p>For any queries regarding travel & accommodations, please write to <strong className="text-[#641f24]">{weddingData.rsvp.contactEmail}</strong> or call <strong className="text-[#641f24]">{weddingData.rsvp.contactPhone}</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};
