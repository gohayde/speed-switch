import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const WA_BOOK = 'https://wa.me/971500000000?text=Hi%2C%20I%20want%20to%20make%20a%20booking';

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
    <section className="bg-[#F5F0E8] py-28 px-6 overflow-hidden">
      <div ref={ref} className="max-w-[1160px] mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-3">
              Client Reviews
            </p>
            <h2
              className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0 mb-5"
              style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(36px,4vw,68px)' }}>
              What Our Clients<br />Are Saying
            </h2>
            <GoogleBadge />
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full border border-black/[0.12] flex items-center justify-center transition-all duration-[180ms] hover:border-[#CFA64A] hover:text-[#CFA64A] hover:-translate-y-px">
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-all duration-[180ms] hover:bg-[#CFA64A] hover:text-[#1A1A1A] hover:-translate-y-px">
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
                className={`bg-white rounded-[16px] p-8 flex flex-col gap-5 ${i === 1 ? 'shadow-[0_8px_32px_rgba(26,26,26,0.09)]' : 'shadow-[0_2px_12px_rgba(26,26,26,0.05)]'}`}>
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

        {/* Dots + CTA row */}
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-[180ms] ${i === index ? 'w-6 h-2 bg-[#CFA64A]' : 'w-2 h-2 bg-black/20'}`}
              />
            ))}
          </div>
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-[8px] bg-[#25D366] text-white font-bold text-[14px] shadow-[0_8px_22px_rgba(37,211,102,0.22)] transition-all duration-[180ms] hover:-translate-y-[1px] hover:shadow-[0_12px_30px_rgba(37,211,102,0.3)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4.5 h-4.5 shrink-0" style={{ width: 18, height: 18 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book With Confidence
          </a>
        </div>
      </div>
    </section>
  );
}
