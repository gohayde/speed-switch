import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { label: 'Sports Cars', icon: '🏎️' },
  { label: 'SUVs', icon: '🚙' },
  { label: 'Luxury', icon: '💺' },
  { label: 'Vans', icon: '🚐' },
];

// SVG category icons matching the screenshot style
function SportsCarsIcon() {
  return (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
      <circle cx="20" cy="16" r="13" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="20" y1="3" x2="20" y2="8" stroke="currentColor" strokeWidth="2"/>
      <line x1="20" y1="8" x2="27" y2="22" stroke="currentColor" strokeWidth="2"/>
      <circle cx="20" cy="16" r="2" fill="currentColor"/>
    </svg>
  );
}
function SUVIcon() {
  return (
    <svg width="44" height="30" viewBox="0 0 44 30" fill="none">
      <rect x="4" y="8" width="36" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 8 L13 3 L31 3 L36 8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="11" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="33" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
function LuxuryIcon() {
  return (
    <svg width="44" height="30" viewBox="0 0 44 30" fill="none">
      <path d="M4 22 L4 14 L12 8 L32 8 L40 14 L40 22 Z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="12" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="22" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 8 L16 14 L28 14 L30 8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}
function VanIcon() {
  return (
    <svg width="44" height="30" viewBox="0 0 44 30" fill="none">
      <rect x="2" y="7" width="40" height="17" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 14 L42 14" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="6" y="8" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="18" y="8" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="30" y="8" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="10" cy="24" r="3.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="34" cy="24" r="3.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

const categoryIcons = [SportsCarsIcon, SUVIcon, LuxuryIcon, VanIcon];

export default function PickYourCar() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: 'oklch(95.5% 0.011 82)' }}>
      {/* Warm radial glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 10%, rgba(207,166,74,0.13), transparent 65%)' }} />

      <div className="relative z-10 text-center px-6">
        <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.85] mb-0"
          style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(54px,6.5vw,108px)' }}>
          PICK YOUR DREAM
        </h2>
        <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.85] mb-10"
          style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(54px,6.5vw,108px)' }}>
          CAR TODAY
        </h2>

        {/* Car trio */}
        <div className="relative w-full max-w-[1300px] mx-auto h-[clamp(280px,34vw,520px)] mb-10">
          {/* Left car */}
          <motion.div
            className="absolute left-0 bottom-0 w-[28%] z-10 pointer-events-none"
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}>
            <img src="/assets/car-left.png" alt="Yellow Porsche"
              className="w-full object-contain"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </motion.div>

          {/* Center car — hero */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[54%] z-20 pointer-events-none"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}>
            <img src="/assets/hero-car.png" alt="Green Lamborghini Urus"
              className="w-full object-contain drop-shadow-[0_24px_32px_rgba(44,34,20,0.18)]" />
          </motion.div>

          {/* Right car */}
          <motion.div
            className="absolute right-0 bottom-0 w-[27%] z-10 pointer-events-none"
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}>
            <img src="/assets/car-right.png" alt="Silver Range Rover"
              className="w-full object-contain"
              onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          </motion.div>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-0 mb-10 border-b border-black/[0.08]">
          {categories.map((cat, i) => {
            const Icon = categoryIcons[i];
            const isActive = active === i;
            return (
              <button key={cat.label} onClick={() => setActive(i)}
                className={`flex flex-col items-center gap-2 px-10 pb-5 pt-3 relative transition-colors duration-[180ms] ${isActive ? 'text-[#1A1A1A]' : 'text-[#999]'}`}>
                <Icon />
                <span className="text-[13px] font-bold tracking-widest uppercase">
                  {i === 0 ? <><strong className="font-extrabold">Sports</strong> Cars</> : cat.label}
                </span>
                {isActive && (
                  <motion.div layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A] rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Booking bar */}
        <div className="flex items-center justify-between w-[min(760px,90vw)] mx-auto bg-white rounded-[14px] shadow-[0_8px_32px_rgba(26,26,26,0.09)] px-6 py-4">
          <div className="flex items-center gap-3">
            <MapPin size={22} strokeWidth={1.8} className="text-[#999]" />
            <div className="text-left">
              <p className="text-[11px] font-semibold text-[#AAADB3] uppercase tracking-wider leading-none mb-1">Location</p>
              <div className="flex items-center gap-1">
                <span className="text-[22px] font-extrabold text-[#1A1A1A] leading-none">2205</span>
                <ChevronDown size={16} strokeWidth={2} className="text-[#777]" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-7 py-3.5 rounded-[8px] bg-[#1A1A1A] text-white font-bold text-[15px] tracking-wide transition-all duration-[180ms] hover:-translate-y-px hover:bg-[#2a2a2a]">
              FIND A CAR
            </button>
            <button className="px-7 py-3.5 rounded-[8px] bg-[#CFA64A] text-[#1A1A1A] font-bold text-[15px] tracking-wide shadow-[0_8px_20px_rgba(207,166,74,0.3)] transition-all duration-[180ms] hover:-translate-y-px hover:shadow-[0_12px_26px_rgba(207,166,74,0.4)]">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
