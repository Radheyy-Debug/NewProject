# 👑 Royal Rajasthani Wedding Invitation

A luxury, fully responsive **Rajasthani Wedding Invitation Website** based on the romantic **Desert Sunset Rajasthani** theme. Built with **React 19**, **Vite**, and **Tailwind CSS**, featuring traditional Rajputana ornamental design, Sanskrit shlokas, interactive event itinerary, asymmetrical photo gallery with lightbox, and a vintage wax-seal RSVP system.

---

## ✨ Features

- 🌅 **Desert Sunset Hero**: Full-width sunset background with Rajasthani couple and camel aesthetic, Sanskrit invocation (`॥ श्री गणेशाय नमः ॥`), and live real-time countdown timer.
- 🪔 **Lord Ganesha Blessings**: Minimalist parchment section with sacred Sanskrit shlokas and family heritage notes.
- 💍 **The Royal Couple ("Two Souls, One Beautiful Journey")**: Rohan & Sneha stories encased in traditional Jharokha arch frames.
- 📜 **Miniature Royal Event Cards**: 6 celebration invitations (Mehendi, Haldi, Sangeet, Baraat, Pheras, Reception) with dedicated motifs, dress codes, timings, and **Add to Google Calendar** integration.
- 🏰 **Palace Destination & Maps**: The Royal Palace, Jaisalmer showcase with travel directions (Air, Rail, Stay Desk) and an antique royal seal **"VIEW ON MAP"** button.
- 📸 **Asymmetrical Photo Gallery & Lightbox**: Masonry-styled gallery with full-screen lightbox modal supporting touch gestures, keyboard arrows, and scroll locking.
- 💌 **Vintage Wax-Seal RSVP**: Old-world parchment card with 3D wax seal, joyfully accept / regretfully decline options, guest count, and celebratory confetti.
- 📱 **100% Mobile Responsive**: Tested across viewports from 320px to 4K displays with fluid typography (`clamp()`) and accessible $\ge 44\text{px}$ touch targets.
- ⚙️ **Centralized Configuration**: All names, dates, events, venue, and images can be edited in a single file: `src/data/weddingData.js`.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)

### Installation
```bash
# Clone repository
git clone <YOUR_REPOSITORY_URL>
cd project-new

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build
```bash
# Build optimized static assets
npm run build

# Preview production build
npm run preview
```

---

## 🛠️ Project Structure

```text
├── public/assets/         # Static media assets
├── src/
│   ├── assets/            # Bundled images & graphics
│   ├── components/
│   │   ├── common/
│   │   │   └── RoyalMotifs.jsx # Traditional SVG ornaments
│   │   ├── Navbar.jsx     # Sticky header with mobile drawer
│   │   ├── Hero.jsx       # Sunset hero with countdown
│   │   ├── Blessings.jsx  # Ganesh Ji blessings
│   │   ├── CoupleSection.jsx # Couple profiles
│   │   ├── Events.jsx     # Events container
│   │   ├── EventCard.jsx  # Miniature royal invitation card
│   │   ├── Venue.jsx      # Palace destination
│   │   ├── Gallery.jsx    # Photo gallery
│   │   ├── Lightbox.jsx   # Full-screen modal
│   │   ├── RSVP.jsx       # Wax seal RSVP with confetti
│   │   └── Footer.jsx     # Shubh Vivah closing
│   ├── data/
│   │   └── weddingData.js # Centralized wedding data
│   ├── App.jsx            # Main app component
│   ├── index.css          # Theme tokens & typography
│   └── main.jsx           # React root
├── package.json
└── vite.config.js
```

---

## 📜 License
Created with ❤️ for royal wedding celebrations.
