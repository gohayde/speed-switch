import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Khalid Al-Mansouri',
    role: 'Business Executive, Dubai',
    stars: 5,
    quote: 'The Rolls-Royce Ghost was delivered to my hotel at 7am sharp. Immaculate condition, full tank. Speed Switch sets a new standard for luxury rentals in the region.',
    initials: 'KM',
  },
  {
    name: 'Sophie Laurent',
    role: 'Event Planner, Paris',
    stars: 5,
    quote: 'I needed a fleet for a high-profile event. Speed Switch handled everything — delivery coordination, extensions, last-minute changes. Flawless from start to finish.',
    initials: 'SL',
  },
  {
    name: 'James Whitmore',
    role: 'Entrepreneur, London',
    stars: 5,
    quote: 'Booked a Lamborghini Urus for a week. The entire process took four minutes online. Car arrived in perfect condition and the team was on call the whole time.',
    initials: 'JW',
  },
  {
    name: 'Rania Hassan',
    role: 'Architect, Cairo',
    stars: 5,
    quote: 'I have rented from five companies in Dubai. Speed Switch is the only one where the car, the service, and the price all matched the premium promise. I will not go elsewhere.',
    initials: 'RH',
  },
  {
    name: 'David Kim',
    role: 'Tech Founder, Seoul',
    stars: 5,
    quote: 'The online booking is genuinely the best I have used. Picked the car, got the confirmation, done. The Bentley Bentayga made every meeting more memorable.',
    initials: 'DK',
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const prev = () => setIndex(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex(i => (i + 1) % reviews.length);

  const visible = [
    reviews[(index) % reviews.length],
    reviews[(index + 1) % reviews.length],
    reviews[(index + 2) % reviews.length],
  ];

  return (
    <section className="bg-[#F5F0E8] py-28 px-6 overflow-hidden">
      <div ref={ref} className="max-w-[1160px] mx-auto">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-3">
              Client Reviews
            </p>
            <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0"
              style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(36px,4vw,68px)' }}>
              What Our Clients<br />Are Saying
            </h2>
          </div>
          <div className="flex gap-3">
            <button onClick={prev}
              className="w-12 h-12 rounded-full border border-black/[0.12] flex items-center justify-center transition-all duration-[180ms] hover:border-[#CFA64A] hover:text-[#CFA64A] hover:-translate-y-px">
              <ChevronLeft size={20} strokeWidth={1.8} />
            </button>
            <button onClick={next}
              className="w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center transition-all duration-[180ms] hover:bg-[#CFA64A] hover:text-[#1A1A1A] hover:-translate-y-px">
              <ChevronRight size={20} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          <AnimatePresence mode="popLayout">
            {visible.map((review, i) => (
              <motion.div key={`${review.name}-${index}`}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
                className={`bg-white rounded-[16px] p-8 flex flex-col gap-5 ${i === 1 ? 'shadow-[0_8px_32px_rgba(26,26,26,0.09)]' : 'shadow-[0_2px_12px_rgba(26,26,26,0.05)]'}`}>
                <div className="flex gap-1">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <Star key={s} size={14} fill="#CFA64A" className="text-[#CFA64A]" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] text-[15px] leading-relaxed m-0 flex-1">"{review.quote}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-black/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-white text-[12px] font-bold shrink-0">
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

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)}
              className={`rounded-full transition-all duration-[180ms] ${i === index ? 'w-6 h-2 bg-[#CFA64A]' : 'w-2 h-2 bg-black/20'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
