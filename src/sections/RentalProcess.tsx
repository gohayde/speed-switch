import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, CalendarDays, Car, Key } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse & Select',
    body: 'Explore our curated fleet. Filter by category, brand, or availability to find your perfect match.',
  },
  {
    number: '02',
    icon: CalendarDays,
    title: 'Choose Dates',
    body: 'Pick your rental window — daily, weekly, or monthly. Flexible start times, zero hassle.',
  },
  {
    number: '03',
    icon: Car,
    title: 'Delivery Arranged',
    body: 'We confirm delivery time and location. Your car arrives spotless, fueled, and ready.',
  },
  {
    number: '04',
    icon: Key,
    title: 'Drive Away',
    body: 'Sign a quick digital agreement and the keys are yours. No hidden fees, no surprises.',
  },
];

export default function RentalProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#F8F7F3] py-28 px-6">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center mb-18">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0"
            style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(36px,4vw,68px)' }}>
            Ready in Four<br />Simple Steps
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-4 gap-0 relative max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {/* Connector line */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-black/[0.08] max-[900px]:hidden" />

          {steps.map(({ number, icon: Icon, title, body }, i) => (
            <motion.div key={number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative flex flex-col items-center text-center px-8 pt-2">
              {/* Step circle */}
              <div className="relative z-10 w-[104px] h-[104px] rounded-full bg-white border border-black/[0.09] flex flex-col items-center justify-center mb-7 shadow-[0_4px_16px_rgba(26,26,26,0.06)]">
                <Icon size={26} strokeWidth={1.6} className="text-[#CFA64A] mb-1" />
                <span className="text-[11px] font-bold text-[#AAADB3] tracking-wider">{number}</span>
              </div>
              <h3 className="font-bold text-[17px] text-[#1A1A1A] mb-2 leading-tight">{title}</h3>
              <p className="text-[#777B82] text-[14px] leading-relaxed m-0 max-w-[200px]">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
