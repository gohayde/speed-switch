import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const zones = [
  'Downtown Dubai',
  'Dubai Marina',
  'Palm Jumeirah',
  'JBR Beach',
  'Business Bay',
  'DIFC',
  'Jumeirah',
  'Deira',
  'Dubai Hills',
  'Al Quoz',
  'Dubai Airport',
  'Dubai Mall',
];

export default function DubaiDelivery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#1A1A1A] py-28 px-6 overflow-hidden relative">
      {/* Gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(207,166,74,0.07), transparent 65%)' }} />

      <div ref={ref} className="max-w-[1160px] mx-auto relative z-10">
        <div className="grid grid-cols-2 gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-12">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-4">
              Delivery Coverage
            </p>
            <h2 className="font-bold uppercase text-white leading-[0.88] m-0 mb-6"
              style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(36px,3.8vw,62px)' }}>
              We Come<br />To You
            </h2>
            <p className="text-[#777B82] text-[16px] leading-relaxed mb-8 max-w-[420px]">
              Across every district in Dubai, we deliver your chosen vehicle directly to your door. No queues, no counters — just your car, exactly where you need it.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(207,166,74,0.12)] flex items-center justify-center">
                <MapPin size={18} className="text-[#CFA64A]" strokeWidth={1.8} />
              </div>
              <span className="text-white font-bold text-[15px]">Free delivery across all Dubai zones</span>
            </div>
          </motion.div>

          {/* Right: zone grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}>
            <div className="grid grid-cols-3 gap-3">
              {zones.map((zone, i) => (
                <motion.div key={zone}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.18 + i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
                  className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-[8px] px-3 py-3 hover:border-[#CFA64A]/40 hover:bg-[rgba(207,166,74,0.05)] transition-colors duration-[180ms]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#CFA64A] shrink-0" />
                  <span className="text-white/80 text-[13px] font-medium leading-tight">{zone}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-[#555] text-[13px] mt-4 leading-relaxed">
              And all surrounding Emirates on request.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
