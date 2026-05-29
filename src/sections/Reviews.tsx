import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Khalid Al-Mansouri',
    role: 'Business Executive, Dubai',
    stars: 5,
    quote: 'The car was delivered to my hotel at 7am sharp. Immaculate condition, full tank. Speed Switch sets a new standard for car rentals in Dubai.',
    initials: 'KM',
    tag: 'Fast delivery',
  },
  {
    name: 'Sophie Laurent',
    role: 'Event Planner, Paris',
    stars: 5,
    quote: 'Booked everything on WhatsApp in under five minutes. The team were incredibly responsive and the car was spotless. Smooth from start to finish.',
    initials: 'SL',
    tag: 'WhatsApp booking',
  },
  {
    name: 'James Whitmore',
    role: 'Entrepreneur, London',
    stars: 5,
    quote: 'The entire booking process took four minutes. Car arrived in perfect condition and the team was on call the whole week. Will not go anywhere else in Dubai.',
    initials: 'JW',
    tag: 'Clean cars',
  },
  {
    name: 'Rania Hassan',
    role: 'Architect, Cairo',
    stars: 5,
    quote: 'I have rented from five companies in Dubai. Speed Switch is the only one where the car, the service, and the price all matched what was promised. Highly recommend.',
    initials: 'RH',
    tag: 'Clear pricing',
  },
  {
    name: 'David Kim',
    role: 'Tech Founder, Seoul',
    stars: 5,
    quote: 'Delivered straight to my residence in JBR. The car was beautiful and clean. Pricing was transparent — no hidden fees. Exactly what you want when travelling.',
    initials: 'DK',
    tag: 'Delivered to door',
  },
];

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-3 bg-white rounded-[12px] px-4 py-3 shadow-[0_4px_18px_rgba(26,26,26,0.09)]">
      <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-label="Google">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-bold text-[14px] text-[#1A1A1A] leading-none">4.9</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(s => <Star key={s} size={10} fill="#FBBC05" className="text-[#FBBC05]" />)}
          </div>
        </div>
        <p className="text-[11px] text-[#777B82] mt-0.5 leading-none">Google Reviews</p>
      </div>
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const prev = () => setIndex(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex(i => (i + 1) % reviews.length);

  const visible = [
    reviews[index % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section id="reviews" className="pt-20 pb-24 px-6 overflow-hidden" style={{ background: 'oklch(13% 0.010 82)' }}>
      <div ref={ref} className="max-w-[1160px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <h2
              className="font-bold uppercase text-white leading-[0.88] m-0 mb-5 font-display"
              style={{ fontSize: 'clamp(38px,3.6vw,58px)' }}>
              What Our Clients<br /><span className="text-[#CFA64A]">Are Saying</span>
            </h2>
            <GoogleBadge />
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full border border-white/[0.15] text-white flex items-center justify-center transition-all duration-[180ms] hover:border-[#CFA64A] hover:text-[#CFA64A] hover:-translate-y-px">
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-12 h-12 rounded-full bg-[#CFA64A] text-[#1A1A1A] flex items-center justify-center transition-all duration-[180ms] hover:bg-[#b8913d] hover:-translate-y-px">
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid grid-cols-3 gap-5 mb-8 max-[900px]:grid-cols-1">
          <AnimatePresence mode="popLayout">
            {visible.map((review, i) => (
              <motion.div
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
                className={`bg-white rounded-[16px] p-8 flex flex-col gap-5 ${i === 1 ? 'shadow-[0_12px_48px_rgba(0,0,0,0.5)]' : 'shadow-[0_4px_20px_rgba(0,0,0,0.3)]'}`}>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: review.stars }).map((_, s) => (
                      <Star key={s} size={13} fill="#CFA64A" className="text-[#CFA64A]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#CFA64A] bg-[rgba(207,166,74,0.1)] px-2.5 py-1 rounded-[5px]">
                    {review.tag}
                  </span>
                </div>
                <p className="text-[#1A1A1A] text-[15px] leading-relaxed m-0 flex-1">"{review.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-[11px] font-bold shrink-0">
                    {review.initials}
                  </div>
                  <div>
                    <p className="font-bold text-[14px] text-[#1A1A1A] leading-none mb-1">{review.name}</p>
                    <p className="text-[12px] text-[#AAADB3] leading-none">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination dots */}
        <div className="flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`rounded-full transition-all duration-[180ms] ${i === index ? 'w-6 h-2 bg-[#CFA64A]' : 'w-2 h-2 bg-white/20'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
