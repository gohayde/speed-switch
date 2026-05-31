import { useState, useRef, useEffect, useCallback } from 'react';
import {
  motion, AnimatePresence,
  useScroll, useTransform, useSpring, useMotionValue, useReducedMotion,
} from 'framer-motion';
import { ArrowRight, CalendarDays, CarFront, ChevronDown, MapPin, Check } from 'lucide-react';
import { useLanguage, translations } from '../LanguageContext';

const WHATSAPP_NUMBER = '971521430808';
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20car`;

const carTypes = ['Luxury SUV', 'V12 Supercar', 'High-End Sports', 'Exotic Convertible'];
const mapPins = [
  { name: 'Dubai Marina', x: 80, y: 165 },
  { name: 'Palm Jumeirah', x: 110, y: 110 },
  { name: 'Downtown Dubai', x: 200, y: 80 },
  { name: 'DXB Airport', x: 275, y: 45 },
];

const translatedCarTypes: Record<string, { en: string; ar: string }> = {
  'Luxury SUV': { en: 'Luxury SUV', ar: 'دفع رباعي فاخر' },
  'V12 Supercar': { en: 'V12 Supercar', ar: 'خارقة V12' },
  'High-End Sports': { en: 'High-End Sports', ar: 'رياضية فاخرة' },
  'Exotic Convertible': { en: 'Exotic Convertible', ar: 'مكشوفة مميزة' },
};

const translatedLocations: Record<string, { en: string; ar: string }> = {
  'Dubai Marina': { en: 'Dubai Marina', ar: 'مرسى دبي' },
  'Palm Jumeirah': { en: 'Palm Jumeirah', ar: 'نخلة جميرا' },
  'Downtown Dubai': { en: 'Downtown Dubai', ar: 'وسط دبي' },
  'DXB Airport': { en: 'DXB Airport', ar: 'مطار دبي DXB' },
};

function Logo() {
  return (
    <a className="inline-flex min-h-11 items-center gap-[12px] group hero-logo" href="#home" aria-label="Speed Switch Home">
      <svg className="w-[20px] h-[20px] text-[#111215] transition-colors duration-300 group-hover:text-[#F7BF35] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L12 12L17 17" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10L12 5L17 10" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="hero-logo-word">SPEED SWITCH</span>
    </a>
  );
}

function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { label: t('nav_fleet'),    href: '#vehicles' },
    { label: t('nav_why_us'),   href: '#why-us' },
    { label: t('nav_delivery'), href: '#delivery' },
    { label: t('nav_process'),  href: '#process' },
    { label: t('nav_reviews'),  href: '#reviews' },
    { label: t('nav_faq'),      href: '#faq' },
  ];
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <motion.header
        className="hero-nav-island animate-header"
        initial={reduce ? undefined : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-nav-pill">
          <Logo />
          <nav className="hero-nav-links" aria-label="Primary navigation">
            {items.map(({ label, href }) => (
              <a key={label} href={href} onClick={(e) => handleScroll(e, href)}>{label}</a>
            ))}
          </nav>
          <div className="hero-nav-actions" style={{ gap: '12px' }}>
            {/* High-end Minimalist Language Switcher Pill */}
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="px-3.5 py-1.5 rounded-full border border-black/10 bg-white/60 hover:bg-[#F7BF35]/15 hover:border-[#F7BF35]/40 text-[10.5px] font-black tracking-widest transition-all cursor-pointer select-none active:scale-95 text-black"
              aria-label={language === 'en' ? 'Switch to Arabic' : 'التغيير إلى الإنجليزية'}
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>

            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="speed-cta hidden sm:inline-flex">
              <span>{t('cta_book_whatsapp')}</span>
              <span className="speed-cta-arrow">
                <ArrowRight size={13} strokeWidth={2} />
              </span>
            </a>
            <button
              className={`hero-hamburger${menuOpen ? ' is-open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="h-line" />
              <span className="h-line" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="hero-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              className="hero-overlay-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <span className="h-line" />
              <span className="h-line" />
            </button>
            <nav aria-label="Mobile navigation" style={{ width: '100%' }}>
              {items.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  className="hero-overlay-link"
                  onClick={(e) => { handleScroll(e, href); setMenuOpen(false); }}
                  initial={reduce ? undefined : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="overlay-link-num">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </motion.a>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <motion.a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="speed-cta w-full"
                  style={{ justifyContent: 'center' }}
                  onClick={() => setMenuOpen(false)}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 + items.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span>{t('cta_book_whatsapp')}</span>
                  <span className="speed-cta-arrow">
                    <ArrowRight size={13} strokeWidth={2} />
                  </span>
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
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
      className={`hero-field ${showBorder ? 'with-border' : ''}`}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
    >
      <Icon className="hero-field-icon" size={22} strokeWidth={1.75} />
      <span className="hero-field-copy">
        <span className="hero-field-label">{label}</span>
        <span className="hero-field-value">{value}</span>
      </span>
      <ChevronDown className={`hero-field-chevron ${isOpen ? 'open' : ''}`} size={16} strokeWidth={2} />
    </button>
  );
}

function Dropdown({ children, className, title }: { children: React.ReactNode; className: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={`hero-dropdown ${className}`}
      role="listbox"
    >
      <div className="hero-dropdown-title">{title}</div>
      {children}
    </motion.div>
  );
}

function DropdownOption({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`hero-dropdown-option ${active ? 'active' : ''}`} role="option" aria-selected={active}>
      <span>{children}</span>
      {active && <Check size={16} strokeWidth={2.5} />}
    </button>
  );
}

