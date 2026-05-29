import { useState, useRef, useEffect, useCallback } from 'react';
import {
  motion, AnimatePresence,
  useScroll, useTransform, useSpring, useMotionValue, useReducedMotion,
} from 'framer-motion';
import { ArrowRight, CalendarDays, CarFront, ChevronDown, MapPin, Search, Check } from 'lucide-react';

const WHATSAPP_NUMBER = '971521430808';
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20want%20to%20book%20a%20car`;
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const carTypes = ['Luxury SUV', 'V12 Supercar', 'High-End Sports', 'Exotic Convertible'];
const locations = ['Dubai, UAE', 'Dubai Marina', 'Palm Jumeirah', 'DXB Airport'];

function Logo() {
  return (
    <a className="hero-logo group" href="#home" aria-label="Speed Switch Home">
      <span className="hero-logo-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="hero-logo-word" style={{ letterSpacing: '0.05em' }}>Speed Switch</span>
    </a>
  );
}

function Nav() {
  const items = ['Home', 'Fleet', 'Why Us', 'Reviews', 'FAQ'];
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_EXPO } },
  };

  return (
    <motion.header
      className="hero-nav"
      variants={reduce ? undefined : containerVariants}
      initial={reduce ? undefined : 'hidden'}
      animate={reduce ? undefined : 'visible'}
    >
      <motion.div variants={reduce ? undefined : itemVariants}>
        <Logo />
      </motion.div>
      <motion.nav className="hero-nav-links" variants={reduce ? undefined : itemVariants}>
        {items.map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '#home' : item === 'Fleet' ? '#vehicles' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className={item === 'Home' ? 'active' : ''}
          >
            {item}
          </a>
        ))}
      </motion.nav>
      <motion.div className="hero-nav-actions" variants={reduce ? undefined : itemVariants}>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hero-book">
          <span>Book on WhatsApp</span>
          <ArrowRight size={20} strokeWidth={2} />
        </a>
      </motion.div>
    </motion.header>
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

// ─── Ambient gold canvas ─────────────────────────────────────────────────────

function useAmbientCanvas(ref: React.RefObject<HTMLCanvasElement>, disabled: boolean) {
  useEffect(() => {
    if (disabled) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0, H = 0, cx = 0, cy = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    cx = W / 2;
    cy = H / 2;

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      cx = e.clientX - r.left;
      cy = e.clientY - r.top;
    };
    document.addEventListener('mousemove', onMove, { passive: true });

    type Blob = { x: number; y: number; vx: number; vy: number; r: number; phase: number; spd: number };

    const makeBlobs = (): Blob[] => [
      { x: W * 0.15, y: H * 0.25, vx: 0.22,  vy: 0.12,  r: 260, phase: 0,   spd: 0.004  },
      { x: W * 0.72, y: H * 0.65, vx: -0.18, vy: 0.15,  r: 220, phase: 1.8, spd: 0.003  },
      { x: W * 0.48, y: H * 0.82, vx: 0.12,  vy: -0.18, r: 310, phase: 3.2, spd: 0.0025 },
      { x: W * 0.88, y: H * 0.18, vx: -0.20, vy: 0.19,  r: 240, phase: 4.6, spd: 0.0035 },
      { x: W * 0.35, y: H * 0.50, vx: 0.15,  vy: -0.10, r: 200, phase: 2.4, spd: 0.005  },
    ];

    const blobs = makeBlobs();
    let t = 0, raf: number;

    const draw = () => {
      t++;
      ctx.clearRect(0, 0, W, H);

      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        // Gentle cursor pull
        b.vx += (cx - b.x) * 0.000018;
        b.vy += (cy - b.y) * 0.000018;
        b.vx *= 0.9995;
        b.vy *= 0.9995;
        // Wrap at edges
        if (b.x < -b.r) b.x = W + b.r;
        if (b.x > W + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = H + b.r;
        if (b.y > H + b.r) b.y = -b.r;

        const pulse = b.r + Math.sin(t * b.spd + b.phase) * 38;
        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, pulse);
        g.addColorStop(0,   'rgba(224, 162, 0, 0.18)');
        g.addColorStop(0.4, 'rgba(207, 148, 42, 0.09)');
        g.addColorStop(1,   'rgba(224, 162, 0, 0)');

        ctx.beginPath();
        ctx.arc(b.x, b.y, pulse, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener('mousemove', onMove);
    };
  }, [disabled]);
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export default function Hero() {
  const [activeField, setActiveField] = useState<'carType' | 'location' | 'date' | null>(null);
  const [selectedCarType, setSelectedCarType] = useState('Luxury SUV');
  const [selectedLocation, setSelectedLocation] = useState('Dubai, UAE');
  const [selectedDate, setSelectedDate] = useState('June 24 – June 27');
  const [startDay, setStartDay] = useState<number | null>(24);
  const [endDay, setEndDay] = useState<number | null>(27);
  const [currentMonth, setCurrentMonth] = useState<'May' | 'June'>('June');

  const daysInMonth = currentMonth === 'May' ? 31 : 30;
  const offset = currentMonth === 'May' ? 4 : 0;
  const spacers = Array.from({ length: offset }, (_, i) => i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
    [entranceY, scrollSpring, carMYMouse] as Parameters<typeof useTransform>[0],
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

  useAmbientCanvas(canvasRef, !!reduce);

  return (
    <main id="home" ref={heroRef} className="hero-exact">
      <div className="hero-stage">
        <img className="hero-bg-img" src="/assets/hero-bg.png" alt="" aria-hidden="true" />

        {/* Ambient gold canvas layer */}
        <canvas ref={canvasRef} className="hero-ambient-canvas" aria-hidden="true" />

        <div className="hero-soft-overlay" />
        <Nav />

        <motion.section
          className="hero-copy"
          aria-labelledby="hero-title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <h1 id="hero-title">
            <span>Premium Car</span>
            <span>Rental</span>
          </h1>
          <p>
            Drive extraordinary luxury cars, simple booking,
            <br /> unforgettable experience.
          </p>
        </motion.section>

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
            <SearchField icon={MapPin}        label="Pick-up Location" value={selectedLocation}   isOpen={activeField === 'location'}  onClick={() => setActiveField(activeField === 'location'  ? null : 'location')} />
            <SearchField icon={CalendarDays}  label="Date"             value={selectedDate}       isOpen={activeField === 'date'}      onClick={() => setActiveField(activeField === 'date'      ? null : 'date')} showBorder={false} />
            <button type="submit" className="hero-search-button" aria-label="Check availability on WhatsApp">
              <Search size={22} strokeWidth={2} />
              <span>Check availability</span>
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
                              setSelectedDate(`${currentMonth} ${d}`);
                            } else {
                              if (d >= startDay) {
                                setEndDay(d);
                                setSelectedDate(`${currentMonth} ${startDay} – ${currentMonth} ${d}`);
                                setActiveField(null);
                              } else {
                                setStartDay(d);
                                setSelectedDate(`${currentMonth} ${d}`);
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
    </main>
  );
}
