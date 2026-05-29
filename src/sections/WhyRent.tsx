import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Sparkles,
  Zap,
  Users,
  BadgeDollarSign,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface BenefitItem {
  icon: any;
  title: string;
  body: string;
}

const benefitsList: BenefitItem[] = [
  {
    icon: Sparkles,
    title: 'Clean, Well Maintained Cars',
    body: 'Customers repeatedly mention clean, new, reliable cars in excellent condition — from luxury models to everyday rentals.',
  },
  {
    icon: Zap,
    title: 'Fast & Easy Process',
    body: 'Renters describe the process as quick, smooth, flexible, and easy from start to finish.',
  },
  {
    icon: Users,
    title: 'Helpful, Respectful Team',
    body: 'Many customers specifically praise Ahmad and the team for being helpful, kind, professional, honest, and responsive.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Fair Prices',
    body: 'Reviews mention reasonable prices, good value, and some of the best prices for car rental in Dubai.',
  },
  {
    icon: MapPin,
    title: 'Delivery Across Dubai',
    body: 'Customers mention car delivery to preferred locations, hotels, JVC/Jumeirah Circle, and airport return options.',
  },
  {
    icon: ShieldCheck,
    title: 'Deposit Returned On Time',
    body: 'Several reviews mention deposits being returned on time or the same day — a huge trust point for renters.',
  },
];

export default function WhyRent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const distance = trackRef.current!.scrollHeight - (sectionRef.current!.clientHeight * 0.72);

      gsap.to(trackRef.current, {
        y: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${distance + 400}`,
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
      {/* DESKTOP: Pinned split — left fixed, right cards scroll vertically */}
      <section
        ref={sectionRef}
        id="why-us"
        className="relative overflow-hidden max-[900px]:hidden h-screen"
        style={{ background: 'oklch(98% 0.004 82)' }}
      >
        <div className="flex h-screen">

          {/* LEFT PANEL — sticky title + car image */}
          <div className="w-[52%] shrink-0 flex flex-col justify-between h-screen px-20 pt-24 pb-16 relative overflow-hidden">

            {/* Ambient glow behind car */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#CFA64A]/[0.06] blur-[100px] rounded-full pointer-events-none" />

            {/* Label */}
            <div className="flex items-center gap-3 select-none">
              <span className="block h-px w-6 bg-[#CFA64A]" />
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#CFA64A] uppercase">Why Speed Switch</span>
            </div>

            {/* Headline */}
            <div className="relative z-10">
              <h2
                className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0 mb-5 select-none font-display"
                style={{ fontSize: 'clamp(42px, 4.2vw, 68px)', letterSpacing: '-0.02em' }}
              >
                The Rental You<br />
                <span className="text-[#1A1A1A]/30">Can Rely On</span>
              </h2>
              <p className="text-[#777B82] text-[15px] leading-relaxed max-w-[38ch] select-none">
                Real reviews. Real customers. Every benefit below comes straight from what renters said about us.
              </p>
            </div>

            {/* Bentley 3D car image */}
            <div className="relative z-10 flex items-end justify-center flex-1 mt-4">
              <img
                src="/assets/bentley.png"
                alt="Bentley — Speed Switch Fleet"
                className="w-full max-w-[560px] object-contain drop-shadow-[0_30px_60px_rgba(207,166,74,0.12)] select-none pointer-events-none"
                draggable={false}
              />
            </div>
          </div>

          {/* RIGHT PANEL — vertical card track (GSAP scrubs this) */}
          <div className="flex-1 flex items-start pt-24 pb-16 overflow-hidden relative">
            {/* Fade masks top/bottom */}
            <div className="absolute top-0 left-0 right-0 h-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, oklch(98% 0.004 82), transparent)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, oklch(98% 0.004 82), transparent)' }} />

            <div ref={trackRef} className="flex flex-col gap-5 w-full pr-20 pl-4">
              {benefitsList.map(({ icon: Icon, title, body }, idx) => (
                <div
                  key={title}
                  className="w-full shrink-0"
                >
                  <div className="p-[1.5px] rounded-[24px] bg-[#1A1A1A]/[0.03] border border-[#1A1A1A]/[0.05] shadow-[0_12px_32px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_48px_rgba(207,166,74,0.08)] hover:border-[#CFA64A]/15 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group cursor-default">
                    <div className="bg-white px-8 py-7 rounded-[22.5px] flex items-center gap-6 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">

                      {/* Number */}
                      <span className="text-[11px] font-bold text-[#CFA64A]/35 select-none w-6 shrink-0 font-display">
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Icon */}
                      <div className="w-10 h-10 rounded-full bg-[#CFA64A]/[0.06] border border-[#CFA64A]/10 flex items-center justify-center text-[#CFA64A] shrink-0 transition-colors duration-500 group-hover:bg-[#CFA64A]/12">
                        <Icon size={16} strokeWidth={1.5} />
                      </div>

                      {/* Text */}
                      <div className="flex-1">
                        <h3
                          className="font-bold text-[15px] text-[#1A1A1A] uppercase tracking-wide mb-1 select-none font-display"
                        >
                          {title}
                        </h3>
                        <p className="text-[#777B82] text-[13px] leading-relaxed m-0 select-none">
                          {body}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MOBILE: Native swipe slider fallback */}
      <section className="min-[901px]:hidden py-20 px-6 overflow-hidden relative" style={{ background: 'oklch(98% 0.004 82)' }}>
        <div className="max-w-[1160px] mx-auto relative z-10">

          <div className="mb-10 text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="block h-px w-6 bg-[#CFA64A]" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#CFA64A] uppercase">Why Speed Switch</span>
            </div>
            <h2
              className="text-[32px] font-extrabold uppercase text-[#1A1A1A] leading-tight m-0 mb-4 font-display"
            >
              The Rental You<br />Can Rely On
            </h2>
            <p className="text-[#777B82] text-[14px] leading-relaxed m-0 max-w-[36ch]">
              Real reviews. Real customers. Every benefit below comes straight from what renters said about us.
            </p>
          </div>

          {/* Car image mobile */}
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/bentley.png"
              alt="Bentley — Speed Switch Fleet"
              className="w-full max-w-[340px] object-contain drop-shadow-[0_20px_40px_rgba(207,166,74,0.12)]"
              draggable={false}
            />
          </div>

          <div
            className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory touch-pan-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {benefitsList.map(({ icon: Icon, title, body }, idx) => (
              <div
                key={title}
                className="flex-shrink-0 w-[280px] snap-start bg-white p-6 rounded-[20px] border border-black/[0.04] shadow-[0_10px_24px_rgba(26,26,26,0.02)] flex flex-col justify-between min-h-[200px] group"
              >
                <div className="flex justify-between items-start mb-5">
                  <span className="text-[11px] font-bold font-display text-[#CFA64A]/40">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-[#CFA64A]/[0.06] border border-[#CFA64A]/10 flex items-center justify-center text-[#CFA64A]">
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[14px] text-[#1A1A1A] uppercase tracking-wide mb-2 font-display">
                    {title}
                  </h3>
                  <p className="text-[#777B82] text-[12.5px] leading-relaxed m-0">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
