import { useState, useRef, useEffect, useCallback } from 'react';
import {
  motion, AnimatePresence,
  useScroll, useTransform, useSpring, useMotionValue, useReducedMotion,
} from 'framer-motion';
import { ArrowRight, CalendarDays, CarFront, ChevronDown, MapPin, Search, Check } from 'lucide-react';

const WHATSAPP_NUMBER = '971521430808';
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20car`;
const carTypes = ['Luxury SUV', 'V12 Supercar', 'High-End Sports', 'Exotic Convertible'];
const locations = ['Dubai, UAE', 'Dubai Marina', 'Palm Jumeirah', 'DXB Airport'];

function Logo() {
  return (
    <a className="inline-flex min-h-11 items-center gap-[14px] group hero-logo" href="#home" aria-label="Speed Switch Home">
      <span className="relative w-[22px] h-[22px] inline-block flex-shrink-0" aria-hidden="true">
        <span className="absolute left-[9px] top-[-1px] w-[5px] h-[24px] rounded-[2px] bg-[#CFA64A] rotate-[42deg] transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-0" />
        <span className="absolute left-[9px] top-[-1px] w-[5px] h-[24px] rounded-[2px] bg-[#CFA64A] rotate-[-42deg] transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-90" />
      </span>
      <span className="hero-logo-word">SPEED SWITCH</span>
    </a>
  );
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { label: 'Home',     href: '#home' },
    { label: 'Fleet',    href: '#vehicles' },
    { label: 'Why Us',   href: '#why-us' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Process',  href: '#process' },
    { label: 'Reviews',  href: '#reviews' },
    { label: 'FAQ',      href: '#faq' },
  ];
  const reduce = useReducedMotion();

  return (
    <>
      <motion.header
        className="hero-nav-island"
        initial={reduce ? undefined : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="hero-nav-pill">
          <Logo />
          <nav className="hero-nav-links" aria-label="Primary navigation">
            {items.map(({ label, href }) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>
          <div className="hero-nav-actions">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hero-book">
              <span>Book Now</span>
              <span className="hero-book-arrow">
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
                  onClick={() => setMenuOpen(false)}
                  initial={reduce ? undefined : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="overlay-link-num">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </motion.a>
              ))}
              <motion.a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-overlay-cta"
                onClick={() => setMenuOpen(false)}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 + items.length * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                Book on WhatsApp
              </motion.a>
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
    <button type="button" onClick={onClick} className={`hero-field ${showBorder ? 'with-border' : ''}`}>
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
    >
      <div className="hero-dropdown-title">{title}</div>
      {children}
    </motion.div>
  );
}

function DropdownOption({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className={`hero-dropdown-option ${active ? 'active' : ''}`}>
      <span>{children}</span>
      {active && <Check size={16} strokeWidth={2.5} />}
    </button>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [activeField, setActiveField] = useState<'carType' | 'location' | 'date' | null>(null);
  const [selectedCarType, setSelectedCarType] = useState('Luxury SUV');
  const [selectedLocation, setSelectedLocation] = useState('Dubai, UAE');
  const [selectedDate, setSelectedDate] = useState('Jun 24 – Jun 27');
  const [startDay, setStartDay] = useState<number | null>(24);
  const [endDay, setEndDay] = useState<number | null>(27);
  const [currentMonth, setCurrentMonth] = useState<'May' | 'June'>('June');

  const daysInMonth = currentMonth === 'May' ? 31 : 30;
  const offset = currentMonth === 'May' ? 4 : 0;
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

  return (
    <main id="home" ref={heroRef} className="hero-exact">
      <div className="hero-stage">
        <img className="hero-bg-img" src="/assets/hero-bg.png" alt="" aria-hidden="true" />

        <div className="hero-soft-overlay" />
        <Nav />

        <div className="hero-content-stack">
          <motion.section
            className="hero-copy"
            aria-labelledby="hero-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 id="hero-title">
              <span>Drive Dubai</span>
              <span>In Style</span>
            </h1>
            <p>
              Pick your car. Pick your date. We bring it to you.<br />
              Anywhere in Dubai, any time.
            </p>
          </motion.section>

          <motion.div
            className="hero-search-wrap"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <form
            className="hero-search"
            onSubmit={(event) => {
              event.preventDefault();
              window.open(
                `${WA_LINK}&text=Hi%20I%20want%20to%20rent%20a%20${encodeURIComponent(selectedCarType)}%20in%20${encodeURIComponent(selectedLocation)}%20for%20${encodeURIComponent(selectedDate)}`,
                '_blank',
              );
            }}
            aria-label="Check rental availability on WhatsApp"
          >
            <SearchField icon={CarFront}     label="Car Type"         value={selectedCarType}    isOpen={activeField === 'carType'}   onClick={() => setActiveField(activeField === 'carType'   ? null : 'carType')} />
            <SearchField icon={MapPin}        label="Location"         value={selectedLocation}   isOpen={activeField === 'location'}  onClick={() => setActiveField(activeField === 'location'  ? null : 'location')} />
            <SearchField icon={CalendarDays}  label="Date"             value={selectedDate}       isOpen={activeField === 'date'}      onClick={() => setActiveField(activeField === 'date'      ? null : 'date')} showBorder={false} />
            <button type="submit" className="hero-search-button" aria-label="Check availability on WhatsApp">
              <Search size={20} strokeWidth={2.5} />
            </button>
          </form>

          <AnimatePresence>
            {activeField && <div className="hero-click-away" onClick={() => setActiveField(null)} />}
          </AnimatePresence>

          <AnimatePresence>
            {activeField === 'carType' && (
              <Dropdown className="dropdown-car" title="Select Category">
                {carTypes.map((type) => (
                  <DropdownOption key={type} active={selectedCarType === type} onClick={() => { setSelectedCarType(type); setActiveField(null); }}>
                    {type}
                  </DropdownOption>
                ))}
              </Dropdown>
            )}
            {activeField === 'location' && (
              <Dropdown className="dropdown-location" title="Choose Location">
                {locations.map((location) => (
                  <DropdownOption key={location} active={selectedLocation === location} onClick={() => { setSelectedLocation(location); setActiveField(null); }}>
                    {location}
                  </DropdownOption>
                ))}
              </Dropdown>
            )}
            {activeField === 'date' && (
              <Dropdown className="dropdown-date" title="Select Date Range">
                <div className="hero-calendar">
                  <div className="hero-calendar-header">
                    <button type="button" onClick={() => setCurrentMonth(currentMonth === 'May' ? 'June' : 'May')} className="month-nav-btn">‹</button>
                    <span className="month-name">{currentMonth} 2026</span>
                    <button type="button" onClick={() => setCurrentMonth(currentMonth === 'May' ? 'June' : 'May')} className="month-nav-btn">›</button>
                  </div>
                  <div className="calendar-weekdays" role="row">
                    {(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const).map((day, i) => (
                      <abbr key={day} title={day} aria-label={day} style={{ textDecoration: 'none' }}>
                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
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

                      return (
                        <button
                          key={d}
                          type="button"
                          className={`calendar-day-btn ${isSelectedStart ? 'start-day' : ''} ${isSelectedEnd ? 'end-day' : ''} ${isInRange ? 'in-range' : ''} ${isSelected ? 'selected' : ''}`}
                          onClick={() => {
                            if (startDay === null || (startDay !== null && endDay !== null)) {
                              setStartDay(d);
                              setEndDay(null);
                              setSelectedDate(`${currentMonth.slice(0,3)} ${d}`);
                            } else {
                              if (d >= startDay) {
                                setEndDay(d);
                                setSelectedDate(`${currentMonth.slice(0,3)} ${startDay} – ${currentMonth.slice(0,3)} ${d}`);
                                setActiveField(null);
                              } else {
                                setStartDay(d);
                                setSelectedDate(`${currentMonth.slice(0,3)} ${d}`);
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
            src="/assets/hero-car.png"
            alt="Premium yellow luxury SUV"
            className="hero-car-inner"
          />
        </motion.div>
      </div>
    </main>
  );
}
