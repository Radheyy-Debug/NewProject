// Centralized Wedding Data Configuration
// Edit this file to easily update names, dates, events, venue, and images

export const weddingData = {
  // Couple Information
  groom: {
    name: "Rohan",
    fullName: "Rohan Rathore",
    title: "Son of Smt. Meenakshi & Shri Vikram Singh Rathore",
    about: "An architect with a passion for heritage, royal art, and timeless music. Captivated by Sneha's gentle grace and joyful spirit from the moment their journeys crossed.",
  },
  bride: {
    name: "Sneha",
    fullName: "Sneha Shekhawat",
    title: "Daughter of Smt. Sunita & Shri Rajendra Singh Shekhawat",
    about: "A designer with a deep love for Rajasthani textiles, poetry, and sunset skies. Found in Rohan her truest companion, best friend, and eternal partner in adventure.",
  },

  // Wedding Highlights
  weddingDate: "30 November 2026",
  weddingDateISO: "2026-11-30T17:00:00+05:30",
  dateFormatted: "30 • 11 • 2026",
  city: "Jaisalmer",
  state: "Rajasthan",
  locationDisplay: "Jaisalmer, Rajasthan",
  hashtag: "#RohanKiSneha",

  // Sacred Texts & Blessings
  ganeshInvocation: "॥ श्री गणेशाय नमः ॥",
  ganeshShloka: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
  ganeshBlessing: "With the divine blessings of Lord Ganesha and the cherished love of our families, we joyfully invite you to celebrate our union as we step into our forever.",
  weddingAuspicious: "॥ शुभ विवाह ॥",
  auspiciousShloka: "मङ्गलं भगवान् विष्णुः मङ्गलं गरुडध्वजः। मङ्गलं पुण्डरीकाक्षः मङ्गलाय तनो हरिः॥",

  // Romantic Intro Quote
  romanticQuote: {
    title: "Two Souls, One Beautiful Journey",
    text: "Two hearts, two stories, and one beautiful beginning. We invite you to be part of the royal moments that will become our forever memories under the golden Thar sunset.",
  },

  // Schedule of Events
  events: [
    {
      id: "mehendi",
      title: "MEHENDI",
      date: "28 November 2026",
      time: "4:00 PM onwards",
      venue: "The Royal Courtyard",
      location: "Heritage Wing, The Royal Palace",
      dressCode: "Emerald Green & Floral Lehengas",
      themeColor: "#17634B",
      motif: "mehendi",
      description: "An evening woven with fragrant henna, lively Kalbelia folk performances, and celebratory music in the illuminated open courtyard.",
    },
    {
      id: "haldi",
      title: "HALDI",
      date: "29 November 2026",
      time: "10:00 AM onwards",
      venue: "The Sunlit Haveli",
      location: "At Our Courtyard Residence",
      dressCode: "Marigold Yellow & Sandalwood Hues",
      themeColor: "#D89B45",
      motif: "haldi",
      description: "A bright and joyous morning filled with fragrant turmeric paste, flower petal showers, dhol beats, and heartfelt laughter.",
    },
    {
      id: "sangeet",
      title: "SANGEET",
      date: "29 November 2026",
      time: "7:00 PM onwards",
      venue: "The Royal Lawn",
      location: "Palace Amphitheatre Grounds",
      dressCode: "Royal Glamour & Shimmering Gold",
      themeColor: "#C65A2E",
      motif: "sangeet",
      description: "A magical starry night of high-spirited family dance performances, royal Rajasthani folk fusion, and lively musical celebrations.",
    },
    {
      id: "baraat",
      title: "BARAAT",
      date: "30 November 2026",
      time: "5:00 PM onwards",
      venue: "Main Palace Gateway",
      location: "The Grand Fort Toran Gate",
      dressCode: "Royal Turbans & Imperial Sherwanis",
      themeColor: "#641F24",
      motif: "baraat",
      description: "The grand royal procession featuring decorated camels, regal horses, traditional shehnai players, and resonant Nagada drums.",
    },
    {
      id: "pheras",
      title: "PHERAS",
      date: "30 November 2026",
      time: "8:00 PM onwards",
      venue: "The Royal Palace Mandap",
      location: "Central Lotus Pavilion",
      dressCode: "Traditional Rajputana Finery",
      themeColor: "#641F24",
      motif: "pheras",
      description: "Sacred Vedic wedding rituals and seven auspicious vows around the holy fire under the desert canopy and starlit skies.",
    },
    {
      id: "reception",
      title: "RECEPTION",
      date: "01 December 2026",
      time: "7:00 PM onwards",
      venue: "The Grand Palace Lawn",
      location: "Imperial Heritage Gardens",
      dressCode: "Regal Evening Attire & Bandhgalas",
      themeColor: "#173B63",
      motif: "reception",
      description: "An opulent gala evening to celebrate the newlyweds, featuring a sumptuous royal Rajasthani banquet and melodious instrumental sitar.",
    },
  ],

  // Venue & Travel Details
  venue: {
    name: "THE ROYAL PALACE",
    tagline: "The Celebration Awaits",
    city: "Jaisalmer",
    state: "Rajasthan, India",
    pincode: "345001",
    description: "Perched majestically amidst the golden dunes of Jaisalmer, The Royal Palace boasts hand-carved yellow sandstone architecture, ornate jharokhas, lantern-lit walkways, and opulent royal courtyards.",
    mapUrl: "https://maps.google.com/?q=Jaisalmer+Fort+Rajasthan",
    embedMapQuery: "Jaisalmer Fort Rajasthan",
    travelDetails: [
      {
        title: "By Air",
        description: "Direct & connecting flights to Jaisalmer Airport (JSA - 20 mins from venue) or Jodhpur Airport (JDH - 4.5 hrs scenic drive).",
      },
      {
        title: "By Rail",
        description: "Jaisalmer Railway Station (JSM) is well connected to Delhi, Jaipur, Mumbai, and Jodhpur. Chauffeur transfers provided on arrival.",
      },
      {
        title: "Guest Hospitality Desk",
        description: "Our hospitality team will assist with luggage, check-ins, and transport. Contact: +91 98765 43210 / royalwelcome@weddings.com",
      },
    ],
  },

  // Moments / Gallery
  gallery: [
    {
      id: 1,
      title: "Royal Rajputana Romance",
      subtitle: "Two souls united in timeless heritage and elegance",
      src: "/assets/Rajput couple shoot.jpg",
      span: "col-span-1 md:col-span-2 row-span-2",
      aspect: "aspect-[16/10]",
    },
    {
      id: 2,
      title: "The Golden Fort of Jaisalmer",
      subtitle: "Our royal wedding destination under the desert sun",
      src: "/assets/Jaisalmer Fort.jpg",
      span: "col-span-1 md:col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 3,
      title: "Eternal Rajputana Grace",
      subtitle: "Sacred moments of devotion, culture, and love",
      src: "/assets/_.jpg",
      span: "col-span-1 md:col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 4,
      title: "The Royal Groom",
      subtitle: "Regal elegance in imperial Rajputana sherwani",
      src: "/assets/download (1).jpg",
      span: "col-span-1 md:col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 5,
      title: "The Royal Bride",
      subtitle: "Radiant grace in traditional vermillion and gold",
      src: "/assets/download (2).jpg",
      span: "col-span-1 md:col-span-1 row-span-1",
      aspect: "aspect-[4/3]",
    },
    {
      id: 6,
      title: "Illustrated Royal Portrait",
      subtitle: "A royal Rajasthani fairytale brought to life",
      src: "/assets/ChatGPT Image Sep 16, 2026, 06_50_28 PM.png",
      span: "col-span-1 md:col-span-2 row-span-1",
      aspect: "aspect-[21/9]",
    },
  ],

  // RSVP details
  rsvp: {
    deadline: "10 November 2026",
    contactPhone: "+91 98765 43210",
    contactEmail: "rsvp@rohanandsneha.in",
  },
};
