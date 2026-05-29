import { motion, useReducedMotion } from 'framer-motion';
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
import { ArrowRight } from 'lucide-react';

const WA_NOW = 'https://wa.me/971521430808?text=Hi%2C%20I%20want%20to%20book%20a%20car';
const FLEET_LINK = '#vehicles';

export default function FinalCTA() {
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="relative pt-32 pb-36 px-6 overflow-hidden" style={{
        background: 'oklch(13% 0.010 82)',
        backgroundImage: 'url(/assets/fleet-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, oklch(72% 0.13 76 / 0.10), transparent 65%)' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20" style={{ background: 'oklch(100% 0 0 / 0.10)' }} />

      <motion.div
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? undefined : 'hidden'}
        whileInView={reduce ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-[860px] mx-auto text-center">

        <motion.h2
          variants={reduce ? undefined : {
            hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 16 },
            visible: { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, transition: { duration: 0.72, ease: EASE_EXPO } },
          }}
          className="font-bold uppercase text-white leading-[0.86] mb-7 font-display"
          style={{ fontSize: 'clamp(50px,5.5vw,92px)' }}>
          Your Car.<br />Today.
        </motion.h2>

        <motion.p
          variants={reduce ? undefined : {
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_EXPO } },
          }}
          className="text-white/65 text-[17px] leading-relaxed mb-10 max-w-[65ch] mx-auto">
          Message us now and we respond fast. Premium cars delivered across Dubai with clear pricing, confirmed deposits, and standard mileage included.
        </motion.p>

        <motion.div
          variants={reduce ? undefined : {
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
          }}
          className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={WA_NOW}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-[8px] bg-[#25D366] text-white font-bold text-[16px] shadow-[0_14px_32px_rgba(37,211,102,0.28)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(37,211,102,0.38)]">
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20, flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Book on WhatsApp
          </a>
          <a
            href={FLEET_LINK}
            className="inline-flex items-center gap-3 px-9 py-4 rounded-[8px] border border-white/20 text-white font-bold text-[16px] transition-all duration-[180ms] hover:border-[#CFA64A] hover:text-[#CFA64A] hover:-translate-y-px">
            View Fleet
            <ArrowRight size={18} strokeWidth={2} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
