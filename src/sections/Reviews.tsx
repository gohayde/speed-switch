import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Khalid Al-Mansouri',
    role: 'Google review',
    stars: 5,
    quote: 'The car was delivered to my hotel at 7am sharp. Immaculate condition, full tank, and the handover was exactly on time.',
    initials: 'KM',
    tag: 'Fast delivery',
  },
  {
    name: 'Sophie Laurent',
    role: 'Google review',
    stars: 5,
    quote: 'Booked everything on WhatsApp in under five minutes. The team was responsive, the price was clear, and the car was spotless.',
    initials: 'SL',
    tag: 'WhatsApp booking',
  },
  {
    name: 'James Whitmore',
    role: 'Google review',
    stars: 5,
    quote: 'The entire booking process was quick. The car arrived in perfect condition and the team stayed available during the rental.',
    initials: 'JW',
    tag: 'Clean cars',
  },
  {
    name: 'Rania Hassan',
    role: 'Google review',
    stars: 5,
    quote: 'The car, service, and price matched what was promised. Deposit timing was explained clearly before I confirmed.',
    initials: 'RH',
    tag: 'Clear pricing',
  },
  {
    name: 'David Kim',
    role: 'Google review',
    stars: 5,
    quote: 'Delivered straight to my residence in JBR. The car was clean, pricing was transparent, and there were no hidden fees.',
    initials: 'DK',
    tag: 'Delivered to door',
  },
];

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-[10px] px-4 py-3" style={{ background: 'oklch(19% 0.009 82)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-label="Google">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[14px] text-white leading-none">4.9</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="#FBBC05" className="text-[#FBBC05]" />)}
          </div>
        </div>
        <p className="text-[11px] text-white/65 mt-0.5 leading-none">Google review rating</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const reduce = useReducedMotion();

  const prev = () => setIndex(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex(i => (i + 1) % reviews.length);

  const visible = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section id="reviews" className="pt-32 pb-24 px-6 overflow-hidden" style={{ background: 'oklch(13% 0.010 82)' }}>
      <div ref={ref} className="max-w-[1160px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <h2
              className="font-bold uppercase text-white leading-[0.88] m-0 mb-5 font-display"
              style={{ fontSize: 'clamp(38px,3.6vw,58px)', letterSpacing: '-0.025em' }}>
              From our<br /><span className="text-[#CFA64A]">customers</span>
            </h2>
            <GoogleBadge />
          </div>

          {/* Counter + nav */}
          <div className="flex items-center gap-6">
            {/* Numeric counter */}
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-[#CFA64A] text-[20px] leading-none" style={{ letterSpacing: '-0.02em' }}>
                {pad(index + 1)}
              </span>
              {/* Progress segments */}
              <div className="flex gap-1.5 items-center">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to review ${i + 1}`}
                    className="relative h-[3px] rounded-full transition-all duration-[300ms] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CFA64A]"
                    style={{ width: i === index ? '28px' : '10px', background: i === index ? '#CFA64A' : 'rgba(255,255,255,0.14)' }}
                  />
                ))}
              </div>
              <span className="font-display font-black text-white/20 text-[20px] leading-none" style={{ letterSpacing: '-0.02em' }}>
                {pad(reviews.length)}
              </span>
            </div>

            <div className="flex gap-2.5">
              <button
                onClick={prev}
                aria-label="Previous review"
                className="w-11 h-11 rounded-full border border-white/[0.14] text-white/65 flex items-center justify-center transition-all duration-[200ms] hover:border-[#CFA64A] hover:text-[#CFA64A] hover:-translate-y-px">
                <ChevronLeft size={18} strokeWidth={1.8} />
              </button>
              <button
                onClick={next}
                aria-label="Next review"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-[200ms] hover:-translate-y-px"
                style={{ background: '#CFA64A', color: 'oklch(13% 0.010 82)' }}>
                <ChevronRight size={18} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
          style={{ gridTemplateRows: 'auto auto' }}>
          <AnimatePresence mode="popLayout">

            {/* Featured card — double-bezel shell */}
            <motion.div
              key={`feat-${visible[0].name}-${index}`}
              initial={reduce ? undefined : { opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: 16 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="md:row-span-2"
              style={{ padding: '5px', borderRadius: '20px', background: 'rgba(207,166,74,0.04)' }}
            >
            <div
              className="relative rounded-[15px] p-10 flex flex-col justify-between gap-8 h-full overflow-hidden"
              style={{ background: 'oklch(17% 0.009 82)', border: '1px solid rgba(207,166,74,0.18)', boxShadow: 'inset 0 1px 0 rgba(207,166,74,0.12)' }}>

              {/* Top gold accent */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 5%, rgba(207,166,74,0.7) 40%, rgba(207,166,74,0.7) 60%, transparent 95%)' }} />

              {/* Ambient gold glow bottom-left */}
              <div className="absolute bottom-0 left-0 w-[240px] h-[200px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(207,166,74,0.07), transparent 70%)' }} />

              <div className="relative z-10">
                {/* Stars + tag row */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1">
                    {Array.from({ length: visible[0].stars }).map((_, s) => (
                      <Star key={s} size={14} fill="#CFA64A" className="text-[#CFA64A]" />
                    ))}
                  </div>
                  <span
                    className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#CFA64A] px-3 py-1.5 rounded-[5px]"
                    style={{ background: 'rgba(207,166,74,0.10)', border: '1px solid rgba(207,166,74,0.22)' }}
                  >
                    {visible[0].tag}
                  </span>
                </div>

                <p className="text-white/88 font-medium leading-[1.65] m-0" style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', textWrap: 'pretty' }}>
                  "{visible[0].quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="relative z-10 flex items-center gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div
                  className="w-12 h-12 rounded-[10px] flex items-center justify-center text-[#1A1A1A] text-[13px] font-black shrink-0"
                  style={{ background: '#CFA64A' }}
                >
                  {visible[0].initials}
                </div>
                <div>
                  <p className="font-bold text-[15px] text-white leading-none mb-1.5">{visible[0].name}</p>
                  <p className="text-[12px] text-white/65 leading-none">{visible[0].role}</p>
                </div>
              </div>
            </div>
            </motion.div>

            {/* Compact card 2 */}
            <motion.div
              key={`b-${visible[1].name}-${index}`}
              initial={reduce ? undefined : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -16 }}
              transition={{ duration: 0.4, delay: 0.06, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative rounded-[14px] p-7 flex flex-col gap-4 overflow-hidden"
              style={{ background: 'oklch(19% 0.009 82)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: visible[1].stars }).map((_, s) => (
                    <Star key={s} size={12} fill="#CFA64A" className="text-[#CFA64A]" />
                  ))}
                </div>
                <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#CFA64A] px-2.5 py-1 rounded-[4px]" style={{ background: 'rgba(207,166,74,0.10)', border: '1px solid rgba(207,166,74,0.18)' }}>
                  {visible[1].tag}
                </span>
              </div>
              <p className="text-white/72 text-[14px] leading-relaxed m-0 flex-1">"{visible[1].quote}"</p>
              <div className="flex items-center gap-3 pt-3.5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-9 h-9 rounded-[8px] flex items-center justify-center text-[#1A1A1A] text-[10px] font-black shrink-0" style={{ background: '#CFA64A' }}>
                  {visible[1].initials}
                </div>
                <div>
                  <p className="font-bold text-[13px] text-white leading-none mb-1">{visible[1].name}</p>
                  <p className="text-[11px] text-white/65 leading-none">{visible[1].role}</p>
                </div>
              </div>
            </motion.div>

            {/* Compact card 3 */}
            <motion.div
              key={`c-${visible[2].name}-${index}`}
              initial={reduce ? undefined : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? undefined : { opacity: 0, x: -16 }}
              transition={{ duration: 0.4, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative rounded-[14px] p-7 flex flex-col gap-4 overflow-hidden"
              style={{ background: 'oklch(19% 0.009 82)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: visible[2].stars }).map((_, s) => (
                    <Star key={s} size={12} fill="#CFA64A" className="text-[#CFA64A]" />
                  ))}
                </div>
                <span className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#CFA64A] px-2.5 py-1 rounded-[4px]" style={{ background: 'rgba(207,166,74,0.10)', border: '1px solid rgba(207,166,74,0.18)' }}>
                  {visible[2].tag}
                </span>
              </div>
              <p className="text-white/72 text-[14px] leading-relaxed m-0 flex-1">"{visible[2].quote}"</p>
              <div className="flex items-center gap-3 pt-3.5" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-9 h-9 rounded-[8px] flex items-center justify-center text-[#1A1A1A] text-[10px] font-black shrink-0" style={{ background: '#CFA64A' }}>
                  {visible[2].initials}
                </div>
                <div>
                  <p className="font-bold text-[13px] text-white leading-none mb-1">{visible[2].name}</p>
                  <p className="text-[11px] text-white/65 leading-none">{visible[2].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
