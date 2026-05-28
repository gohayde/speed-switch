import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { LayoutGrid, MessageCircle, FileCheck, Car } from 'lucide-react';

const WA_BOOK = 'https://wa.me/971500000000?text=Hi%2C%20I%20want%20to%20start%20a%20booking';

const steps = [
  {
    number: '01',
    icon: LayoutGrid,
    title: 'Choose Your Car',
    body: 'Browse our curated fleet. Pick the model, category, and rental duration that fits your plans.',
  },
  {
    number: '02',
    icon: MessageCircle,
    title: 'Send an Inquiry on WhatsApp',
    body: 'Message us the car and dates. Our team responds fast — usually within minutes.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Confirm Documents & Timing',
    body: 'Share your licence and passport. We lock in the delivery time and address with you.',
  },
  {
    number: '04',
    icon: Car,
    title: 'Car Delivered to You',
    body: 'Your vehicle arrives clean, fueled, and ready. Sign a quick agreement and drive.',
  },
];

export default function RentalProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pt-20 pb-28 px-6" style={{ background: 'oklch(97.5% 0.007 82)' }}>
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center mb-20">
          <p className="text-[11px] font-light tracking-[0.28em] text-[#999] uppercase mb-4">
            How It Works
          </p>
          <h2
            className="font-bold uppercase text-[#1A1A1A] leading-[0.9] m-0 mb-5"
            style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(32px,3.2vw,52px)' }}>
            Renting in Four<br />Simple Steps
          </h2>
          <p className="text-[#777B82] text-[16px] leading-relaxed max-w-[65ch] mx-auto">
            No forms. No counters. Just WhatsApp, your documents, and we handle the rest.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-4 gap-0 mb-14 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {steps.map(({ number, icon: Icon, title, body }, i) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative pl-6 pr-8 pt-0 pb-10 max-[900px]:pb-8 max-[560px]:pb-6">
              {/* Bold vertical track */}
              <div className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: i === 0 ? '#CFA64A' : 'rgba(26,26,26,0.1)' }} />
              {/* Step number — large, typographic */}
              <div className="flex items-baseline gap-3 mb-5">
                <span
                  className="font-bold leading-none text-[#CFA64A] select-none"
                  style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(42px,3.8vw,58px)', opacity: 0.18 }}>
                  {number}
                </span>
                <Icon size={16} strokeWidth={1.6} className="text-[#CFA64A] mb-1 shrink-0" />
              </div>
              <h3 className="font-bold text-[17px] text-[#1A1A1A] mb-2 leading-tight">{title}</h3>
              <p className="text-[#777B82] text-[14px] leading-relaxed m-0 max-w-[52ch]">{body}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-[8px] bg-[#25D366] text-white font-bold text-[15px] shadow-[0_10px_28px_rgba(37,211,102,0.25)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(37,211,102,0.35)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Booking on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
}
