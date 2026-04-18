import React, { useState } from 'react';
import { X, Mail, MessageCircle, Users, Wifi, Coffee, Dumbbell, Utensils, Car, Clock, Store, Waves, Flame, UtensilsCrossed, Droplets, Moon, Sun, ChevronRight, ExternalLink, Copy, Check } from 'lucide-react';

const JoyLuckBootcamp = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('joyluckdj@naver.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const colors = {
    neon: '#00FF88',
    neonGlow: 'rgba(0,255,136,0.3)',
    neonSubtle: 'rgba(0,255,136,0.08)',
    neonBorder: 'rgba(0,255,136,0.15)',
    bgDeep: '#060A10',
    bg: '#0A0F18',
    bgCard: '#111822',
    bgCardHover: '#162030',
    bgSection: '#0D1420',
    border: '#1E2A3A',
    text: '#E8ECF2',
    textLight: '#8896A8',
    textMuted: '#556070',
    // Light mode
    lBg: '#FFFFFF',
    lBgCard: '#F8FAFB',
    lBgSection: '#F0F4F8',
    lBorder: '#E0E6EC',
    lText: '#1A1A2E',
    lTextLight: '#555566',
    lNeon: '#00AA5B'
  };

  const hotels = [
    {
      id: 1,
      name: "Orakai Insadong",
      category: "Popular Residence",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      rooms: [
        { type: "1 Bedroom", beds: 1, rooms: 1, bathrooms: 1 },
        { type: "2 Bedroom Deluxe", beds: 2, rooms: 2, bathrooms: 1, grade: "Deluxe" },
        { type: "2 Bedroom Premier", beds: 2, rooms: 2, bathrooms: 2, grade: "Premier" },
        { type: "3 Bedroom Deluxe", beds: 3, rooms: 3, bathrooms: 3, grade: "Deluxe" },
      ],
      special: "Large meeting room for team accommodation",
      inRoom: ["WiFi", "Refrigerator", "Microwave", "Coffee Maker", "In-room Washer", "Gas Range", "Cookware & Utensils"],
      facilities: ["GYM", "Swimming Pool", "Breakfast", "Parking", "24hr Front Desk", "Convenience Store"]
    },
    {
      id: 2,
      name: "Novotel",
      category: "Luxury + Residence",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      rooms: [
        { type: "1 Bedroom", beds: 1, rooms: 1, bathrooms: 1 },
        { type: "2 Bedroom", beds: 2, rooms: 2, bathrooms: 1 },
        { type: "1 Bed Residence Deluxe", beds: 1, rooms: 2, bathrooms: 1, grade: "Deluxe", note: "Separate bedroom & living" },
        { type: "1 Bed Residence Premier", beds: 1, rooms: 2, bathrooms: 1, grade: "Premier", note: "Separate bedroom & living" },
      ],
      inRoom: ["WiFi", "Refrigerator", "Microwave", "Coffee Maker", "In-room Washer", "Gas Range", "Cookware & Utensils"],
      facilities: ["GYM", "Swimming Pool", "Breakfast", "Room Service", "Parking", "24hr Front Desk", "Convenience Store"]
    },
    {
      id: 3,
      name: "Vabien 1",
      category: "Value Residence",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
      rooms: [
        { type: "2 Bedroom Residence", beds: 2, rooms: 2, bathrooms: 2, note: "Living room & kitchen" },
        { type: "3 Bedroom Residence", beds: 3, rooms: 3, bathrooms: 2, note: "Living room & kitchen" },
      ],
      inRoom: ["WiFi", "Refrigerator", "Microwave", "In-room Washer", "Gas Range", "Cookware & Utensils"],
      facilities: ["Parking", "Convenience Store"]
    },
    {
      id: 4,
      name: "Bernoulli",
      category: "Budget",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      rooms: [
        { type: "1 Bedroom Standard", beds: 1, rooms: 1, bathrooms: 1 },
        { type: "1 Bedroom Deluxe", beds: 1, rooms: 1, bathrooms: 1, grade: "Deluxe" },
        { type: "2 Bedroom Deluxe", beds: 2, rooms: 2, bathrooms: 1, grade: "Deluxe" },
      ],
      inRoom: ["WiFi", "Refrigerator", "Microwave"],
      facilities: ["Parking", "Convenience Store"]
    },
    {
      id: 5,
      name: "Aneuk Guro",
      category: "New Hotel",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      rooms: [
        { type: "1 Bedroom", beds: 1, rooms: 1, bathrooms: 1 },
        { type: "2 Bedroom Suite", beds: 2, rooms: 2, bathrooms: 1, note: "2 beds in bedroom, separate living" },
        { type: "3 Bedroom Suite", beds: 3, rooms: 2, bathrooms: 1, note: "3 beds in bedroom, separate living" },
      ],
      special: "Practice room for team accommodation",
      inRoom: ["WiFi", "Refrigerator", "Microwave", "In-room Washer", "Gas Range", "Cookware & Utensils"],
      facilities: ["Parking", "Convenience Store"]
    },
    {
      id: 6,
      name: "The Link",
      category: "New Hotel",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
      rooms: [
        { type: "1 Bedroom Premier King", beds: 1, rooms: 1, bathrooms: 1, grade: "Premier" },
      ],
      inRoom: ["WiFi", "Refrigerator", "Coffee Maker"],
      facilities: ["GYM", "Swimming Pool", "Coin Laundry", "Breakfast", "Room Service", "Parking", "24hr Front Desk", "Convenience Store"]
    }
  ];

  const individualClients1 = [
    "Evi", "Ninjakiwi", "Midbeast", "TFBlade", "Katevolved",
    "Sanchovies", "Tyler1", "Aphromoo", "Rybson", "Smoothie",
    "Lourlo", "Elmillor", "Svenskeren", "Yeon", "Hans Sama",
    "Perkz", "ScrubNoob", "Jojopyun", "Bjergsen", "Agurin", "Noway4u",
    "Sinerias", "Alois", "Dantes", "Yamatosdeath", "Tarzaned",
    "V1per", "Solarbacca", "APA", "HoneyPuu", "Jankos",
    "Wunder", "Inspired", "Vulcun", "Humzh", "Vetheo", "Trayton"
  ];

  const individualClients2 = [
    "Doublelift", "Nemesis", "Dzukill", "Drututt", "Buero", "Jean Mago",
    "Ayel", "Gaethan", "Bwipo", "RedBert", "Micao",
    "Upset", "Broeki", "Mayumi", "ANTILIPSI", "Woldjo",
    "brTT", "Adam", "Splinter", "Strey", "Naayil", "SloppyWarus", "Huncho", "Komari",
    "Makkro", "NattyNatt", "SpearShot", "Brohan", "Sardoche",
    "Desperate Nasus", "Yamatocannon", "IWDominate", "Phantasm",
    "ChenChen", "Opat04", "Velja", "Ibailand", "Mahluna"
  ];

  const teamClients = [
    "BDS", "TSM", "CLG", "Team Liquid", "FlyQuest", 
    "Karmine Corp", "Cloud9", "EG", "Immortals", "100 Thieves",
    "Dignitas", "Team Vitality", "Giants", "G2 Esports", "Fnatic", "Shifters",
    "paiN Gaming", "LDLC", "Solary", "EDG",
    "AHQ", "Newbee", "WE", "DetonatioN FocusMe", "Guangzhou Charge", "LA Gladiators",
    "Team Falcons", "Toronto Defiant", "Paris Eternal", "Isurus Gaming", "Estral Esports"
  ];

  const getCategoryColor = (category) => {
    const colorMap = {
      "Popular Residence": "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      "Luxury + Residence": "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      "Value Residence": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      "Budget": "linear-gradient(135deg, #06b6d4 0%, #0284c7 100%)",
      "New Hotel": "linear-gradient(135deg, #ef4444 0%, #f97316 100%)"
    };
    return colorMap[category] || "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)";
  };

  const getIconForFacility = (facility) => {
    const icons = {
      "WiFi": <Wifi className="w-4 h-4" />,
      "Refrigerator": <Store className="w-4 h-4" />,
      "Microwave": <Flame className="w-4 h-4" />,
      "Coffee Maker": <Coffee className="w-4 h-4" />,
      "In-room Washer": <Droplets className="w-4 h-4" />,
      "Gas Range": <Flame className="w-4 h-4" />,
      "Cookware & Utensils": <UtensilsCrossed className="w-4 h-4" />,
      "GYM": <Dumbbell className="w-4 h-4" />,
      "Swimming Pool": <Waves className="w-4 h-4" />,
      "Breakfast": <Utensils className="w-4 h-4" />,
      "Room Service": <Utensils className="w-4 h-4" />,
      "Parking": <Car className="w-4 h-4" />,
      "24hr Front Desk": <Clock className="w-4 h-4" />,
      "Convenience Store": <Store className="w-4 h-4" />,
      "Coin Laundry": <Droplets className="w-4 h-4" />
    };
    return icons[facility] || <ChevronRight className="w-4 h-4" />;
  };

  return (
    <div 
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? colors.bg : colors.lBg,
        color: darkMode ? colors.text : colors.lText,
        scrollBehavior: 'smooth'
      }}
    >
      {/* Nav */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: darkMode ? 'rgba(10, 15, 24, 0.9)' : 'rgba(255, 255, 255, 0.92)',
          borderBottom: `1px solid ${darkMode ? colors.border : colors.lBorder}`
        }}
      >
        <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
          <a 
            href="#hero" 
            className="font-bold text-xl tracking-widest"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              color: darkMode ? colors.neon : colors.lNeon,
              textShadow: `0 0 12px ${colors.neonGlow}`
            }}
          >
            JOYLUCK KR
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-2.5 rounded-full font-extrabold text-base tracking-wide transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: darkMode ? colors.neon : colors.lNeon,
              color: '#000',
              boxShadow: `0 0 15px ${colors.neonGlow}`
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 25px ${colors.neonGlow}`}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 15px ${colors.neonGlow}`}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section 
        id="hero" 
        className="pt-32 pb-20 px-6 text-center relative overflow-hidden"
        style={{
          background: darkMode 
            ? `radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,212,255,0.04) 0%, transparent 50%), ${colors.bg}`
            : `radial-gradient(ellipse at 50% 0%, rgba(0,170,91,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0,136,204,0.03) 0%, transparent 50%), ${colors.lBg}`
        }}
      >
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-40"
            style={{ background: `linear-gradient(90deg, transparent, ${darkMode ? colors.neon : colors.lNeon}, transparent)` }}
          />
        </div>

        <div className="relative max-w-[1100px] mx-auto">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: darkMode ? colors.neonSubtle : 'rgba(0,170,91,0.06)',
              border: `1px solid ${darkMode ? colors.neonBorder : 'rgba(0,170,91,0.15)'}`
            }}
          >
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: colors.neon }}
            />
            <span 
              className="text-sm font-semibold tracking-wide"
              style={{ 
                fontFamily: 'Orbitron, sans-serif',
                color: darkMode ? colors.neon : colors.lNeon
              }}
            >
              TRUSTED SINCE 2015
            </span>
          </div>

          <h1 
            className="text-5xl md:text-6xl font-black mb-6 tracking-tight"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Premium Bootcamp in{' '}
            <span style={{ 
              color: darkMode ? colors.neon : colors.lNeon,
              textShadow: `0 0 30px ${colors.neonGlow}`
            }}>
              Korea
            </span>
          </h1>

          {/* Core Values */}
          <div className="flex flex-wrap gap-4 justify-center mb-8 max-w-2xl mx-auto">
            <div 
              className="px-6 py-3 rounded-full font-bold text-sm"
              style={{
                backgroundColor: darkMode ? colors.neonSubtle : 'rgba(0,170,91,0.1)',
                border: `2px solid ${darkMode ? colors.neon : colors.lNeon}`,
                color: darkMode ? colors.neon : colors.lNeon
              }}
            >
              ✓ PERSONALIZED ACCOMMODATION
            </div>
            <div 
              className="px-6 py-3 rounded-full font-bold text-sm"
              style={{
                backgroundColor: darkMode ? colors.neonSubtle : 'rgba(0,170,91,0.1)',
                border: `2px solid ${darkMode ? colors.neon : colors.lNeon}`,
                color: darkMode ? colors.neon : colors.lNeon
              }}
            >
              ✓ PROFESSIONAL SETUPS
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              { value: "20+", label: "Years in Esports" },
              { value: "10+", label: "Bootcamp Years" },
              { value: "2,000+", label: "Gamers Hosted" },
              { value: "10+", label: "Streaming Years" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl"
                style={{
                  backgroundColor: darkMode ? colors.bgCard : colors.lBgCard,
                  border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
                }}
              >
                <div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: darkMode ? colors.neon : colors.lNeon }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-xs"
                  style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section 
        id="services"
        className="py-16 px-6"
        style={{ backgroundColor: darkMode ? colors.bgSection : colors.lBgSection }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3"
              style={{
                backgroundColor: darkMode ? colors.neonSubtle : 'rgba(0,170,91,0.1)',
                color: darkMode ? colors.neon : colors.lNeon
              }}
            >
              SERVICES
            </span>
            <h2 className="text-4xl font-bold">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏨",
                title: "Accommodation",
                desc: "Exclusive rates lower than booking platforms. Personalized room matching for your needs.",
                features: ["Better Prices Guaranteed", "Luxury to Budget Options", "1:1 Consultation"]
              },
              {
                icon: "🎮",
                title: "Gaming Setup",
                desc: "Professional setups installed in your room. Custom PCs, monitors, streaming gear.",
                features: ["Custom PC Builds", "Gaming Monitors", "Streaming Equipment"]
              },
              {
                icon: "📹",
                title: "Content Support",
                desc: "Local guidance for Korea content. Discover locations and experiences with insider knowledge.",
                features: ["Location Scouting", "On-site Guidance", "Cultural Insights"]
              },
              {
                icon: "💚",
                title: "Health & Wellness",
                desc: "Healthcare navigation for international visitors. Medical facility connections and support.",
                features: ["Medical Referrals", "Health Check-ups", "Interpretation Support"]
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: darkMode ? colors.bgCard : '#fff',
                  border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p 
                  className="mb-4 text-sm"
                  style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
                >
                  {service.desc}
                </p>
                <div className="space-y-2">
                  {service.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div 
                        className="w-1 h-1 rounded-full"
                        style={{ backgroundColor: colors.neon }}
                      />
                      <span style={{ color: darkMode ? colors.textLight : colors.lTextLight }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section 
        id="why"
        className="py-16 px-6"
        style={{ backgroundColor: darkMode ? colors.bg : colors.lBg }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <span 
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3"
              style={{
                backgroundColor: darkMode ? colors.neonSubtle : 'rgba(0,170,91,0.1)',
                color: darkMode ? colors.neon : colors.lNeon
              }}
            >
              EXPERTISE
            </span>
            <h2 className="text-4xl font-bold">Why JoyLuck?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div 
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: darkMode ? colors.bgCard : '#fff',
                border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Deep Esports Background</h3>
              <p 
                className="mb-6"
                style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
              >
                20+ years in esports, 10+ years running bootcamps. Every detail informed by real experience.
              </p>
              <div className="space-y-3">
                {[
                  "Warcraft 3, LoL Commentator",
                  "LoL Educational Content Creator",
                  "Streamer (10+ Years)",
                  "Pro Team Owner",
                  "Pro Team Coach, Analyst, Advisor",
                  "Esports Agency CEO",
                  "DEEPLOL.GG Founder"
                ].map((exp, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.neonSubtle }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colors.neon }}
                      />
                    </div>
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
              
              <a
                href="https://lol.fandom.com/wiki/JoyLuck"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
                style={{ color: darkMode ? colors.neon : colors.lNeon }}
              >
                <ExternalLink className="w-4 h-4" />
                View Leaguepedia Profile
              </a>
            </div>

            <div 
              className="p-6 rounded-2xl"
              style={{
                backgroundColor: darkMode ? colors.bgCard : '#fff',
                border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Personalized Service</h3>
              <p 
                className="mb-6"
                style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
              >
                1:1 consultation to match you with the perfect setup:
              </p>
              <div className="space-y-3">
                {[
                  "Understand your needs and budget",
                  "Recommend optimal hotel configuration",
                  "Custom PC setup matched to requirements",
                  "Lower prices than booking sites",
                  "Long-term stays available (30+ days)",
                  "Health & medical support when needed"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.neonSubtle }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colors.neon }}
                      />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-12 px-6 overflow-hidden" style={{ backgroundColor: darkMode ? colors.bgSection : colors.lBgSection }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-8">
            <span 
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3"
              style={{
                backgroundColor: darkMode ? colors.neonSubtle : 'rgba(0,170,91,0.1)',
                color: darkMode ? colors.neon : colors.lNeon
              }}
            >
              TRUSTED BY
            </span>
            <h2 className="text-3xl font-bold mb-2">Past Clients</h2>
            <p 
              className="text-sm"
              style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
            >
              2,000+ gamers, streamers, and content creators
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative space-y-6">
            {/* Row 1 - Players & Streamers (Part 1) */}
            <div>
              <div 
                className="text-xs font-semibold mb-3 text-center tracking-wide"
                style={{ 
                  color: darkMode ? colors.textMuted : colors.lTextLight,
                  fontFamily: 'Orbitron, sans-serif'
                }}
              >
                PLAYERS & STREAMERS
              </div>
              <div className="marquee-container">
                <div className="marquee-content">
                  {[...individualClients1, ...individualClients1].map((client, idx) => (
                    <div
                      key={idx}
                      className="marquee-item px-4 py-2 rounded-full font-semibold whitespace-nowrap mx-2"
                      style={{
                        backgroundColor: darkMode ? colors.bgCard : colors.lBgCard,
                        border: `1px solid ${darkMode ? colors.border : colors.lBorder}`,
                        fontSize: '14px'
                      }}
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 2 - Players & Streamers (Part 2, Reverse) */}
            <div>
              <div className="marquee-container">
                <div className="marquee-content-reverse">
                  {[...individualClients2, ...individualClients2].map((client, idx) => (
                    <div
                      key={idx}
                      className="marquee-item px-4 py-2 rounded-full font-semibold whitespace-nowrap mx-2"
                      style={{
                        backgroundColor: darkMode ? colors.bgCard : colors.lBgCard,
                        border: `1px solid ${darkMode ? colors.border : colors.lBorder}`,
                        fontSize: '14px'
                      }}
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Row 3 - Teams & Organizations */}
            <div>
              <div 
                className="text-xs font-semibold mb-3 text-center tracking-wide"
                style={{ 
                  color: darkMode ? colors.textMuted : colors.lTextLight,
                  fontFamily: 'Orbitron, sans-serif'
                }}
              >
                TEAMS & ORGANIZATIONS
              </div>
              <div className="marquee-container">
                <div className="marquee-content">
                  {[...teamClients, ...teamClients].map((client, idx) => (
                    <div
                      key={idx}
                      className="marquee-item px-4 py-2 rounded-full font-semibold whitespace-nowrap mx-2"
                      style={{
                        backgroundColor: darkMode ? colors.bgCard : colors.lBgCard,
                        border: `1px solid ${darkMode ? colors.border : colors.lBorder}`,
                        fontSize: '14px'
                      }}
                    >
                      {client}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section 
        id="contact"
        className="py-12 px-6"
        style={{ backgroundColor: darkMode ? colors.bg : colors.lBg }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span 
              className="inline-block px-4 py-1 rounded-full text-xs font-semibold mb-3"
              style={{
                backgroundColor: darkMode ? colors.neonSubtle : 'rgba(0,170,91,0.1)',
                color: darkMode ? colors.neon : colors.lNeon
              }}
            >
              CONTACT
            </span>
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p 
              className="text-sm"
              style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
            >
              Discord or WhatsApp recommended
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div
              onClick={copyEmail}
              className="relative p-4 rounded-xl text-center transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: darkMode ? colors.bgCard : '#fff',
                border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
              }}
            >
              <div className="absolute top-2 right-2">
                {emailCopied ? (
                  <Check className="w-4 h-4" style={{ color: colors.neon }} />
                ) : (
                  <Copy className="w-4 h-4" style={{ color: darkMode ? colors.textMuted : colors.lTextLight }} />
                )}
              </div>
              <Mail 
                className="w-6 h-6 mx-auto mb-2"
                style={{ color: colors.neon }}
              />
              <div className="font-bold text-sm mb-1">Email</div>
              <div 
                className="text-xs"
                style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
              >
                {emailCopied ? 'Copied!' : 'joyluckdj@naver.com'}
              </div>
            </div>

            <a
              href="https://x.com/JoyLuckDJ"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: darkMode ? colors.bgCard : '#fff',
                border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
              }}
            >
              <div className="absolute top-2 right-2">
                <ExternalLink className="w-4 h-4" style={{ color: darkMode ? colors.textMuted : colors.lTextLight }} />
              </div>
              <MessageCircle 
                className="w-6 h-6 mx-auto mb-2"
                style={{ color: colors.neon }}
              />
              <div className="font-bold text-sm mb-1">Twitter</div>
              <div 
                className="text-xs"
                style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
              >
                DM @JoyLuckDJ
              </div>
            </a>

            <a
              href="https://discord.gg/fAU6CVdhrt"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-xl text-center transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: darkMode ? colors.bgCard : '#fff',
                border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
              }}
            >
              <div className="absolute top-2 right-2">
                <ExternalLink className="w-4 h-4" style={{ color: darkMode ? colors.textMuted : colors.lTextLight }} />
              </div>
              <Users 
                className="w-6 h-6 mx-auto mb-2"
                style={{ color: colors.neon }}
              />
              <div className="font-bold text-sm mb-1">Discord</div>
              <div 
                className="text-xs"
                style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
              >
                DM JoyLuck
              </div>
            </a>
          </div>

          <div 
            className="p-5 rounded-xl"
            style={{
              backgroundColor: darkMode ? colors.bgCard : '#fff',
              border: `1px solid ${darkMode ? colors.border : colors.lBorder}`
            }}
          >
            <h3 className="text-lg font-bold mb-3">When Contacting, Include:</h3>
            <div 
              className="space-y-1.5 text-sm"
              style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
            >
              {[
                "Brief self-introduction",
                "Number of people",
                "Estimated dates (start & end)",
                "Type: Streamer / Pro Player / Gamer / Content Creator / Tourist",
                "Budget estimate (Hotel+PC or Hotel only)",
                "Korea visit experience (if any)"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div 
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ backgroundColor: colors.neon }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-6"
        style={{
          backgroundColor: darkMode ? colors.bg : '#fff',
          borderTop: `1px solid ${darkMode ? colors.border : colors.lBorder}`
        }}
      >
        <div className="max-w-[1100px] mx-auto text-center">
          <div 
            className="font-bold text-lg mb-2"
            style={{ 
              fontFamily: 'Orbitron, sans-serif',
              color: darkMode ? colors.neon : colors.lNeon
            }}
          >
            JOYLUCK KR BOOTCAMP
          </div>
          <p 
            className="text-sm"
            style={{ color: darkMode ? colors.textLight : colors.lTextLight }}
          >
            Trusted by 2,000+ gamers since 2015
          </p>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        /* Marquee animations */
        .marquee-container {
          overflow: hidden;
          position: relative;
        }

        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
        }

        .marquee-content-reverse {
          display: flex;
          animation: marquee-reverse 40s linear infinite;
        }

        .marquee-content:hover,
        .marquee-content-reverse:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default JoyLuckBootcamp;
