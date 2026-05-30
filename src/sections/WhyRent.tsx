import { motion, useReducedMotion } from 'framer-motion';

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const benefits = [
  {
    title: 'Clean & Maintained',
    body: "Every car arrives freshly cleaned and serviced. New, reliable, excellent condition — every time.",
  },
  {
    title: 'Fast Process',
    body: 'Quick from first message to keys in hand. Renters call it the smoothest rental they\'ve had.',
  },
  {
    title: 'Trusted Team',
    body: 'Ahmad and the team are named by name in reviews. Helpful, honest, professional.',
  },
  {
    title: 'Fair Prices',
    body: 'Transparent billing, no surprises. Consistently some of the best rates in Dubai.',
  },
  {
    title: 'City Delivery',
    body: 'Hotel, residence, office — delivered across Dubai. Airport returns accepted.',
  },
  {
    title: 'Deposit Returned',
    body: 'Same-day deposit returns are standard here, not an exception. It shows in every review.',
  },
];

export default function WhyRent() {
  const reduce = useReducedMotion();

  return (
    <section
      id="why-us"
      style={{ background: 'oklch(13% 0.010 82)' }}
    >
      {/* ── TOP: heading / car ─────────────────────────── */}
      <div className="max-w-[1340px] mx-auto px-8 max-[640px]:px-5">
        <div
          className="grid max-[900px]:grid-cols-1"
          style={{ gridTemplateColumns: '1fr 1.15fr' }}
        >
          {/* Left — heading */}
          <motion.div
            className="flex flex-col justify-end pt-28 max-[900px]:pt-20"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: EASE_EXPO }}
          >
            <div className="mb-8">
              <div className="w-8 h-px" style={{ background: 'rgba(207,166,74,0.6)' }} />
            </div>

            <h2
              className="font-display font-black uppercase text-white m-0 mb-8 leading-[0.86]"
              style={{
                fontSize: 'clamp(44px, 5.2vw, 80px)',
                letterSpacing: '-0.02em',
                textWrap: 'balance',
              }}
            >
              The Rental You<br />
              <span style={{ color: '#CFA64A' }}>Can Rely On</span>
            </h2>

            <p
              className="font-sans text-[16px] m-0 max-w-[38ch] max-[900px]:mb-6"
              style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.72 }}
            >
              Real reviews. Real customers. Every benefit below came directly from what renters said about us.
            </p>
          </motion.div>

          {/* Right — car */}
          <motion.div
            className="relative flex items-end justify-center max-[900px]:mt-4"
            initial={reduce ? undefined : { opacity: 0, x: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.12, ease: EASE_EXPO }}
          >
            <div
              className="absolute pointer-events-none"
              style={{
                inset: 0,
                background:
                  'radial-gradient(ellipse 65% 55% at 55% 65%, rgba(207,166,74,0.06) 0%, transparent 72%)',
              }}
            />
            <img
              src="/assets/g63-brabus.png"
              alt="G63 Brabus — Speed Switch Dubai fleet"
              className="relative w-full object-contain select-none pointer-events-none"
              style={{
                maxWidth: '720px',
                filter: 'drop-shadow(0 28px 56px rgba(207,166,74,0.20))',
                WebkitMaskImage: 'linear-gradient(to bottom, black 42%, transparent 90%)',
                maskImage: 'linear-gradient(to bottom, black 42%, transparent 90%)',
              }}
              draggable={false}
            />
          </motion.div>
        </div>
      </div>

      {/* ── BENEFITS ───────────────────────────────────── */}
      <div
        className="max-w-[1340px] mx-auto px-8 max-[640px]:px-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Featured pair — first two benefits, side by side, larger type */}
        <div className="grid grid-cols-2 max-[640px]:grid-cols-1" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {benefits.slice(0, 2).map(({ title, body }, i) => (
            <motion.div
              key={title}
              className="py-10 pr-10 max-[640px]:pr-0"
              style={i === 0 ? { borderRight: '1px solid rgba(255,255,255,0.07)' } : {}}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: EASE_EXPO }}
            >
              <div className="w-7 h-px mb-6" style={{ background: 'rgba(207,166,74,0.65)' }} />
              <h3
                className="font-display font-black uppercase text-white m-0 mb-3"
                style={{ fontSize: '20px', letterSpacing: '-0.015em' }}
              >
                {title}
              </h3>
              <p
                className="font-sans m-0 text-[15px] max-w-[38ch]"
                style={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.68 }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Compact four — tighter, 4-col desktop */}
        <div className="grid grid-cols-4 max-[760px]:grid-cols-2 max-[440px]:grid-cols-1">
          {benefits.slice(2).map(({ title, body }, i) => (
            <motion.div
              key={title}
              className="benefit-cell relative py-8"
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: EASE_EXPO }}
            >
              <div
                className="absolute top-0 left-0"
                style={{ width: '20px', height: '1px', background: 'rgba(207,166,74,0.45)' }}
              />
              <h3
                className="font-display font-black uppercase text-white m-0 mb-2"
                style={{ fontSize: '13.5px', letterSpacing: '-0.01em' }}
              >
                {title}
              </h3>
              <p
                className="font-sans m-0 text-[13px]"
                style={{ color: 'rgba(255,255,255,0.68)', lineHeight: 1.62 }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Shared CSS for compact cell gutters */}
      <style>{`
        #why-us .benefit-cell { padding-right: 28px; }
        #why-us .benefit-cell:nth-child(4n) { padding-right: 0; }
        @media (max-width: 760px) {
          #why-us .benefit-cell { padding-right: 24px; }
          #why-us .benefit-cell:nth-child(2n) { padding-right: 0; }
        }
        @media (max-width: 440px) {
          #why-us .benefit-cell { padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
