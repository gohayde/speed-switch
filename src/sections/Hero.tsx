import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  CalendarDays, 
  CarFront, 
  ChevronDown, 
  MapPin, 
  Search, 
  UserRound,
  Check
} from 'lucide-react';

const WA_LINK = 'https://wa.me/971500000000?text=Hi%2C%20I%20want%20to%20book%20a%20car';

function Logo() {
  return (
    <a className="inline-flex items-center gap-[14px] group" href="#home" aria-label="LUXE Home">
      <span className="relative w-[34px] h-[34px] inline-block shrink-0" aria-hidden="true">
        <span className="absolute left-[14px] top-[0px] w-[7px] h-[36px] rounded-[1px] bg-[#CFA64A] rotate-[42deg] transition-transform duration-300 group-hover:rotate-[50deg]" />
        <span className="absolute left-[14px] top-[0px] w-[7px] h-[36px] rounded-[1px] bg-[#CFA64A] rotate-[-42deg] transition-transform duration-300 group-hover:rotate-[-50deg]" />
      </span>
      <span className="text-[24px] font-extrabold tracking-[0.18em] text-[#1A1A1A] leading-none select-none" style={{ fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif" }}>LUXE</span>
    </a>
  );
}

interface NavProps {
  activeSection: string;
}

function Nav({ activeSection }: NavProps) {
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'Vehicles', href: '#vehicles' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Process', href: '#process' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="relative z-[30] grid items-center gap-6 w-[min(91%,1740px)] mx-auto pt-[clamp(20px,3vh,34px)]"
      style={{ gridTemplateColumns: '220px 1fr 310px' }}>
      <Logo />
      
      {/* Center navigation */}
      <nav className="flex justify-center items-center gap-[clamp(28px,3.8vw,56px)] font-bold text-[clamp(14px,0.85vw,16px)] max-[1080px]:hidden text-[#1A1A1A]">
        {items.map(item => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <a 
              key={item.label} 
              href={item.href}
              className={`relative py-2.5 transition-colors duration-[180ms] hover:text-[#CFA64A] ${
                isActive ? 'text-[#CFA64A] after:content-[""] after:absolute after:left-1/2 after:-bottom-[2px] after:w-[6px] after:h-[6px] after:-translate-x-1/2 after:rounded-full after:bg-[#CFA64A]' : 'text-[#1a1a1a]/85'
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Right actions */}
      <div className="flex justify-end items-center gap-8 max-[1080px]:gap-3 select-none">
        <button 
          className="grid place-items-center w-[46px] h-[46px] rounded-full border border-[#1A1A1A]/15 bg-transparent text-[#1A1A1A] transition-all duration-[180ms] hover:border-[#CFA64A] hover:text-[#CFA64A] hover:-translate-y-px max-[560px]:hidden"
          aria-label="Open profile"
        >
          <UserRound size={20} strokeWidth={1.8} />
        </button>
        <a 
          href={WA_LINK} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3.5 min-w-[172px] min-h-[54px] px-6 rounded-[8px] font-bold text-[15px] bg-[#CFA64A] text-[#1A1A1A] shadow-[0_12px_24px_rgba(207,166,74,0.18)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_16px_30px_rgba(207,166,74,0.26)] max-[900px]:min-w-[145px] max-[900px]:min-h-[48px] max-[560px]:min-w-[120px] max-[560px]:min-h-[42px] max-[560px]:text-[13px] hover:saturate-105"
        >
          <span>Book Now</span>
          <ArrowRight size={18} strokeWidth={2} />
        </a>
      </div>
    </header>
  );
}

interface SearchFieldProps {
  icon: React.ElementType;
  label: string;
  value: string;
  isOpen: boolean;
  onClick: () => void;
  showBorder?: boolean;
}

function SearchField({ icon: Icon, label, value, isOpen, onClick, showBorder = true }: SearchFieldProps) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`relative grid items-center min-w-0 min-h-[72px] pr-[16px] text-left bg-transparent border-0 transition-colors duration-[180ms] hover:bg-[rgba(207,166,74,0.04)] text-[#1A1A1A] [&:nth-of-type(2)]:pl-[24px] [&:nth-of-type(3)]:pl-[24px] cursor-pointer outline-none focus-visible:bg-[rgba(207,166,74,0.04)] ${
        showBorder ? 'border-r border-black/10 max-[900px]:border-r-0 max-[900px]:border-b' : ''
      }`}
      style={{ gridTemplateColumns: '36px 1fr 20px' }}
    >
      <Icon className="text-[#CFA64A] justify-self-start" size={24} strokeWidth={1.8} />
      <span className="flex flex-col gap-1 min-w-0">
        <span className="text-[#8F9198] text-[13px] leading-none font-medium uppercase tracking-wider">{label}</span>
        <span className="overflow-hidden whitespace-nowrap text-ellipsis text-[16px] leading-[1.1] font-extrabold">{value}</span>
      </span>
      <ChevronDown 
        className={`justify-self-end text-[#70747a] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#CFA64A]' : ''}`} 
        size={16} 
        strokeWidth={2} 
      />
    </button>
  );
}

export default function Hero() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeField, setActiveField] = useState<'carType' | 'location' | 'date' | null>(null);
  
  const [selectedCarType, setSelectedCarType] = useState('Luxury SUV');
  const [selectedLocation, setSelectedLocation] = useState('Dubai, UAE');
  const [selectedDate, setSelectedDate] = useState('May 24 – May 27');

  const carTypes = ['Luxury SUV', 'V12 Supercar', 'High-End Sports', 'Exotic Convertible'];
  const locations = ['Dubai, UAE', 'Dubai Marina', 'Palm Jumeirah', 'DXB Airport'];

  // Handle active menu highlights on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 300;
      const sections = ['home', 'vehicles', 'why-us', 'process', 'reviews', 'faq'];
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main id="home" className="relative min-h-screen overflow-hidden isolate pb-20" style={{ background: '#F8F7F3' }}>
      
      {/* Premium Studio Vignette Ambient Background */}
      <div className="absolute inset-0 -z-[3] pointer-events-none"
        style={{ 
          background: `
            radial-gradient(circle at 50% 25%, rgba(255,255,255,0.7) 0%, transparent 60%),
            radial-gradient(circle at 10% 20%, rgba(207,166,74,0.06) 0%, transparent 40%)
          `
        }} 
      />

      {/* Sloped Yellow Horizon Floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[26%] bg-[#CFA64A] -z-[2]"
        style={{ clipPath: 'polygon(0 16%, 100% 2%, 100% 100%, 0 100%)' }}
      />

      {/* Navigation Header */}
      <Nav activeSection={activeSection} />

      {/* Hero Core Content */}
      <section className="relative z-[10] w-[min(1180px,92vw)] mx-auto mt-8 md:mt-10 lg:mt-14 text-center select-none" aria-labelledby="hero-title">

        {/* Headline — capped at 68px so it never outgrows reference proportions */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex flex-col items-center m-0 text-[clamp(40px,5.5vw,106px)] leading-[0.9] font-extrabold uppercase text-[#1A1A1A] tracking-[0.03em]"
            style={{ fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Montserrat', sans-serif" }}
          >
            <span className="block">Premium Car</span>
            <span className="block mt-2">Rental</span>
          </motion.h1>
        </div>

        {/* Supporting description — fixed 15px, never vw-scaled */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-[600px] mx-auto mt-4 mb-8 text-[#777B82] text-[15px] leading-[1.5] font-medium"
        >
          Drive extraordinary. Luxury cars, simple booking, unforgettable experiences.
        </motion.p>

        {/* Booking Form Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative w-[min(1100px,84vw)] mx-auto max-[900px]:w-[min(560px,90vw)] z-[20]"
        >
          <form 
            className="grid items-center min-h-[96px] px-8 py-3.5 pr-[16px] rounded-[18px] bg-white/90 shadow-[0_16px_40px_rgba(26,26,26,0.06)] border border-black/[0.03] backdrop-blur-[14px] max-[900px]:grid-cols-1 max-[900px]:p-3"
            style={{ gridTemplateColumns: '1fr 1.08fr 1.12fr 108px' }}
            onSubmit={(e) => {
              e.preventDefault();
              window.open(`${WA_LINK}&text=Hi%20I%20want%20to%20rent%20a%20${encodeURIComponent(selectedCarType)}%20in%20${encodeURIComponent(selectedLocation)}%20for%20${encodeURIComponent(selectedDate)}`, '_blank');
            }}
            aria-label="Search rental cars"
          >
            <SearchField 
              icon={CarFront} 
              label="Car Type" 
              value={selectedCarType} 
              isOpen={activeField === 'carType'}
              onClick={() => setActiveField(activeField === 'carType' ? null : 'carType')}
            />
            <SearchField 
              icon={MapPin} 
              label="Pick-up Location" 
              value={selectedLocation} 
              isOpen={activeField === 'location'}
              onClick={() => setActiveField(activeField === 'location' ? null : 'location')}
            />
            <SearchField 
              icon={CalendarDays} 
              label="Date" 
              value={selectedDate} 
              isOpen={activeField === 'date'}
              onClick={() => setActiveField(activeField === 'date' ? null : 'date')}
              showBorder={false}
            />
            
            {/* Search Submit button */}
            <button 
              type="submit"
              className="grid place-items-center gap-2.5 w-[108px] h-[76px] border-0 rounded-[8px] bg-[#CFA64A] text-[#1A1A1A] shadow-[0_10px_20px_rgba(207,166,74,0.22)] text-[16px] font-extrabold cursor-pointer transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_14px_26px_rgba(207,166,74,0.32)] max-[900px]:w-full max-[900px]:h-14 max-[900px]:grid-flow-col max-[900px]:mt-[8px] hover:saturate-105"
            >
              <Search size={22} strokeWidth={2.2} />
              <span>Search</span>
            </button>
          </form>

          {/* Invisible Overlay to close active dropdowns when clicking outside */}
          <AnimatePresence>
            {activeField && (
              <div 
                className="fixed inset-0 z-[15] bg-transparent cursor-default" 
                onClick={() => setActiveField(null)} 
              />
            )}
          </AnimatePresence>

          {/* Interactive Glassmorphic Dropdowns */}
          <AnimatePresence>
            {/* 1. Car Type Selection */}
            {activeField === 'carType' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-0 top-[110px] z-[25] bg-white border border-black/5 shadow-2xl rounded-[14px] p-2.5 flex flex-col gap-1 w-[260px] text-left max-[900px]:w-full max-[900px]:static max-[900px]:mt-2"
              >
                <div className="px-3 py-1.5 text-[11px] font-extrabold text-[#999] uppercase tracking-wider">Select Category</div>
                {carTypes.map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => {
                      setSelectedCarType(type);
                      setActiveField(null);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-[8px] text-[14px] font-bold transition-all text-left w-full hover:bg-[rgba(207,166,74,0.06)] ${
                      selectedCarType === type ? 'text-[#CFA64A] bg-[rgba(207,166,74,0.04)]' : 'text-[#1A1A1A]'
                    }`}
                  >
                    <span>{type}</span>
                    {selectedCarType === type && <Check size={16} strokeWidth={2.5} />}
                  </button>
                ))}
              </motion.div>
            )}

            {/* 2. Pick-up Location Selection */}
            {activeField === 'location' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="absolute left-[25%] top-[110px] z-[25] bg-white border border-black/5 shadow-2xl rounded-[14px] p-2.5 flex flex-col gap-1 w-[260px] text-left max-[900px]:left-0 max-[900px]:w-full max-[900px]:static max-[900px]:mt-2"
              >
                <div className="px-3 py-1.5 text-[11px] font-extrabold text-[#999] uppercase tracking-wider">Choose Location</div>
                {locations.map(loc => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => {
                      setSelectedLocation(loc);
                      setActiveField(null);
                    }}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-[8px] text-[14px] font-bold transition-all text-left w-full hover:bg-[rgba(207,166,74,0.06)] ${
                      selectedLocation === loc ? 'text-[#CFA64A] bg-[rgba(207,166,74,0.04)]' : 'text-[#1A1A1A]'
                    }`}
                  >
                    <span>{loc}</span>
                    {selectedLocation === loc && <Check size={16} strokeWidth={2.5} />}
                  </button>
                ))}
              </motion.div>
            )}

            {/* 3. Dates Calendar Visual Mockup */}
            {activeField === 'date' && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute right-0 top-[110px] z-[25] bg-white border border-black/5 shadow-[0_24px_50px_rgba(26,26,26,0.14)] rounded-[18px] p-5 w-[338px] text-left max-[900px]:w-full max-[900px]:static max-[900px]:mt-2"
              >
                <div className="flex items-center justify-between mb-4 border-b border-black/[0.05] pb-2">
                  <span className="font-extrabold text-[15px] text-[#1A1A1A]">May 2026</span>
                  <span className="text-[12px] text-[#CFA64A] font-extrabold uppercase tracking-wide">Selected Range</span>
                </div>
                
                {/* Micro calendar grid headers */}
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-extrabold text-[#AAADB3] uppercase mb-1">
                  <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                </div>

                {/* Micro calendar days */}
                <div className="grid grid-cols-7 gap-1 text-center text-[12px] font-bold text-[#1A1A1A]">
                  <span className="text-[#DFE1E5]">27</span><span className="text-[#DFE1E5]">28</span><span className="text-[#DFE1E5]">29</span><span className="text-[#DFE1E5]">30</span><span>1</span><span>2</span><span>3</span>
                  <span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
                  <span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span>
                  <span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span>
                  {/* May 24 - May 27 connected booking display */}
                  <button type="button" onClick={() => { setSelectedDate('May 24 – May 27'); setActiveField(null); }} className="bg-[#CFA64A] text-[#1A1A1A] rounded-l-full font-extrabold p-1 hover:brightness-95">24</button>
                  <button type="button" onClick={() => { setSelectedDate('May 24 – May 27'); setActiveField(null); }} className="bg-[#CFA64A]/20 text-[#CFA64A] font-extrabold p-1 hover:bg-[#CFA64A]/30">25</button>
                  <button type="button" onClick={() => { setSelectedDate('May 24 – May 27'); setActiveField(null); }} className="bg-[#CFA64A]/20 text-[#CFA64A] font-extrabold p-1 hover:bg-[#CFA64A]/30">26</button>
                  <button type="button" onClick={() => { setSelectedDate('May 24 – May 27'); setActiveField(null); }} className="bg-[#CFA64A] text-[#1A1A1A] rounded-r-full font-extrabold p-1 hover:brightness-95">27</button>
                  <span>28</span><span>29</span><span>30</span>
                  <span>31</span><span className="text-[#DFE1E5]">1</span><span className="text-[#DFE1E5]">2</span><span className="text-[#DFE1E5]">3</span><span className="text-[#DFE1E5]">4</span><span className="text-[#DFE1E5]">5</span><span className="text-[#DFE1E5]">6</span>
                </div>

                <div className="flex gap-2 mt-4 pt-3 border-t border-black/[0.05]">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDate('May 24 – May 27');
                      setActiveField(null);
                    }}
                    className="flex-1 py-2 text-center rounded-[6px] bg-[#CFA64A] text-[#1A1A1A] font-extrabold text-[12px] hover:saturate-105"
                  >
                    Use Selected Dates
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDate('June 1 – June 5');
                      setActiveField(null);
                    }}
                    className="flex-1 py-2 text-center rounded-[6px] bg-[#1A1A1A] text-white font-extrabold text-[12px] hover:bg-[#2b2b2b]"
                  >
                    Quick June 1–5
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Prominent Vehicle Image positioned and layered to overlay beautifully behind the glassmorphic booking card */}
      <div className="absolute z-[2] left-1/2 -translate-x-1/2 bottom-[-50px] md:bottom-[-70px] lg:bottom-[-90px] w-[min(1480px,80vw)] max-w-none pointer-events-none select-none">
        <motion.img 
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full object-contain filter drop-shadow-[0_28px_24px_rgba(40,32,20,0.18)]"
          src="/assets/hero-car.png" 
          alt="Premium Yellow Luxury SUV Urus" 
        />
        
        {/* Micro-motion floating shadow */}
        <motion.div 
          className="absolute inset-0 bg-transparent"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

    </main>
  );
}
