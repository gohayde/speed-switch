import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  ChevronDown,
  MapPin,
  Search,
  Check,
} from 'lucide-react';

const WA_LINK = 'https://wa.me/971500000000?text=Hi%2C%20I%20want%20to%20book%20a%20car';

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

  return (
    <header className="hero-nav">
      <Logo />
      <nav className="hero-nav-links">
        {items.map((item) => (
          <a
            key={item}
            href={item === 'Home' ? '#home' : item === 'Fleet' ? '#vehicles' : `#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className={item === 'Home' ? 'active' : ''}
          >
            {item}
          </a>
        ))}
      </nav>
      <div className="hero-nav-actions">
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hero-book">
          <span>Book Now</span>
          <ArrowRight size={20} strokeWidth={2} />
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

  return (
    <main id="home" className="hero-exact">
      <div className="hero-stage">
        <img className="hero-bg-img" src="/assets/hero-bg.png" alt="" aria-hidden="true" />
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

        <motion.img
          className="hero-car-img"
          src="/assets/hero-car.png"
          alt="Premium yellow luxury SUV"
          initial={{ opacity: 0, y: 54 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        />

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
            aria-label="Search rental cars"
          >
            <SearchField icon={CarFront} label="Car Type" value={selectedCarType} isOpen={activeField === 'carType'} onClick={() => setActiveField(activeField === 'carType' ? null : 'carType')} />
            <SearchField icon={MapPin} label="Pick-up Location" value={selectedLocation} isOpen={activeField === 'location'} onClick={() => setActiveField(activeField === 'location' ? null : 'location')} />
            <SearchField icon={CalendarDays} label="Date" value={selectedDate} isOpen={activeField === 'date'} onClick={() => setActiveField(activeField === 'date' ? null : 'date')} showBorder={false} />
            <button type="submit" className="hero-search-button" aria-label="Search">
              <Search size={22} strokeWidth={2} />
              <span>Search</span>
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
                      const isSelectedEnd = endDay === d;
                      const isInRange = startDay !== null && endDay !== null && d > startDay && d < endDay;
                      const isSelected = isSelectedStart || isSelectedEnd;

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
