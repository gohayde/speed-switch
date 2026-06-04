import { useState, useRef, useEffect, useCallback } from 'react';
import {
  motion, AnimatePresence,
  useScroll, useTransform, useSpring, useMotionValue, useReducedMotion,
} from 'framer-motion';
import { ArrowRight, CalendarDays, CarFront, ChevronDown, MapPin, Check } from 'lucide-react';
import { useLanguage, translations } from '../LanguageContext';

const WHATSAPP_NUMBER = '971523660709';
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
      <svg className="w-[20px] h-[20px] text-[#111215] transition-colors duration-300 group-hover:text-gold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              className="px-3.5 py-1.5 rounded-full border border-black/10 bg-white/60 hover:bg-gold/15 hover:border-gold/40 text-[10.5px] font-black tracking-widest transition-all cursor-pointer select-none active:scale-95 text-black"
              aria-label={language === 'en' ? 'Switch to Arabic' : 'التغيير إلى الإنجليزية'}
            >
              {language === 'en' ? 'العربية' : 'EN'}
            </button>

            <div className="hidden sm:block">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="speed-cta">
                <span>{t('cta_book_whatsapp')}</span>
                <span className="speed-cta-arrow">
                  <ArrowRight size={13} strokeWidth={2} />
                </span>
              </a>
            </div>
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

