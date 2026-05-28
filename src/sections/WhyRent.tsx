import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Zap, MapPin, Clock, Star, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Fully Insured Fleet',
    body: 'Every vehicle comes with comprehensive coverage so you drive with total peace of mind.',
  },
  {
    icon: Zap,
    title: 'Instant Confirmation',
    body: 'Book in minutes. Your reservation is confirmed immediately — no waiting, no calls.',
  },
  {
    icon: MapPin,
    title: 'Delivery Anywhere in Dubai',
    body: 'We bring the car to your hotel, residence, or office — across all of Dubai and beyond.',
  },
  {
    icon: Clock,
    title: 'Flexible Duration',
    body: 'Daily, weekly, or monthly rentals. Extend or shorten on the fly without penalty.',
  },
  {
    icon: Star,
    title: 'Curated Premium Fleet',
    body: 'Only the finest vehicles make our roster. Lamborghini, Rolls-Royce, Bentley, and more.',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge Support',
    body: 'A dedicated team available around the clock — for any question, any hour.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function WhyRent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#F8F7F3] py-24 px-6">
      <div className="max-w-[1160px] mx-auto">
        <div className="mb-16">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-3">
            Why Speed Switch
          </p>
          <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0"
            style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(38px,4vw,68px)' }}>
            The Standard<br />You Deserve
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid gap-px bg-black/[0.07]"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {reasons.map(({ icon: Icon, title, body }) => (
            <motion.div key={title} variants={item}
              className="group bg-[#F8F7F3] p-10 flex flex-col gap-5 transition-colors duration-[180ms] hover:bg-[#FDFCF8]">
              <div className="w-12 h-12 rounded-[10px] border border-black/[0.1] flex items-center justify-center transition-colors duration-[180ms] group-hover:border-[#CFA64A] group-hover:bg-[rgba(207,166,74,0.06)]">
                <Icon size={22} strokeWidth={1.7} className="text-[#1A1A1A] group-hover:text-[#CFA64A] transition-colors duration-[180ms]" />
              </div>
              <div>
                <h3 className="font-bold text-[18px] text-[#1A1A1A] mb-2 leading-tight">{title}</h3>
                <p className="text-[#777B82] text-[15px] leading-relaxed m-0">{body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
