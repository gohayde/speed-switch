import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative bg-[#1A1A1A] py-32 px-6 overflow-hidden">
      {/* Warm gold glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(207,166,74,0.10), transparent 65%)' }} />

      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-white/10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 max-w-[860px] mx-auto text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-5">
          Start Your Journey
        </p>
        <h2 className="font-bold uppercase text-white leading-[0.88] mb-8"
          style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(44px,5.5vw,92px)' }}>
          Your Next Drive<br />Is One Click Away
        </h2>
        <p className="text-[#777B82] text-[17px] leading-relaxed mb-10 max-w-[560px] mx-auto">
          Browse our fleet, choose your dates, and let us handle the rest. Premium cars delivered to your door across Dubai.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a href="#"
            className="inline-flex items-center gap-4 px-9 py-4 rounded-[8px] bg-[#CFA64A] text-[#1A1A1A] font-bold text-[16px] shadow-[0_14px_32px_rgba(207,166,74,0.25)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(207,166,74,0.35)]">
            <span>Browse the Fleet</span>
            <ArrowRight size={20} strokeWidth={2} />
          </a>
          <a href="#"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-[8px] border border-white/20 text-white font-bold text-[16px] transition-all duration-[180ms] hover:border-white/40 hover:-translate-y-px">
            Contact Us
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex justify-center gap-16 mt-20 pt-10 border-t border-white/[0.06] flex-wrap gap-y-8">
          {[
            { value: '200+', label: 'Vehicles Available' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Concierge Support' },
            { value: '30min', label: 'Average Delivery' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-bold text-white leading-none mb-1"
                style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(28px,3vw,44px)' }}>
                {value}
              </p>
              <p className="text-[#555] text-[13px] font-medium tracking-wider uppercase">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
