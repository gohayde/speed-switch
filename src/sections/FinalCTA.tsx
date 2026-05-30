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
    <section className="relative pt-40 pb-44 px-6 overflow-hidden" style={{
        background: 'oklch(12% 0.008 82)',
        backgroundImage: 'url(/assets/fleet-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'luminosity',
      }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'oklch(12% 0.008 82 / 0.84)' }} />
      {/* Centered gold ambient glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(207,166,74,0.06), transparent 62%)' }} />

      {/* Top rule */}
      <div className="absolute top-0 inset-x-0 flex items-start justify-center h-px">
        <div className="w-full max-w-[900px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(207,166,74,0.24) 30%, rgba(207,166,74,0.24) 70%, transparent)', height: '1px' }} />
      </div>
      {/* Vertical center accent drop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16" style={{ background: 'linear-gradient(to bottom, rgba(207,166,74,0.40), transparent)' }} />

      <motion.div
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? undefined : 'hidden'}
        whileInView={reduce ? undefined : 'visible'}
        viewport={{ once: true, margin: '-80px' }}
        className="relative z-10 max-w-[820px] mx-auto text-center">

        <motion.h2
          variants={reduce ? undefined : {
            hidden: { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 16 },
            visible: { clipPath: 'inset(0 0 0% 0)', opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_EXPO } },
          }}
          className="font-bold uppercase text-white leading-[0.86] mb-8 font-display"
          style={{ fontSize: 'clamp(52px, 6vw, 92px)', letterSpacing: '-0.025em', textWrap: 'balance' }}>
          Your car.<br /><span className="text-[#CFA64A]">Today.</span>
        </motion.h2>

        <motion.p
          variants={reduce ? undefined : {
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_EXPO } },
          }}
          className="text-white/72 leading-relaxed mb-12 max-w-[52ch] mx-auto"
          style={{ fontSize: '17px', lineHeight: 1.7, textWrap: 'pretty' }}>
          Message us and receive a response fast. Premium cars delivered across Dubai, with clear pricing and your deposit confirmed upfront.
        </motion.p>

        <motion.div
          variants={reduce ? undefined : {
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EXPO } },
          }}
          className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <a
            href={WA_NOW}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 pl-7 pr-3 py-3 rounded-full bg-[#25D366] text-white font-bold text-[15px] shadow-[0_14px_40px_rgba(37,211,102,0.22)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:shadow-[0_20px_48px_rgba(37,211,102,0.32)] active:scale-[0.98] group">
            <span>Book on WhatsApp</span>
            <span className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
          </a>
          <a
            href={FLEET_LINK}
            className="inline-flex items-center gap-3 pl-6 pr-3 py-3 rounded-full font-bold text-[15px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-px active:scale-[0.98] group"
            style={{ border: '1px solid rgba(207,166,74,0.28)', color: 'rgba(207,166,74,0.80)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(207,166,74,0.55)'; (e.currentTarget as HTMLElement).style.color = '#CFA64A'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(207,166,74,0.28)'; (e.currentTarget as HTMLElement).style.color = 'rgba(207,166,74,0.80)'; }}>
            <span>View fleet</span>
            <span className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105 flex-shrink-0" style={{ background: 'rgba(207,166,74,0.10)' }}>
              <ArrowRight size={14} strokeWidth={2} />
            </span>
          </a>
        </motion.div>

        {/* Contact line */}
        <motion.p
          variants={reduce ? undefined : {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2, ease: EASE_EXPO } },
          }}
          className="text-white/25 text-[13px]">
          Available daily, delivered anywhere in Dubai
        </motion.p>
      </motion.div>
    </section>
  );
}
