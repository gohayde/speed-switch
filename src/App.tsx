'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { LanguageProvider } from './LanguageContext';
import Hero from './sections/Hero';
import BrandMarquee from './sections/BrandMarquee';
import PickYourCar from './sections/PickYourCar';
import WhyRent from './sections/WhyRent';
import DubaiDelivery from './sections/DubaiDelivery';
import RentalProcess from './sections/RentalProcess';
import Reviews from './sections/Reviews';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';
import Footer from './sections/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let raf: number;
    function loop(time: number) { lenis.raf(time); raf = requestAnimationFrame(loop); }
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return (
    <LanguageProvider>
      <div className="overflow-x-hidden">
        <Hero />
        <BrandMarquee />
        <PickYourCar />
        <WhyRent />
        <DubaiDelivery />
        <RentalProcess />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
