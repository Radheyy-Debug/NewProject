import React from 'react';

// Ornate Rajasthani Corner Flourish
export const GoldCorner = ({ position = 'top-left', className = 'w-12 h-12' }) => {
  const getTransforms = () => {
    switch (position) {
      case 'top-right': return 'scale-x-[-1]';
      case 'bottom-left': return 'scale-y-[-1]';
      case 'bottom-right': return 'scale-[-1]';
      default: return '';
    }
  };

  return (
    <svg 
      className={`${className} ${getTransforms()} pointer-events-none text-[#d89b45]`} 
      viewBox="0 0 100 100" 
      fill="currentColor"
    >
      <path d="M0,0 L40,0 C35,10 30,15 20,20 C15,30 10,35 0,40 Z" fill="url(#goldGradient)" opacity="0.85"/>
      <path d="M0,0 L90,0 C75,5 65,15 60,30 C55,20 45,15 35,12 C25,10 15,10 0,0 Z" fill="url(#goldGradient)" opacity="0.6"/>
      <path d="M0,0 L0,90 C5,75 15,65 30,60 C20,55 15,45 12,35 C10,25 10,15 0,0 Z" fill="url(#goldGradient)" opacity="0.6"/>
      <circle cx="28" cy="28" r="4" fill="url(#goldGradient)" />
      <circle cx="15" cy="50" r="2.5" fill="url(#goldGradient)" opacity="0.8" />
      <circle cx="50" cy="15" r="2.5" fill="url(#goldGradient)" opacity="0.8" />
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4DC" />
          <stop offset="40%" stopColor="#ECC880" />
          <stop offset="70%" stopColor="#C99A3E" />
          <stop offset="100%" stopColor="#9B6E1E" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Ornate Gold Center Divider
export const RoyalDivider = ({ className = 'my-6', dark = false }) => {
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
      <div className={`h-[1px] flex-1 ${dark ? 'bg-gradient-to-r from-transparent via-[#c99a3e]/60 to-[#c99a3e]' : 'bg-gradient-to-r from-transparent via-[#c99a3e]/80 to-[#c99a3e]'}`} />
      
      <div className="flex items-center gap-1.5 text-[#c99a3e]">
        <span className="text-[10px]">✦</span>
        <svg className="w-5 h-5 text-[#c99a3e]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2 L14.5,8.5 L21,9.5 L16,14.5 L17.5,21 L12,17.5 L6.5,21 L8,14.5 L3,9.5 L9.5,8.5 Z" />
        </svg>
        <span className="text-[10px]">✦</span>
      </div>

      <div className={`h-[1px] flex-1 ${dark ? 'bg-gradient-to-l from-transparent via-[#c99a3e]/60 to-[#c99a3e]' : 'bg-gradient-to-l from-transparent via-[#c99a3e]/80 to-[#c99a3e]'}`} />
    </div>
  );
};

// Auspicious Lord Ganesha Motif (Minimalist Traditional Silhouette)
export const GaneshaMotif = ({ className = 'w-16 h-16' }) => {
  return (
    <svg className={`${className} text-[#c99a3e] drop-shadow-md`} viewBox="0 0 100 100" fill="currentColor">
      {/* Crown / Mukut */}
      <path d="M42 16 L50 6 L58 16 L54 22 L46 22 Z" fill="#d89b45" />
      <circle cx="50" cy="14" r="2" fill="#fff4dc" />
      
      {/* Tilak / Trishul mark */}
      <path d="M49 20 Q50 25 50 30 Q50 25 51 20 Z" stroke="#641f24" strokeWidth="2" fill="#641f24" />
      <circle cx="50" cy="28" r="1.5" fill="#c65a2e" />
      
      {/* Ear Left */}
      <path d="M42 26 C30 24 24 34 32 44 C36 48 40 48 42 46" fill="none" stroke="#c99a3e" strokeWidth="3" strokeLinecap="round" />
      
      {/* Ear Right */}
      <path d="M58 26 C70 24 76 34 68 44 C64 48 60 48 58 46" fill="none" stroke="#c99a3e" strokeWidth="3" strokeLinecap="round" />
      
      {/* Trunk (Vakratunda) */}
      <path d="M46 28 Q44 48 47 62 Q50 74 62 72 Q68 70 66 62 Q64 56 57 58" fill="none" stroke="#c99a3e" strokeWidth="4" strokeLinecap="round" />
      
      {/* Modak in Hand / Trunk Tip */}
      <circle cx="66" cy="62" r="3.5" fill="#d89b45" />
      <circle cx="66" cy="62" r="1.5" fill="#fff4dc" />
      
      {/* Auspicious eye */}
      <ellipse cx="45" cy="32" rx="2" ry="3.5" fill="#3e2015" />
      <circle cx="45" cy="31" r="0.8" fill="#fff" />
      
      {/* Base Lotus Petals */}
      <path d="M30 84 C40 76 60 76 70 84 C62 88 38 88 30 84 Z" fill="#c99a3e" opacity="0.8" />
      <path d="M38 88 C45 84 55 84 62 88 C56 91 44 91 38 88 Z" fill="#c65a2e" opacity="0.7" />
    </svg>
  );
};

// Traditional Kalash Motif
export const KalashMotif = ({ className = 'w-12 h-12' }) => {
  return (
    <svg className={`${className} text-[#c99a3e]`} viewBox="0 0 80 80" fill="currentColor">
      {/* Coconut on Top */}
      <path d="M35 15 C35 8 45 8 45 15 C48 22 32 22 35 15 Z" fill="#542d20" />
      {/* Mango leaves */}
      <path d="M25 24 C28 14 38 18 36 26 Z" fill="#17634b" />
      <path d="M55 24 C52 14 42 18 44 26 Z" fill="#17634b" />
      <path d="M32 25 C34 16 46 16 48 25 Z" fill="#17634b" />
      {/* Pot / Kalash */}
      <ellipse cx="40" cy="28" rx="14" ry="4" fill="#c99a3e" />
      <path d="M26 28 C22 40 20 54 30 62 C34 65 46 65 50 62 C60 54 58 40 54 28 Z" fill="#d89b45" />
      {/* Swastika / Sacred mark on Pot */}
      <circle cx="40" cy="46" r="3" fill="#641f24" />
      {/* Base */}
      <ellipse cx="40" cy="65" rx="12" ry="3.5" fill="#c99a3e" />
    </svg>
  );
};

// Traditional Hanging Lantern / Diya Motif
export const HangingLantern = ({ className = 'w-10 h-28' }) => {
  return (
    <svg className={`${className} animate-float-slow text-[#c99a3e] drop-shadow-lg`} viewBox="0 0 60 160" fill="currentColor">
      {/* Top Hanging Chain */}
      <line x1="30" y1="0" x2="30" y2="40" stroke="#c99a3e" strokeWidth="2" strokeDasharray="3 2" />
      <circle cx="30" cy="42" r="3" fill="#d89b45" />
      
      {/* Lantern Cap */}
      <path d="M20 48 L30 42 L40 48 L36 54 L24 54 Z" fill="#d89b45" />
      
      {/* Lantern Body / Glass */}
      <path d="M22 54 L14 74 L18 100 L42 100 L46 74 L38 54 Z" fill="#c99a3e" opacity="0.3" stroke="#d89b45" strokeWidth="2" />
      
      {/* Glowing Diya Light inside */}
      <circle cx="30" cy="80" r="10" fill="#fff4dc" className="animate-pulse" opacity="0.9" filter="drop-shadow(0 0 8px #e9823a)" />
      <path d="M28 82 Q30 70 30 66 Q30 70 32 82 Z" fill="#e9823a" />
      
      {/* Metal Base */}
      <path d="M16 100 L44 100 L38 110 L22 110 Z" fill="#d89b45" />
      
      {/* Hanging Bell / Jhumka Bottom */}
      <line x1="30" y1="110" x2="30" y2="125" stroke="#c99a3e" strokeWidth="2" />
      <circle cx="30" cy="130" r="4.5" fill="#d89b45" />
      <circle cx="30" cy="138" r="2.5" fill="#ecc880" />
    </svg>
  );
};

// Event Icons
export const EventMotif = ({ type, className = 'w-10 h-10' }) => {
  switch (type) {
    case 'mehendi':
      return (
        <svg className={`${className} text-[#17634b]`} viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="28" fill="#17634b" opacity="0.15" />
          <circle cx="32" cy="32" r="6" fill="#17634b" />
          <circle cx="32" cy="20" r="3.5" fill="#17634b" />
          <circle cx="32" cy="44" r="3.5" fill="#17634b" />
          <circle cx="20" cy="32" r="3.5" fill="#17634b" />
          <circle cx="44" cy="32" r="3.5" fill="#17634b" />
          <circle cx="23" cy="23" r="2.5" fill="#17634b" />
          <circle cx="41" cy="41" r="2.5" fill="#17634b" />
          <circle cx="23" cy="41" r="2.5" fill="#17634b" />
          <circle cx="41" cy="23" r="2.5" fill="#17634b" />
        </svg>
      );
    case 'haldi':
      return (
        <svg className={`${className} text-[#d89b45]`} viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="28" fill="#d89b45" opacity="0.2" />
          <path d="M22 36 C22 24 42 24 42 36 C42 44 22 44 22 36 Z" fill="#d89b45" />
          <circle cx="32" cy="24" r="4" fill="#e9823a" />
          <path d="M26 44 L38 44 L35 50 L29 50 Z" fill="#c65a2e" />
        </svg>
      );
    case 'sangeet':
      return (
        <svg className={`${className} text-[#c65a2e]`} viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="28" fill="#c65a2e" opacity="0.15" />
          {/* Veena / Sitar silhouette */}
          <circle cx="24" cy="40" r="10" fill="#c65a2e" />
          <rect x="22" y="14" width="4" height="26" rx="2" fill="#c65a2e" transform="rotate(35 24 27)" />
          <circle cx="43" cy="18" r="5" fill="#d89b45" />
        </svg>
      );
    case 'baraat':
      return (
        <svg className={`${className} text-[#641f24]`} viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="28" fill="#641f24" opacity="0.15" />
          {/* Royal Camel / Turban silhouette */}
          <path d="M20 46 L24 34 L32 30 L40 24 L48 24 L50 30 L42 34 L40 46 L34 46 L32 38 L26 38 L24 46 Z" fill="#641f24" />
          <circle cx="46" cy="22" r="3" fill="#d89b45" />
        </svg>
      );
    case 'pheras':
      return (
        <svg className={`${className} text-[#641f24]`} viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="28" fill="#641f24" opacity="0.15" />
          {/* Sacred Agni Mandap */}
          <path d="M18 48 L46 48 L42 42 L22 42 Z" fill="#542d20" />
          <path d="M32 20 Q38 32 32 38 Q26 32 32 20 Z" fill="#e9823a" />
          <path d="M32 25 Q35 32 32 37 Q29 32 32 25 Z" fill="#fff4dc" />
        </svg>
      );
    case 'reception':
      return (
        <svg className={`${className} text-[#173b63]`} viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="28" fill="#173b63" opacity="0.15" />
          {/* Royal Palace Dome / Jharokha */}
          <path d="M20 44 L44 44 L44 32 L32 20 L20 32 Z" fill="#173b63" />
          <circle cx="32" cy="18" r="3" fill="#d89b45" />
        </svg>
      );
    default:
      return (
        <svg className={`${className} text-[#c99a3e]`} viewBox="0 0 64 64" fill="currentColor">
          <circle cx="32" cy="32" r="28" fill="#c99a3e" opacity="0.15" />
          <polygon points="32,16 36,27 48,27 38,34 42,46 32,39 22,46 26,34 16,27 28,27" fill="#c99a3e" />
        </svg>
      );
  }
};
