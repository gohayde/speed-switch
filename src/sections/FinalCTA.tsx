import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const WA_NOW = 'https://wa.me/971523660709?text=Hi%2C%20I%20want%20to%20book%20a%20car';
const FLEET_LINK = '#vehicles';

export default function FinalCTA() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  };

  const child = (delay = 0) =>
    reduce
      ? undefined
      : {
          hidden: { opacity: 0, y: 18 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: EASE_EXPO, delay },
          },
        };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url("/assets/cta-bg-lamborghini.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100svh',
        paddingBlock: 'clamp(64px, 10vh, 120px)',
        paddingInline: '24px',
      }}
    >
      {/* Dark overlay to guarantee absolute text legibility while revealing the supercar background */}
      <div className="absolute inset-0 bg-black/70 z-0 pointer-events-none" />

      {/* Gold hairline separator at top */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none z-10"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #F7BF35 30%, #F7BF35 70%, transparent 100%)',
          opacity: 0.35,
        }}
      />

      {/* Ambient gold glow — behind content */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(247,191,53,0.12) 0%, transparent 70%)',
        }}
      />

      <motion.div
        variants={reduce ? undefined : containerVariants}
        initial={reduce ? undefined : 'hidden'}
        whileInView={reduce ? undefined : 'visible'}
        viewport={{ once: true, margin: '-100px' }}
        className="relative z-10 text-center max-w-[760px] mx-auto"
      >
        {/* Headline */}
        <motion.h2
          variants={child(0)}
          className="font-black uppercase text-white leading-[0.88] font-display"
          style={{
            fontSize: 'clamp(52px, 6vw, 92px)',
            letterSpacing: '-0.025em',
            textWrap: 'balance',
            marginBottom: '1.5rem',
          }}
        >
          {t('cta_title_1')}
          <br />
          <span style={{ color: '#F7BF35' }}>{t('cta_title_2')}</span>
        </motion.h2>

        {/* Subline */}
        <motion.p
          variants={child(0.05)}
          className="font-sans font-medium"
          style={{
            fontSize: 'clamp(15px, 1.6vw, 18px)',
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.01em',
            marginBottom: 'clamp(36px, 5vh, 56px)',
            maxWidth: '46ch',
            marginInline: 'auto',
            lineHeight: 1.6,
          }}
        >
          {t('cta_paragraph')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={child(0.1)}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href={WA_NOW}
            target="_blank"
            rel="noopener noreferrer"
            className="speed-cta"
          >
            <span>{t('cta_book_whatsapp')}</span>
            <span className="speed-cta-arrow">
              <ArrowRight size={13} strokeWidth={2.2} />
            </span>
          </a>

          <a href={FLEET_LINK} className="speed-cta-secondary-dark">
            <span>{t('cta_view_fleet')}</span>
            <span className="speed-cta-secondary-dark-arrow">
              <ArrowRight size={13} strokeWidth={2.2} />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

