import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  ChevronDown,
  MapPin,
  Search,
  UserRound,
} from 'lucide-react';
import './styles.css';

function Logo() {
  return (
    <a className="brand" href="#" aria-label="Luxe home">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span className="brand-name">LUXE</span>
    </a>
  );
}

function Nav() {
  const items = ['Home', 'Vehicles', 'Locations', 'Experiences', 'About Us'];

  return (
    <header className="site-header">
      <Logo />
      <nav className="main-nav" aria-label="Primary navigation">
        {items.map((item) => (
          <a className={item === 'Home' ? 'active' : ''} href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="profile-button" aria-label="Open profile">
          <UserRound size={25} strokeWidth={1.7} />
        </button>
        <a className="book-button" href="#">
          <span>Book Now</span>
          <ArrowRight size={25} strokeWidth={1.8} />
        </a>
      </div>
    </header>
  );
}

function SearchField({ icon: Icon, label, value }) {
  return (
    <button className="search-field" type="button">
      <Icon className="field-icon" size={30} strokeWidth={1.8} />
      <span className="field-text">
        <span className="field-label">{label}</span>
        <span className="field-value">{value}</span>
      </span>
      <ChevronDown className="field-chevron" size={20} strokeWidth={1.8} />
    </button>
  );
}

function BookingSearch() {
  return (
    <form className="booking-panel" aria-label="Search rental cars">
      <SearchField icon={CarFront} label="Car Type" value="Luxury SUV" />
      <SearchField icon={MapPin} label="Pick-up Location" value="Dubai, UAE" />
      <SearchField icon={CalendarDays} label="Date" value="May 24 - May 27" />
      <button className="search-button" type="submit">
        <Search size={31} strokeWidth={1.8} />
        <span>Search</span>
      </button>
    </form>
  );
}

function Hero() {
  return (
    <main className="hero">
      <img className="hero-bg" src="/assets/hero-bg.png" alt="" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <Nav />
      <section className="hero-content" aria-labelledby="hero-title">
        <h1 id="hero-title">
          <span>Premium Car</span>
          <span>Rental</span>
        </h1>
        <p>Drive extraordinary. Luxury cars, simple booking, unforgettable experiences.</p>
        <BookingSearch />
      </section>
      <img className="hero-car" src="/assets/hero-car.png" alt="Yellow luxury SUV" />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<Hero />);
