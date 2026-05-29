import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tag, ChevronLeft, ChevronRight, X } from 'lucide-react';

const WHATSAPP_NUMBER = "971521430808";

interface CarData {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  currency: string;
  stats: {
    topSpeed: string;
    horsepower: string;
    engine: string;
    seats: string;
  };
  whatsappMessage: string;
  details: {
    title: string;
    description: string;
    price: string;
    features: string[];
    requirements: string[];
  };
}

const cars: CarData[] = [
  {
    id: "lamborghini-urus",
    name: "Lamborghini Urus",
    image: "/assets/hero-car.png",
    pricePerDay: 220,
    currency: "AED",
    stats: {
      topSpeed: "300 km/h",
      horsepower: "650 HP",
      engine: "V8 Engine",
      seats: "4 Seater"
    },
    whatsappMessage: "Hi, I want to book the Lamborghini Urus.",
    details: {
      title: "Lamborghini Urus",
      description: "A luxury performance SUV with aggressive styling, premium comfort, and powerful road presence. The perfect blend of a super sports car soul with SUV functionality.",
      price: "AED 220 /day",
      features: [
        "High performance twin-turbo V8 engine",
        "Immaculate premium leather interior",
        "Perfect for cruising Dubai's highways and streets",
        "Available for daily and flexible weekly rental"
      ],
      requirements: [
        "Valid driving license (International for tourists)",
        "Emirates ID or Passport copy with visa entry page",
        "Standard security deposit applies (fully refundable)"
      ]
    }
  },
  {
    id: "audi-rs3",
    name: "Audi RS3 Sedan",
    image: "/assets/audi-rs3.png",
    pricePerDay: 600,
    currency: "AED",
    stats: {
      topSpeed: "290 km/h",
      horsepower: "400 HP",
      engine: "2.5L TFSI",
      seats: "5 Seater"
    },
    whatsappMessage: "Hi, I want to book the Audi RS3.",
    details: {
      title: "Audi RS3 Sedan",
      description: "The ultimate high-performance compact sedan, delivering blistering acceleration, razor-sharp handling, and aggressive motorsport styling. Legendary five-cylinder performance in a refined package.",
      price: "AED 600 /day",
      features: [
        "Iconic 2.5L inline 5-cylinder turbocharged engine",
        "Quattro intelligent all-wheel-drive system",
        "Aggressive RS honeycomb grille and styling details",
        "Audi Virtual Cockpit Plus with RS-specific layouts"
      ],
      requirements: [
        "Valid driving license (International for tourists)",
        "Emirates ID or Passport copy with visa entry page",
        "Standard security deposit applies (fully refundable)"
      ]
    }
  },
  {
    id: "g63-brabus",
    name: "Mercedes G63 Brabus 800",
    image: "/assets/g63-brabus.png",
    pricePerDay: 2500,
    currency: "AED",
    stats: {
      topSpeed: "240 km/h",
      horsepower: "800 HP",
      engine: "V8 Biturbo",
      seats: "5 Seater"
    },
    whatsappMessage: "Hi, I want to book the G63 Brabus.",
    details: {
      title: "Mercedes G63 Brabus 800",
      description: "A heavily tuned, high-status luxury SUV combining legendary military-grade off-road heritage with brute-force performance and extreme carbon aerodynamic enhancements.",
      price: "AED 2,500 /day",
      features: [
        "Brabus 800 HP power enhancement and tuning pack",
        "Aggressive carbon fiber widebody aerodynamic styling",
        "Sport valved exhaust system with sidepipe signature exit",
        "Custom premium quilted leather comfort interior"
      ],
      requirements: [
        "Valid driving license (International for tourists)",
        "Emirates ID or Passport copy with visa entry page",
        "Standard security deposit applies (fully refundable)"
      ]
    }
  }
];

// Custom high-fidelity outline SVG icons matching the reference image mockup
function SpeedometerIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v2M7.76 8.24l1.41 1.41M16.24 8.24l-1.41 1.41M5 12h2M17 12h2" />
      <path d="M12 12l-3.5-3.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function HorseIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <path d="M12 6c.5 1 1 2 2.5 2.5.8.3 1.5.2 2-.5M12 6C11 5.5 9 5 7.5 6.5s-2 3.5-2.5 5c-.3 1 0 2 .5 2.5.5.5 1.5 1 2.5 1M7.5 15c.5.5 1.5.8 2.5.5.8-.3 1.5-1 1.8-2 .3-1 .5-2 1.5-3s2-1.5 3.5-2c1-.3 2-.5 3-.5v.5c0 1.2-.5 2.5-1.5 3l-2.5 1.2c-1 .5-1.5 1-2 2s-.8 2-2.5 3c-1.2.7-2.5 1.2-3.8 1.3H5c-.8 0-1.2-.5-1-1.2.2-.7.8-1.8 1.5-2.3L7.5 15Z" />
    </svg>
  );
}

function EngineIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <rect x="5" y="8" width="14" height="10" rx="1.5" />
      <path d="M2 11h3M2 15h3M19 11h3M19 15h3M9 8V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M8 18v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V18M11 11h2M11 14h2" />
    </svg>
  );
}

function SeatIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className="text-black">
      <rect x="10" y="3" width="4" height="3" rx="1" />
      <path d="M12 6v2" />
      <path d="M8 8c0-1.5.5-2 2-2h4c1.5 0 2 .5 2 2v7c0 1-.5 1.5-1.5 1.5h-5C8.5 16.5 8 16 8 15V8Z" />
      <path d="M6 10c0-1 1-1.5 2-1v6c-1 .5-2 0-2-1v-4ZM18 10c0-1-1-1.5-2-1v6c1 .5 2 0 2-1v-4ZM6 18c0-1 .8-1.5 1.8-1.5h8.4c1 0 1.8.5 1.8 1.5v1c0 .8-.8 1.2-1.5 1.2H7.5c-.7 0-1.5-.4-1.5-1.2v-1Z" />
    </svg>
  );
}

export default function PickYourCar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const activeCar = cars[activeIndex];
  const prevIndex = (activeIndex - 1 + cars.length) % cars.length;
  const nextIndex = (activeIndex + 1) % cars.length;

  const handleNext = () => {
    setDirection('next');
    setActiveIndex((prev) => (prev + 1) % cars.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setActiveIndex((prev) => (prev - 1 + cars.length) % cars.length);
  };

  const handleSelectCar = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 'next' : 'prev');
    setActiveIndex(index);
  };

  // Helper function to format stat values exactly like the reference image (bold number + regular unit)
  const formatStatValue = (value: string) => {
    const parts = value.split(' ');
    if (parts.length >= 2) {
      return (
        <div className="text-[13px] sm:text-[14px] text-[#1A1A1A] leading-tight">
          <span className="font-extrabold">{parts[0]}</span>{' '}
          <span className="font-normal text-gray-500">{parts.slice(1).join(' ')}</span>
        </div>
      );
    }
    return (
      <div className="text-[13px] sm:text-[14px] font-extrabold text-[#1A1A1A] leading-tight">
        {value}
      </div>
    );
  };

  return (
    <section id="vehicles" className="relative pt-16 pb-24 overflow-x-hidden" style={{ background: 'oklch(97.5% 0.007 82)' }}>
      {/* Centered soft radial glow right behind the center car for visual staging */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(207,166,74,0.11), transparent 70%)' }} />

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="font-extrabold uppercase text-[#1A1A1A] leading-[0.92] text-center mb-8 font-display"
          style={{ fontSize: 'clamp(38px,5.2vw,72px)', letterSpacing: '-0.02em', textWrap: 'balance' } as React.CSSProperties}>
          PICK YOUR DREAM<br />CAR TODAY
        </h2>

        {/* Carousel Visual Stage */}
        <div className="relative w-full h-[140px] sm:h-[185px] md:h-[220px] lg:h-[240px] flex items-center justify-between mb-8 select-none max-w-[1100px] mx-auto">
          
          {/* Grounding horizontal drop shadow directly under all three cars baseline */}
          <div className="absolute left-[6%] right-[6%] top-[78%] -translate-y-1/2 h-[12px] bg-black/[0.07] blur-[10px] rounded-full pointer-events-none z-0" />

          {/* Left Crop Car (Previous) */}
          <div 
            onClick={() => handleSelectCar(prevIndex)}
            className="absolute left-[-16%] sm:left-[-12%] md:left-[-8%] lg:left-[-5%] top-1/2 -translate-y-1/2 w-[35%] sm:w-[30%] opacity-25 scale-75 cursor-pointer z-10 transition-all duration-500 hover:opacity-40 hover:scale-[0.77] max-h-[85%] flex items-center justify-center filter grayscale hover:grayscale-0 pointer-events-auto"
          >
            <img 
              src={cars[prevIndex].image} 
              alt="" 
              className="w-full object-contain"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} 
            />
          </div>

          {/* Center Active Car */}
          <div className="w-[50%] sm:w-[42%] md:w-[38%] mx-auto z-10 relative flex justify-center items-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCar.id}
                initial={{ 
                  opacity: 0, 
                  x: direction === 'next' ? 60 : direction === 'prev' ? -60 : 0, 
                  scale: 0.96 
                }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ 
                  opacity: 0, 
                  x: direction === 'next' ? -60 : direction === 'prev' ? 60 : 0, 
                  scale: 0.96 
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center"
              >
                <img 
                  src={activeCar.image} 
                  alt={activeCar.name}
                  className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Crop Car (Next) */}
          <div 
            onClick={() => handleSelectCar(nextIndex)}
            className="absolute right-[-16%] sm:right-[-12%] md:right-[-8%] lg:right-[-5%] top-1/2 -translate-y-1/2 w-[35%] sm:w-[30%] opacity-25 scale-75 cursor-pointer z-10 transition-all duration-500 hover:opacity-40 hover:scale-[0.77] max-h-[85%] flex items-center justify-center filter grayscale hover:grayscale-0 pointer-events-auto"
          >
            <img 
              src={cars[nextIndex].image} 
              alt="" 
              className="w-full object-contain"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} 
            />
          </div>

          {/* Sleek, subtle Left/Right Navigation Chevrons */}
          <button 
            onClick={handlePrev}
            className="absolute left-[20%] sm:left-[23%] md:left-[26%] lg:left-[27%] z-20 p-2.5 rounded-full bg-white shadow-sm border border-black/[0.05] text-[#1A1A1A] hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto"
            aria-label="Previous Car"
          >
            <ChevronLeft size={16} strokeWidth={2.2} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-[20%] sm:right-[23%] md:right-[26%] lg:right-[27%] z-20 p-2.5 rounded-full bg-white shadow-sm border border-black/[0.05] text-[#1A1A1A] hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto"
            aria-label="Next Car"
          >
            <ChevronRight size={16} strokeWidth={2.2} />
          </button>
        </div>

        {/* Minimal rounded indicators */}
        <div className="flex justify-center gap-1.5 mt-1 mb-8 relative z-10">
          {cars.map((car, index) => (
            <button
              key={car.id}
              onClick={() => handleSelectCar(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === activeIndex ? 'bg-[#CFA64A] w-5' : 'bg-black/10 hover:bg-black/25'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Specs Row Under the Car — Match reference: no small utility labels, clean row layout */}
        <div className="relative z-10 max-w-2xl mx-auto px-4 mt-6 mb-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCar.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-x-8"
            >
              {/* Stat 1: Top Speed */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-black mb-2 flex items-center justify-center h-8 w-8">
                  <SpeedometerIcon />
                </div>
                {formatStatValue(activeCar.stats.topSpeed)}
              </div>

              {/* Stat 2: Horsepower */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-black mb-2 flex items-center justify-center h-8 w-8">
                  <HorseIcon />
                </div>
                {formatStatValue(activeCar.stats.horsepower)}
              </div>

              {/* Stat 3: Engine */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-black mb-2 flex items-center justify-center h-8 w-8">
                  <EngineIcon />
                </div>
                {formatStatValue(activeCar.stats.engine)}
              </div>

              {/* Stat 4: Seats */}
              <div className="flex flex-col items-center justify-center text-center">
                <div className="text-black mb-2 flex items-center justify-center h-8 w-8">
                  <SeatIcon />
                </div>
                {formatStatValue(activeCar.stats.seats)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Floating white price/action bar — positioned relative to section, sits in pb-24 area */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[min(740px,92vw)] z-30 bg-white rounded-xl shadow-[0_8px_28px_rgba(0,0,0,0.09)] p-3 px-5 sm:p-3.5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          {/* Tilted price tag icon */}
          <div className="text-black transform -rotate-45 shrink-0">
            <Tag size={18} strokeWidth={1.5} />
          </div>
          {/* Vertical hairline divider */}
          <div className="h-6 w-px bg-black/[0.08] shrink-0" />

          <div className="text-left">
            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none mb-1">Starting From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-[20px] font-black text-black leading-none tracking-tight">AED {activeCar.pricePerDay.toLocaleString()}</span>
              <span className="text-[11px] font-bold text-gray-400">/day</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 w-full sm:w-auto">
          {/* Book Now Button (Solid Black) */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeCar.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-black hover:bg-black/90 text-white font-bold text-[12px] tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-95 text-center"
          >
            Book Now
          </a>
          {/* More Details Button (Solid Gold) */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-lg bg-[#CFA64A] hover:bg-[#b8913d] text-white font-bold text-[12px] tracking-wider uppercase transition-all duration-200 cursor-pointer active:scale-95 shadow-sm shadow-[#CFA64A]/10"
          >
            More Details
          </button>
        </div>
      </div>

      {/* Details Modal Component */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeCar.name} details`}
            onKeyDown={(e) => { if (e.key === 'Escape') closeModal(); }}
          >
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/50 backdrop-blur-[2px] cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto relative z-10 border border-black/[0.05] scrollbar-thin text-left"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 p-1.5 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 hover:text-black transition-all cursor-pointer z-20 active:scale-95 border border-black/[0.04]"
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              <div className="p-5 md:p-7">
                {/* Modal Title */}
                <div className="mb-5">
                  <span className="text-[9px] font-bold text-[#CFA64A] tracking-[0.2em] uppercase">Premium Rental Fleet</span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#1A1A1A] tracking-tight mt-0.5 font-display">
                    {activeCar.name}
                  </h3>
                </div>

                {/* Core Specs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
                  
                  {/* Aspect Card with Car Image */}
                  <div className="rounded-xl p-3 flex items-center justify-center aspect-[4/3] relative overflow-hidden border border-black/[0.02]" style={{ background: 'oklch(97.5% 0.007 82)' }}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#CFA64A]/3 to-transparent pointer-events-none" />
                    <img
                      src={activeCar.image}
                      alt={activeCar.name}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.06)]"
                    />
                  </div>

                  {/* Core specs and rate */}
                  <div className="flex flex-col justify-between h-full">
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                      {activeCar.details.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2.5 mb-4">
                      <div className="bg-gray-50/60 rounded-lg p-2.5 border border-black/[0.015] flex items-center gap-2.5">
                        <span className="text-gray-600 shrink-0"><SpeedometerIcon /></span>
                        <div>
                          <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-wider">Top Speed</span>
                          <span className="text-[11px] font-extrabold text-gray-800 leading-none">{activeCar.stats.topSpeed}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50/60 rounded-lg p-2.5 border border-black/[0.015] flex items-center gap-2.5">
                        <span className="text-gray-600 shrink-0"><HorseIcon /></span>
                        <div>
                          <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-wider">Horsepower</span>
                          <span className="text-[11px] font-extrabold text-gray-800 leading-none">{activeCar.stats.horsepower}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50/60 rounded-lg p-2.5 border border-black/[0.015] flex items-center gap-2.5">
                        <span className="text-gray-600 shrink-0"><EngineIcon /></span>
                        <div>
                          <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-wider">Engine</span>
                          <span className="text-[11px] font-extrabold text-gray-800 leading-none">{activeCar.stats.engine}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50/60 rounded-lg p-2.5 border border-black/[0.015] flex items-center gap-2.5">
                        <span className="text-gray-600 shrink-0"><SeatIcon /></span>
                        <div>
                          <span className="block text-[8px] font-bold text-gray-400 uppercase tracking-wider">Seats</span>
                          <span className="text-[11px] font-extrabold text-gray-800 leading-none">{activeCar.stats.seats}</span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-3 mt-auto">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">Daily Rental Rate</span>
                      <div className="flex items-baseline gap-0.5 mt-0.5">
                        <span className="text-2xl font-black text-[#1A1A1A]">AED {activeCar.pricePerDay.toLocaleString()}</span>
                        <span className="text-xs font-bold text-gray-500">/ day</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Multi Lists (Features & Requirements) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-5 mb-5">
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-[12px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CFA64A]" /> Key Features
                    </h4>
                    <ul className="space-y-2">
                      {activeCar.details.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11.5px] text-gray-600 leading-normal">
                          <span className="text-[#CFA64A] font-bold shrink-0">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="text-[12px] font-bold text-[#1A1A1A] uppercase tracking-wider mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CFA64A]" /> Rental Requirements
                    </h4>
                    <ul className="space-y-2">
                      {activeCar.details.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[11.5px] text-gray-600 leading-normal">
                          <span className="text-[#CFA64A] font-bold shrink-0">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer details and Call-To-Action */}
                <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[10px] text-gray-400 leading-normal text-center sm:text-left max-w-sm">
                    *Rate includes comprehensive insurance, standard mileage limit, and free delivery directly to your hotel or residence within Dubai.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(activeCar.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#050505] hover:bg-[#1a1a1a] text-white font-bold text-[12px] tracking-wider uppercase transition-all duration-200 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


