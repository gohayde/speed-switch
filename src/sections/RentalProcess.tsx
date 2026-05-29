import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WA_BOOK = 'https://wa.me/971500000000?text=Hi%2C%20I%20want%20to%20start%20a%20booking';

const steps = [
  {
    number: '01',
    title: 'Choose Your Car',
    body: 'Pick from luxury, sports, SUV, or standard rental options.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-[#CFA64A]" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-7.18 0M18.66 8.86a9 9 0 0 1-13.32 0M12 2.25v2.7M12 19.05v2.7M2.25 12h2.7M19.05 12h2.7" />
        <circle cx="12" cy="12" r="9.75" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Confirm Availability',
    body: 'Message the team on WhatsApp and confirm your rental dates, delivery location, and required documents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-[#CFA64A]" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Get Fast Delivery',
    body: 'Receive the car at your preferred location in Dubai, including hotels, residences, or selected handover points.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-[#CFA64A]" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Drive & Return Easily',
    body: 'Enjoy a clean, well maintained car with flexible support and a smooth return process.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-[#CFA64A]" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5V18a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18V7.5M21 7.5V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v1.5m18 0v3.75a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 11.25V7.5" />
      </svg>
    ),
  },
];

export default function RentalProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Desktop GSAP Horizontal Pinned Scrub Translation
  useEffect(() => {
    if (reduce || !sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const distance = trackRef.current!.scrollWidth - window.innerWidth;
      
      gsap.to(trackRef.current, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${distance + 350}`,
          pin: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reduce]);

  return (
    <>
      {/* DESKTOP LAYOUT: GSAP Pinned Horizontal Pan Scroll (Hides on Mobile) */}
      <section ref={sectionRef} id="process" className="relative overflow-hidden max-[900px]:hidden h-screen bg-[#F5F5F7]">
        <div ref={trackRef} className="flex h-screen items-center px-32 w-max gap-16 relative" style={{ background: 'oklch(98% 0.004 82)' }}>
          
          {/* Slide 0: Heavy Editorial Title Card (500px wide) */}
          <div className="w-[500px] shrink-0 flex flex-col justify-center h-[460px]">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/[0.06] text-[10px] font-bold tracking-[0.25em] text-[#CFA64A] uppercase mb-6 w-fit select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFA64A]"></span>
              Process Flow
            </span>
            
            <h2
              className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0 mb-6 font-display select-none"
              style={{ fontSize: 'clamp(44px, 4.8vw, 72px)', letterSpacing: '-0.02em' }}>
              Renting in<br /><span className="text-[#1A1A1A]/35">Four Steps</span>
            </h2>
            
            <p className="text-[#777B82] text-[15px] leading-relaxed max-w-[42ch] mb-8 select-none">
              No forms. No counters. Just WhatsApp, your documents, and we handle the rest. Your vehicle, delivered directly to your door.
            </p>

            {/* Button-in-Button WhatsApp CTA */}
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 pl-7 pr-3.5 py-3 rounded-full bg-[#25D366] text-white font-bold text-[14px] shadow-[0_12px_32px_rgba(37,211,102,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(37,211,102,0.25)] active:scale-[0.98] group w-fit">
              <span>Start Booking</span>
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
            </a>
          </div>

          {/* Slide 1 - 4: Large Horizontal Step Panels */}
          {steps.map(({ number, title, body, icon }) => (
            <div 
              key={number} 
              className="w-[420px] shrink-0 h-[460px] flex flex-col justify-between"
            >
              {/* Double Bezel Curved Hardware Card */}
              <div className="p-[1.5px] rounded-[28px] bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/[0.05] shadow-[0_16px_40px_rgba(0,0,0,0.015)] hover:shadow-[0_24px_56px_rgba(207,166,74,0.08)] hover:border-[#CFA64A]/15 hover:bg-[#CFA64A]/[0.005] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-default h-full">
                
                {/* Inner Bezel Content container */}
                <div className="bg-white p-9 rounded-[26.5px] flex flex-col justify-between h-full shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[44px] font-bold text-[#CFA64A]/25 select-none leading-none tracking-tight">
                      {number}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-[#CFA64A]/[0.05] border border-[#CFA64A]/10 flex items-center justify-center shrink-0 transition-colors duration-500 group-hover:bg-[#CFA64A]/10">
                      {icon}
                    </div>
                  </div>

                  {/* Step Body Copy */}
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest text-[#CFA64A] font-bold uppercase mb-2 select-none">Renting Step</span>
                    <h3 className="font-bold text-[20px] text-[#1A1A1A] mb-3 leading-tight tracking-tight select-none font-display">
                      {title}
                    </h3>
                    <p className="text-[#777B82] text-[14.5px] leading-relaxed m-0 max-w-[34ch] select-none">
                      {body}
                    </p>
                  </div>

                </div>

              </div>
            </div>
          ))}
          
        </div>
      </section>

      {/* MOBILE LAYOUT: Simple vertical list stack (Hides on Desktop) */}
      <section className="min-[901px]:hidden py-24 px-6 relative" style={{ background: 'oklch(98% 0.004 82)' }}>
        <div className="max-w-[1160px] mx-auto w-full">
          
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/[0.06] text-[10px] font-bold tracking-[0.25em] text-[#CFA64A] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CFA64A]"></span>
              Process Flow
            </span>
            <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.9] m-0 mb-4 font-display text-[32px]">
              Renting in Four Steps
            </h2>
            <p className="text-[#777B82] text-[14px] leading-relaxed m-0">
              No forms. No counters. Just WhatsApp, your documents, and we handle the rest. Your vehicle, delivered to your door.
            </p>
          </div>

          {/* Staggered mobile stack cards list */}
          <div className="flex flex-col gap-5 w-full">
            {steps.map(({ number, title, body, icon }) => (
              <div 
                key={number}
                className="p-[1.5px] rounded-[20px] bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/[0.05] shadow-[0_8px_20px_rgba(0,0,0,0.01)]"
              >
                <div className="bg-white p-6 rounded-[18.5px] flex gap-5">
                  <div className="flex flex-col items-center justify-start shrink-0">
                    <span className="font-display text-[26px] font-bold text-[#CFA64A]/25 leading-none mb-2 tracking-tight">
                      {number}
                    </span>
                    <div className="w-9 h-9 rounded-full bg-[#CFA64A]/[0.05] border border-[#CFA64A]/10 flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-bold text-[15px] text-[#1A1A1A] mb-1.5 leading-tight tracking-tight">
                      {title}
                    </h3>
                    <p className="text-[#777B82] text-[13px] leading-relaxed m-0">
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile WhatsApp Action Button */}
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white font-bold text-[14px] shadow-[0_8px_24px_rgba(37,211,102,0.15)] active:scale-[0.98] mt-6 w-full"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Start Booking on WhatsApp</span>
          </a>
        </div>
      </section>
    </>
  );
}
