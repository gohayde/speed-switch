import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const WA_DELIVERY = 'https://wa.me/971500000000?text=Hi%2C%20I%20would%20like%20to%20request%20delivery';

const zones = [
  { name: 'Dubai Marina', emoji: '🌊' },
  { name: 'Downtown Dubai', emoji: '🏙️' },
  { name: 'Business Bay', emoji: '🏢' },
  { name: 'JBR Beach', emoji: '🏖️' },
  { name: 'Palm Jumeirah', emoji: '🌴' },
  { name: 'Dubai Mall', emoji: '🛍️' },
  { name: 'Dubai Airport', emoji: '✈️' },
  { name: 'Hotels & Residences', emoji: '🏨' },
  { name: 'DIFC', emoji: '💼' },
  { name: 'Jumeirah', emoji: '🏡' },
  { name: 'Dubai Hills', emoji: '⛳' },
  { name: 'City Walk', emoji: '🌿' },
];

export default function DubaiDelivery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="pt-32 pb-36 px-6 overflow-hidden relative" style={{ background: 'oklch(15% 0.010 82)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, oklch(72% 0.13 76 / 0.09), transparent 65%)' }} />

      <div ref={ref} className="max-w-[1160px] mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}>
            <div className="flex items-baseline gap-4 mb-5">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#CFA64A]/60 uppercase font-[family-name:'Space_Grotesk',Arial,sans-serif]">01</span>
              <span className="text-[11px] font-bold tracking-[0.22em] text-white/40 uppercase">Delivery Coverage</span>
            </div>
            <h2
              className="font-bold uppercase text-white leading-[0.84] m-0 mb-6"
              style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(52px,5.2vw,84px)' }}>
              We Come<br />To You
            </h2>
            <p className="text-[#777B82] text-[16px] leading-relaxed mb-8 max-w-[65ch]">
              Across every district in Dubai, we deliver your chosen vehicle directly to your door. Tourists and residents alike: no queues, no counters, just your car exactly where you need it.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-[rgba(207,166,74,0.12)] flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-[#CFA64A]" strokeWidth={1.8} />
              </div>
              <span className="text-white font-semibold text-[15px]">Free delivery across all Dubai zones</span>
            </div>

            <a
              href={WA_DELIVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-[8px] bg-[#CFA64A] text-[#1A1A1A] font-bold text-[15px] shadow-[0_10px_28px_rgba(207,166,74,0.25)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(207,166,74,0.35)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Request Delivery
            </a>
          </motion.div>

          {/* Right: zone grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}>
            <div className="grid grid-cols-3 gap-2.5">
              {zones.map((zone, i) => (
                <motion.div
                  key={zone.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.18 + i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
                  className="flex flex-col gap-2 bg-white/[0.04] border border-white/[0.08] rounded-[10px] px-3 py-3.5 hover:border-[#CFA64A]/40 hover:bg-[rgba(207,166,74,0.04)] transition-colors duration-[180ms] cursor-default">
                  <span className="text-[16px] leading-none">{zone.emoji}</span>
                  <span className="text-white/75 text-[12px] font-medium leading-tight">{zone.name}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-[#444] text-[12px] mt-4 leading-relaxed">
              Also available in Sharjah, Abu Dhabi, and surrounding Emirates on request.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