function Dropdown({ children, className, title, role = 'listbox' }: { children: React.ReactNode; className: string; title: string; role?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
      className={`hero-dropdown ${className}`}
      role={role}
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

const locationCoordinates: Record<string, [number, number]> = {
  'Dubai Marina': [25.0784, 55.1408],
  'Palm Jumeirah': [25.1124, 55.1390],
  'Downtown Dubai': [25.1972, 55.2744],
  'DXB Airport': [25.2532, 55.3657],
};

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

  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const searchTimeoutRef = useRef<any>(null);

  // Load Leaflet dynamically
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ((window as any).L) {
      setLeafletLoaded(true);
      return;
    }

    const cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(cssLink);

    const jsScript = document.createElement('script');
    jsScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    jsScript.async = true;
    jsScript.onload = () => {
      setLeafletLoaded(true);
    };
    document.head.appendChild(jsScript);
  }, []);

  const handleMapPinChange = async (lat: number, lng: number) => {
    setIsSearching(true);
    setSearchError(null);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&addressdetails=1`,
        {
          headers: {
            'User-Agent': 'SpeedSwitch-Car-Rental-Dubai/1.0 (contact@speedswitch.ae)'
          }
        }
      );
      if (!res.ok) throw new Error("Reverse geocoding failed");
      const data = await res.json();
      if (data && data.address) {
        const addr = data.address;
        const name = addr.tourism || addr.amenity || addr.building || addr.suburb || addr.neighbourhood || addr.city_district || addr.road || addr.city || 'Dubai Custom Location';
        setSelectedLocation(name);
        setSearchQuery(name);
      }
    } catch (err) {
      console.error("Error geocoding pin coordinate:", err);
      setSearchError(language === 'ar' ? 'فشل استرجاع العنوان من الخريطة.' : 'Failed to retrieve address from map coordinates.');
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchError(null);
    setSearchResults([]);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.trim().length < 3) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const searchQ = query.toLowerCase().includes('dubai') ? query : `${query}, Dubai`;
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQ)}&limit=5&addressdetails=1`,
          {
            headers: {
              'User-Agent': 'SpeedSwitch-Car-Rental-Dubai/1.0 (contact@speedswitch.ae)'
            }
          }
        );
        if (!res.ok) throw new Error("Search request failed");
        const data = await res.json();
        if (data && data.length === 0) {
          setSearchError(language === 'ar' ? 'لم يتم العثور على نتائج.' : 'No results found.');
        }
        setSearchResults(data || []);
      } catch (err) {
        console.error("Error searching location:", err);
        setSearchError(language === 'ar' ? 'فشل الاتصال بخدمة الخرائط. يرجى إدخال الموقع يدوياً.' : 'Map service unavailable. Please enter manually.');
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    }, 450);
  };

  const handleSelectResult = (result: any) => {
    const lat = parseFloat(result.lat);
    const lon = parseFloat(result.lon);
    const addr = result.address;
    const name = result.name || addr.tourism || addr.amenity || addr.building || addr.suburb || addr.neighbourhood || addr.city_district || addr.road || addr.city || result.display_name;

    setSelectedLocation(name);
    setSearchQuery(name);
    setSearchResults([]);

    if (mapInstanceRef.current && markerRef.current) {
      mapInstanceRef.current.flyTo([lat, lon], 14);
      markerRef.current.setLatLng([lat, lon]);
    }
  };

  const handleQuickSelectLocation = (name: string) => {
    setSelectedLocation(name);
    setSearchQuery(name);
    const coords = locationCoordinates[name];
    if (coords && mapInstanceRef.current && markerRef.current) {
      mapInstanceRef.current.flyTo(coords, 14);
      markerRef.current.setLatLng(coords);
    }
  };

  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (activeField !== 'location' || !leafletLoaded || !mapContainerRef.current) {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
      return;
    }

    const L = (window as any).L;
    if (!L) return;

    const initialCoords = locationCoordinates[selectedLocation] || [25.1972, 55.2744];

    const map = L.map(mapContainerRef.current, {
      zoomControl: false,
      attributionControl: false
    }).setView(initialCoords, 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      maxZoom: 19
    }).addTo(map);

    const customIcon = L.divIcon({
      html: `<div class="w-8 h-8 -translate-x-1/2 -translate-y-full flex items-center justify-center pointer-events-none">
        <svg class="w-8 h-8 text-[#111215] drop-shadow-md" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="var(--color-gold)"/>
          <circle cx="12" cy="10" r="3" fill="#111215"/>
        </svg>
      </div>`,
      className: 'custom-pin-icon',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    });

    const marker = L.marker(initialCoords, {
      icon: customIcon,
      draggable: true
    }).addTo(map);

    markerRef.current = marker;
    mapInstanceRef.current = map;

    map.on('click', (e: any) => {
      const { lat, lng } = e.latlng;
      marker.setLatLng([lat, lng]);
      handleMapPinChange(lat, lng);
    });

    marker.on('dragend', () => {
      const { lat, lng } = marker.getLatLng();
      handleMapPinChange(lat, lng);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, [activeField, leafletLoaded, selectedLocation]);

  const today = useRef(new Date()).current;
  const thisMonthDate = useRef(new Date(today.getFullYear(), today.getMonth(), 1)).current;
  const nextMonthDate = useRef(new Date(today.getFullYear(), today.getMonth() + 1, 1)).current;

  // Calculate default start (3 days from now) and end (6 days from now) dates
  const dStart = useRef(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)).current;

  // Default to next month if the start date spills over the current month
  const defaultShowNextMonth = dStart.getMonth() !== today.getMonth();

  const [activeMonthDate, setActiveMonthDate] = useState<Date>(
    defaultShowNextMonth ? nextMonthDate : thisMonthDate
  );

  const [startDate, setStartDate] = useState<Date | null>(() => {
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3);
  });
  const [endDate, setEndDate] = useState<Date | null>(() => {
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6);
  });

  const formatDateRange = (start: Date | null, end: Date | null, lang: 'en' | 'ar') => {
    if (!start) return lang === 'ar' ? 'اختر التواريخ' : 'Select dates';
    const startDayNum = start.getDate();
    const startMonth = start.toLocaleString(lang === 'ar' ? 'ar-EG' : 'default', { month: 'short' });
    
    if (!end) {
      return `${startMonth} ${startDayNum}`;
    }
    
    const endDayNum = end.getDate();
    const endMonth = end.toLocaleString(lang === 'ar' ? 'ar-EG' : 'default', { month: 'short' });
    
    return `${startMonth} ${startDayNum} – ${endMonth} ${endDayNum}`;
  };

  const selectedDate = formatDateRange(startDate, endDate, language);

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
        <div className="hero-bg-canvas" aria-hidden="true" />
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
              <span className="bg-dark text-gold px-8 py-3.5 mt-4 inline-block tracking-tight select-none rounded-2xl">
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
                <Dropdown className="dropdown-location w-full max-w-[380px] md:max-w-[400px]" title={t('hero_dropdown_loc_title')} role="dialog">
                  <div className="relative flex flex-col gap-2 p-2 bg-black/[0.015] rounded-xl border border-black/[0.03] overflow-visible">
                    {/* Search Input Bar */}
                    <div className="relative w-full">
                      <input
                        type="text"
                        aria-label={language === 'ar' ? 'ابحث عن موقع في دبي' : 'Search location in Dubai'}
                        placeholder={language === 'ar' ? 'ابحث عن موقع في دبي...' : 'Search location in Dubai...'}
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="w-full h-10 pl-3 pr-8 text-xs bg-white border border-black/10 rounded-lg focus:outline-none focus:border-gold text-black font-semibold"
                        style={{ paddingLeft: '12px', paddingRight: '32px' }}
                      />
                      {isSearching ? (
                        <div className="absolute right-3 top-3 w-4 h-4 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                      ) : searchQuery ? (
                        <button
                          type="button"
                          onClick={() => { setSearchQuery(''); setSearchResults([]); }}
                          className="absolute right-3 top-2.5 text-black/40 hover:text-black font-bold text-sm cursor-pointer"
                        >
                          ×
                        </button>
                      ) : null}

                      {/* Autocomplete Results list */}
                      {(searchResults.length > 0 || searchQuery.trim().length > 0) && (
                        <div className="absolute left-0 right-0 z-[100] mt-1 bg-white border border-black/10 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                          {searchQuery.trim().length > 0 && (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedLocation(searchQuery);
                                setSearchResults([]);
                                setActiveField(null);
                              }}
                              className="w-full text-left px-3 py-2 text-[11px] hover:bg-gold/10 border-b border-black/[0.03] font-bold text-gold flex items-center gap-1.5 cursor-pointer"
                            >
                              <Check size={10} className="text-gold shrink-0" />
                              <span className="truncate">
                                {language === 'ar' ? `استخدام: "${searchQuery}"` : `Use: "${searchQuery}"`}
                              </span>
                            </button>
                          )}
                          {searchResults.map((result: any) => (
                            <button
                              key={result.place_id}
                              type="button"
                              onClick={() => handleSelectResult(result)}
                              className="w-full text-left px-3 py-2 text-[11px] hover:bg-gold/10 border-b border-black/[0.03] last:border-0 font-bold text-black/80 flex items-center gap-1.5 cursor-pointer"
                            >
                              <MapPin size={10} className="text-gold shrink-0" />
                              <span className="truncate">{result.display_name}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Geocoding & search error status indicator */}
                      {searchError && (
                        <div className="absolute left-0 right-0 z-[100] mt-1 bg-white border border-red-200 text-red-600 rounded-lg shadow-lg p-2.5 text-[10.5px] font-bold text-center">
                          {searchError}
                        </div>
                      )}
                    </div>

                    {/* Leaflet Map Frame */}
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden border border-black/5 bg-black/[0.02]" style={{ zIndex: 1 }}>
                      <div ref={mapContainerRef} className="w-full h-full" />
                      
                      {!leafletLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-[10]">
                          <div className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                        </div>
                      )}
                    </div>

                    {/* Quick Select Buttons */}
                    <div className="flex flex-wrap gap-1.5 mt-1 pt-2 border-t border-black/5">
                      {mapPins.map((pin) => (
                        <button
                          key={pin.name}
                          type="button"
                          onClick={() => handleQuickSelectLocation(pin.name)}
                          className={`px-2.5 py-1.5 text-[10px] font-extrabold rounded-lg border transition-all duration-200 cursor-pointer ${
                            selectedLocation === pin.name
                              ? 'bg-gold/15 border-gold text-[#111215]'
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
                <Dropdown className="dropdown-date" title={t('hero_dropdown_date_title')} role="dialog">
                  <div className="hero-calendar">
                    <div className="hero-calendar-header">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveMonthDate(activeMonthDate.getTime() === thisMonthDate.getTime() ? nextMonthDate : thisMonthDate);
                        }}
                        className="month-nav-btn"
                        aria-label={language === 'ar' ? 'الشهر السابق' : 'Previous month'}
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
                        }}
                        className="month-nav-btn"
                        aria-label={language === 'ar' ? 'الشهر التالي' : 'Next month'}
                      >
                        ›
                      </button>
                    </div>
                    <div className="calendar-weekdays" role="row">
                      {(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const).map((day) => (
                        <abbr key={day} title={day} aria-label={day} style={{ textDecoration: 'none' }}>
                          {language === 'ar'
                            ? t(`hero_calendar_${day.toLowerCase()}`)
                            : t(`hero_calendar_${day.toLowerCase()}`).slice(0, 3)}
                        </abbr>
                      ))}
                    </div>
                    <div className="calendar-days">
                      {spacers.map((s) => <span key={`spacer-${s}`} className="calendar-spacer" />)}
                      {days.map((d) => {
                        const currentDayDate = new Date(activeMonthDate.getFullYear(), activeMonthDate.getMonth(), d);
                        const isSelectedStart = startDate !== null && 
                          startDate.getFullYear() === currentDayDate.getFullYear() &&
                          startDate.getMonth() === currentDayDate.getMonth() &&
                          startDate.getDate() === currentDayDate.getDate();

                        const isSelectedEnd = endDate !== null && 
                          endDate.getFullYear() === currentDayDate.getFullYear() &&
                          endDate.getMonth() === currentDayDate.getMonth() &&
                          endDate.getDate() === currentDayDate.getDate();

                        const isSelected = isSelectedStart || isSelectedEnd;

                        const isInRange = startDate !== null && endDate !== null &&
                          currentDayDate.getTime() > startDate.getTime() &&
                          currentDayDate.getTime() < endDate.getTime();

                        const monthShort = activeMonthDate.toLocaleString(language === 'ar' ? 'ar-EG' : 'default', { month: 'short' });

                        const compareToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
                        const isPastDay = currentDayDate.getTime() < compareToday.getTime();

                        return (
                          <button
                            key={d}
                            type="button"
                            disabled={isPastDay}
                            aria-selected={isSelected}
                            aria-pressed={isSelected}
                            aria-label={language === 'ar' ? `${d} ${monthShort}` : `${monthShort} ${d}`}
                            style={isPastDay ? { opacity: 0.28, pointerEvents: 'none', cursor: 'not-allowed', textDecoration: 'line-through' } : undefined}
                            className={`calendar-day-btn ${isSelectedStart ? 'start-day' : ''} ${isSelectedEnd ? 'end-day' : ''} ${isInRange ? 'in-range' : ''} ${isSelected ? 'selected' : ''}`}
                            onClick={() => {
                              if (isPastDay) return;
                              if (startDate === null || (startDate !== null && endDate !== null)) {
                                setStartDate(currentDayDate);
                                setEndDate(null);
                              } else {
                                if (currentDayDate.getTime() >= startDate.getTime()) {
                                  setEndDate(currentDayDate);
                                  setActiveField(null);
                                } else {
                                  setStartDate(currentDayDate);
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
        {/* Wrapped in a dedicated clipping container so the car stays inside the hero, while dropdowns can overflow */}
        <div className="hero-car-wrapper" style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}>
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
      </div>
    </main>
  );
}

