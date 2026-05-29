import { useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
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
        style={{ background: 'oklch(100% 0 0)' }}
      >
        <div className="flex h-screen">

          {/* LEFT PANEL — sticky title + car image */}
          <div className="why-layout-option why-layout-option--poster w-[52%] shrink-0 flex flex-col h-screen relative overflow-hidden">
            <div className="absolute bottom-[-8%] left-[7%] w-[780px] h-[380px] bg-[#CFA64A]/[0.08] blur-[88px] rounded-full pointer-events-none" />
            <motion.div
              className="relative z-10"
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: EASE_EXPO }}
            >
              <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.86] m-0 select-none font-display" style={{ fontSize: 'clamp(48px, 4.8vw, 78px)', letterSpacing: '-0.02em' }}>
                The Rental You<br />
                <span className="text-[#CFA64A]">Can Rely On</span>
              </h2>
              <p className="why-layout-copy text-[#5e6370] text-[15px] leading-relaxed max-w-[38ch] select-none">
                Real reviews. Real customers. Every benefit below comes straight from what renters said about us.
              </p>
            </motion.div>
            <motion.div
              className="relative z-10 flex items-end justify-start flex-1"
              initial={reduce ? undefined : { opacity: 0, y: 36 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.14, ease: EASE_EXPO }}
            >
              <img src="/assets/bentley.png" alt="Bentley — Speed Switch Fleet" className="why-layout-car w-full object-contain drop-shadow-[0_30px_60px_rgba(207,166,74,0.14)] select-none pointer-events-none" draggable={false} />
            </motion.div>
          </div>

          {/* RIGHT PANEL — vertical card track (GSAP scrubs this) */}
          <div className="benefit-distill benefit-distill--compact flex-1 flex items-start overflow-hidden relative">
            <div className="absolute top-0 left-0 right-0 h-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to bottom, oklch(100% 0 0), transparent)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-20 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, oklch(100% 0 0), transparent)' }} />

            <div ref={trackRef} className="benefit-distill-track grid w-full">
              {benefitsList.map(({ icon: Icon, title, body }) => (
                <div key={title} className="benefit-distill-card">
                  <div className="benefit-distill-card-head">
                    <Icon size={15} strokeWidth={1.6} />
                    <h3 className="benefit-distill-title font-display">{title}</h3>
                  </div>
                  <p className="benefit-distill-body">{body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* MOBILE: Native swipe slider fallback */}
      <section className="min-[901px]:hidden py-20 px-6 overflow-hidden relative" style={{ background: 'oklch(100% 0 0)' }}>
        <div className="max-w-[1160px] mx-auto relative z-10">

          <div className="mb-10 text-left">
            <h2
              className="text-[32px] font-extrabold uppercase text-[#1A1A1A] leading-tight m-0 mb-4 font-display"
            >
              The Rental You<br />Can Rely On
            </h2>
            <p className="text-[#5e6370] text-[14px] leading-relaxed m-0 max-w-[36ch]">
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
            {benefitsList.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex-shrink-0 w-[280px] snap-start bg-[#FAFAFA] p-6 rounded-[12px] border border-black/[0.05] flex flex-col justify-between min-h-[180px] group"
              >
                <div className="flex justify-end mb-4">
                  <div className="w-9 h-9 rounded-full bg-[#CFA64A]/[0.12] flex items-center justify-center text-[#CFA64A]">
                    <Icon size={15} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[14px] text-[#1A1A1A] uppercase tracking-wide mb-2 font-display">
                    {title}
                  </h3>
                  <p className="text-[#5e6370] text-[12.5px] leading-relaxed m-0">
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