export default function Hero() {
  const { language, t } = useLanguage();
  const [activeField, setActiveField] = useState<'carType' | 'location' | 'date' | null>(null);

  useEffect(() => {
    if (!activeField) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveField(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeField]);

  const [selectedCarType, setSelectedCarType] = useState('Luxury SUV');
  const [selectedLocation, setSelectedLocation] = useState('Dubai Marina');

  const today = useRef(new Date()).current;
  const thisMonthDate = useRef(new Date(today.getFullYear(), today.getMonth(), 1)).current;
  const nextMonthDate = useRef(new Date(today.getFullYear(), today.getMonth() + 1, 1)).current;

  // Calculate default start (3 days from now) and end (6 days from now) dates
  const dStart = useRef(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)).current;
  const dEnd = useRef(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6)).current;

  // Default to next month if the start date spills over the current month
  const defaultShowNextMonth = dStart.getMonth() !== today.getMonth();

  const [activeMonthDate, setActiveMonthDate] = useState<Date>(
    defaultShowNextMonth ? nextMonthDate : thisMonthDate
  );

  const initialStartDay = dStart.getDate();
  const initialEndDay = dEnd.getMonth() === dStart.getMonth() ? dEnd.getDate() : new Date(dStart.getFullYear(), dStart.getMonth() + 1, 0).getDate();

  const startMonthName = dStart.toLocaleString(language === 'ar' ? 'ar-EG' : 'default', { month: 'short' });
  const endMonthName = dEnd.getMonth() === dStart.getMonth() ? dEnd.toLocaleString(language === 'ar' ? 'ar-EG' : 'default', { month: 'short' }) : startMonthName;

  const [selectedDate, setSelectedDate] = useState(
    language === 'ar'
      ? `${startMonthName} ${initialStartDay} – ${endMonthName} ${initialEndDay}`
      : `${startMonthName} ${initialStartDay} – ${endMonthName} ${initialEndDay}`
  );
  const [startDay, setStartDay] = useState<number | null>(initialStartDay);
  const [endDay, setEndDay] = useState<number | null>(initialEndDay);

  const daysInMonth = new Date(activeMonthDate.getFullYear(), activeMonthDate.getMonth() + 1, 0).getDate();
  const dayOfWeek = activeMonthDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
  const offset = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Map Monday as 0, Sunday as 6
  const spacers = Array.from({ length: offset }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // ─── Scroll parallax ─────────────────────────────────────────────────────
  const { scrollY } = useScroll();
  const rawScroll = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 110]);
  const scrollSpring = useSpring(rawScroll, { stiffness: 50, damping: 18, mass: 0.6 });

  // ─── Mouse parallax ──────────────────────────────────────────────────────
  const rawMX = useMotionValue(0);
  const rawMY = useMotionValue(0);
  const carMX     = useSpring(useTransform(rawMX, [-1, 1], reduce ? [0, 0] : [-16, 16]), { stiffness: 90, damping: 22 });
  const carMYMouse = useSpring(useTransform(rawMY, [-1, 1], reduce ? [0, 0] : [-9,  9]),  { stiffness: 90, damping: 22 });

  // ─── Entrance spring (drives the initial drop-in, then stays at 0) ───────
  const entranceY = useSpring(reduce ? 0 : 54, { stiffness: 90, damping: 18, mass: 0.6 });
  const entranceOpacity = useSpring(0, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const id = setTimeout(() => {
      entranceY.set(0);
      entranceOpacity.set(1);
    }, 150);
    return () => clearTimeout(id);
  }, []);

  // ─── Combined car Y: entrance + scroll + mouse ───────────────────────────
  const combinedCarY = useTransform(
    [entranceY, scrollSpring, carMYMouse] as any,
    ([ey, sy, my]: number[]) => ey + sy + my,
  );

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!heroRef.current || reduce) return;
    const r = heroRef.current.getBoundingClientRect();
    rawMX.set((e.clientX - r.left) / r.width  * 2 - 1);
    rawMY.set((e.clientY - r.top)  / r.height * 2 - 1);
  }, [rawMX, rawMY, reduce]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const activeCarTypeName = translatedCarTypes[selectedCarType]?.[language] || selectedCarType;
  const activeLocationName = translatedLocations[selectedLocation]?.[language] || selectedLocation;

  return (
    <main id="home" ref={heroRef} className="hero-exact">
      <div className="hero-stage">
        <img className="hero-bg-img" src="/assets/hero-bg.webp" alt="" aria-hidden="true" fetchPriority="high" decoding="async" />

        <div className="hero-soft-overlay" />
        <Nav />

        <div className="hero-content-stack">
          <motion.section
            className="hero-copy"
            aria-labelledby="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 id="hero-title" className="text-[#111215]">
              <span>{t('hero_title_1')}</span>
              <span className="bg-[#111215] text-[#F7BF35] px-8 py-3.5 mt-4 inline-block tracking-tight select-none rounded-2xl">
                {t('hero_title_2')}
              </span>
            </h1>
            <p className="text-black/60">
              {t('hero_subtitle')}
            </p>
          </motion.section>

          <motion.div
            className="hero-search-wrap"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              className="hero-search"
              onSubmit={(event) => {
                event.preventDefault();
                // Dynamically format WhatsApp messaging based on current language
                const template = translations.hero_whatsapp_template[language];
                const message = template
                  .replace('{car}', activeCarTypeName)
                  .replace('{location}', activeLocationName)
                  .replace('{date}', selectedDate);
                
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
                  '_blank',
                );
              }}
              aria-label={t('cta_book_whatsapp')}
            >
              <SearchField icon={CarFront}     label={t('hero_field_car')}       value={activeCarTypeName}    isOpen={activeField === 'carType'}   onClick={() => setActiveField(activeField === 'carType'   ? null : 'carType')} />
              <SearchField icon={MapPin}        label={t('hero_field_location')}  value={activeLocationName}   isOpen={activeField === 'location'}  onClick={() => setActiveField(activeField === 'location'  ? null : 'location')} />
              <SearchField icon={CalendarDays}  label={t('hero_field_date')}      value={selectedDate}         isOpen={activeField === 'date'}      onClick={() => setActiveField(activeField === 'date'      ? null : 'date')} showBorder={false} />
              <button type="submit" className="hero-search-button" aria-label={t('cta_book_whatsapp')}>
                <span>{t('cta_book_whatsapp')}</span>
                <span className="hero-search-button-arrow">
                  <ArrowRight size={13} strokeWidth={2.2} />
                </span>
              </button>
            </form>

            <AnimatePresence>
              {activeField && <div className="hero-click-away" onClick={() => setActiveField(null)} />}
            </AnimatePresence>

            <AnimatePresence>
              {activeField === 'carType' && (
                <Dropdown className="dropdown-car" title={t('hero_dropdown_car_title')}>
                  {carTypes.map((type) => (
                    <DropdownOption key={type} active={selectedCarType === type} onClick={() => { setSelectedCarType(type); setActiveField(null); }}>
                      {translatedCarTypes[type]?.[language] || type}
                    </DropdownOption>
                  ))}
                </Dropdown>
              )}
              {activeField === 'location' && (
                <Dropdown className="dropdown-location w-full max-w-[360px] md:max-w-[380px]" title={t('hero_dropdown_loc_title')}>
                  <div className="relative p-2 bg-black/[0.015] rounded-xl border border-black/[0.03] overflow-hidden select-none">
                    {/* SVG Map of Dubai Coastal Area */}
                    <svg viewBox="0 0 340 220" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                      {/* Grid background pattern */}
                      <defs>
                        <pattern id="mapGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mapGrid)" rx="8" />

                      {/* Dubai Coastline path */}
                      <path
                        d="M -20 185 Q 70 170 140 120 T 360 45"
                        fill="none"
                        stroke="rgba(0, 0, 0, 0.05)"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M -20 185 Q 70 170 140 120 T 360 45"
                        fill="none"
                        stroke="rgba(247, 191, 53, 0.15)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="4,4"
                      />

                      {/* Palm Jumeirah Stylized Outline */}
                      <g transform="translate(10, 0)">
                        {/* Trunk */}
                        <path d="M 105 142 L 105 122" stroke="#F7BF35" strokeWidth="5.5" strokeLinecap="round" opacity="0.6" />
                        {/* Crescent Outer Protection Ring */}
                        <path d="M 70 112 A 36 36 0 0 1 140 112" fill="none" stroke="rgba(247, 191, 53, 0.3)" strokeWidth="2" strokeDasharray="3,3" />
                        {/* Fronds */}
                        <path d="M 85 127 Q 75 122 70 127 M 90 122 Q 75 115 68 120 M 95 117 Q 95 102 95 98 M 100 117 Q 115 102 115 98 M 105 122 Q 120 115 127 120 M 110 127 Q 120 122 125 127" fill="none" stroke="#F7BF35" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                      </g>

                      {/* Pulse Animations and Interactive Pins */}
                      {mapPins.map((pin) => {
                        const isActive = selectedLocation === pin.name;
                        return (
                          <g
                            key={pin.name}
                            className="cursor-pointer group/pin"
                            onClick={() => {
                              setSelectedLocation(pin.name);
                              setActiveField(null);
                            }}
                          >
                            {/* Outer pulsing ring for active pin */}
                            {isActive && (
                              <circle
                                cx={pin.x}
                                cy={pin.y}
                                r="12"
                                fill="none"
                                stroke="#F7BF35"
                                strokeWidth="1.5"
                                opacity="0.8"
                              >
                                <animate
                                  attributeName="r"
                                  values="6;16;6"
                                  dur="2s"
                                  repeatCount="indefinite"
                                />
                                <animate
                                  attributeName="opacity"
                                  values="0.8;0;0.8"
                                  dur="2s"
                                  repeatCount="indefinite"
                                />
                              </circle>
                            )}

                            {/* Hover effect glowing target */}
                            <circle
                              cx={pin.x}
                              cy={pin.y}
                              r="16"
                              fill="rgba(247, 191, 53, 0)"
                              className="transition-all duration-300 group-hover/pin:fill-rgba(247,191,53,0.06)"
                            />

                            {/* Solid pin core */}
                            <circle
                              cx={pin.x}
                              cy={pin.y}
                              r={isActive ? "6" : "4.5"}
                              fill={isActive ? "#F7BF35" : "#111215"}
                              stroke={isActive ? "#ffffff" : "#F7BF35"}
                              strokeWidth="1.5"
                              className="transition-all duration-300 group-hover/pin:scale-125"
                              style={{ transformOrigin: `${pin.x}px ${pin.y}px` }}
                            />

                            {/* Tooltip background & text */}
                            <g
                              transform={`translate(${pin.x}, ${pin.y - 16})`}
                              className="opacity-0 pointer-events-none transition-all duration-300 group-hover/pin:opacity-100"
                            >
                              <rect
                                x="-45"
                                y="-20"
                                width="90"
                                height="20"
                                rx="4"
                                fill="#111215"
                                filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
                              />
                              <text
                                x="0"
                                y="-7"
                                fill="#ffffff"
                                fontSize="9"
                                fontWeight="800"
                                textAnchor="middle"
                                className="font-sans tracking-wide uppercase"
                              >
                                {translatedLocations[pin.name]?.[language] || pin.name}
                              </text>
                            </g>
                          </g>
                        );
                      })}
                    </svg>

                    {/* Quick select text list at bottom */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-black/5">
                      {mapPins.map((pin) => (
                        <button
                          key={pin.name}
                          type="button"
                          onClick={() => {
                            setSelectedLocation(pin.name);
                            setActiveField(null);
                          }}
                          className={`px-3 py-1.5 text-[11px] font-bold rounded-lg border transition-all duration-200 ${
                            selectedLocation === pin.name
                              ? 'bg-[#F7BF35]/10 border-[#F7BF35] text-[#111215]'
                              : 'bg-white border-black/5 hover:border-black/15 text-black/55'
                          }`}
                        >
                          {translatedLocations[pin.name]?.[language] || pin.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </Dropdown>
              )}
              {activeField === 'date' && (
                <Dropdown className="dropdown-date" title={t('hero_dropdown_date_title')}>
                  <div className="hero-calendar">
                    <div className="hero-calendar-header">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMonthDate(activeMonthDate.getTime() === thisMonthDate.getTime() ? nextMonthDate : thisMonthDate);
                          setStartDay(null);
                          setEndDay(null);
                        }}
                        className="month-nav-btn"
                        aria-label="Previous month"
                      >
                        ‹
                      </button>
                      <span className="month-name">
                        {activeMonthDate.toLocaleString(language === 'ar' ? 'ar-EG' : 'default', { month: 'long', year: 'numeric' })}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMonthDate(activeMonthDate.getTime() === thisMonthDate.getTime() ? nextMonthDate : thisMonthDate);
                          setStartDay(null);
                          setEndDay(null);
                        }}
                        className="month-nav-btn"
                        aria-label="Next month"
                      >
                        ›
                      </button>
                    </div>
                    <div className="calendar-weekdays" role="row">
                      {(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const).map((day) => (
                        <abbr key={day} title={day} aria-label={day} style={{ textDecoration: 'none' }}>
                          {t(`hero_calendar_${day.toLowerCase()}`).slice(0, 3)}
                        </abbr>
                      ))}
                    </div>
                    <div className="calendar-days">
                      {spacers.map((s) => <span key={`spacer-${s}`} className="calendar-spacer" />)}
                      {days.map((d) => {
                        const isSelectedStart = startDay === d;
                        const isSelectedEnd   = endDay === d;
                        const isInRange       = startDay !== null && endDay !== null && d > startDay && d < endDay;
                        const isSelected      = isSelectedStart || isSelectedEnd;
                        const monthShort = activeMonthDate.toLocaleString(language === 'ar' ? 'ar-EG' : 'default', { month: 'short' });

                        // Hardening Constraint: Disable past days in the current month
                        const isPastDay = activeMonthDate.getFullYear() < today.getFullYear() ||
                          (activeMonthDate.getFullYear() === today.getFullYear() && activeMonthDate.getMonth() < today.getMonth()) ||
                          (activeMonthDate.getFullYear() === today.getFullYear() && activeMonthDate.getMonth() === today.getMonth() && d < today.getDate());

                        return (
                          <button
                            key={d}
                            type="button"
                            disabled={isPastDay}
                            style={isPastDay ? { opacity: 0.28, pointerEvents: 'none', cursor: 'not-allowed', textDecoration: 'line-through' } : undefined}
                            className={`calendar-day-btn ${isSelectedStart ? 'start-day' : ''} ${isSelectedEnd ? 'end-day' : ''} ${isInRange ? 'in-range' : ''} ${isSelected ? 'selected' : ''}`}
                            onClick={() => {
                              if (isPastDay) return;
                              if (startDay === null || (startDay !== null && endDay !== null)) {
                                setStartDay(d);
                                setEndDay(null);
                                setSelectedDate(`${monthShort} ${d}`);
                              } else {
                                if (d >= startDay) {
                                  setEndDay(d);
                                  setSelectedDate(`${monthShort} ${startDay} – ${monthShort} ${d}`);
                                  setActiveField(null);
                                } else {
                                  setStartDay(d);
                                  setSelectedDate(`${monthShort} ${d}`);
                                }
                              }
                            }}
                          >
                            {d}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </Dropdown>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Car: entrance spring + scroll parallax + mouse parallax, all combined */}
        <motion.div
          className="hero-car-stage"
          style={{
            opacity: entranceOpacity,
            x: carMX,
            y: combinedCarY,
          }}
        >
          <img
            src="/assets/hero-car.webp"
            alt="Premium yellow luxury SUV"
            className="hero-car-inner"
          />
        </motion.div>
      </div>
    </main>
  );
}

