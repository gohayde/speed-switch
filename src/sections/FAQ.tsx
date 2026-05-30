import { useState, useRef } from 'react';
const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';

const WA_FAQ = 'https://wa.me/971521430808?text=Hi%2C%20I%20have%20a%20question%20about%20renting';

const faqs = [
  {
    q: 'What documents do I need to rent?',
    a: 'A valid driving licence (international or UAE), a passport or Emirates ID, and a credit or debit card for the security deposit. Visitors from most countries are welcome — just check your licence is recognised.',
  },
  {
    q: 'How does the security deposit work?',
    a: 'A refundable hold is placed on your card at the start of your rental. It is released within 3 to 5 business days of returning the vehicle in agreed condition. The amount varies by vehicle category.',
  },
  {
    q: 'Do you deliver to my hotel or residence?',
    a: 'Yes. We deliver to any address across Dubai at no extra charge: hotels, residences, offices, and short-term rentals. Delivery to other Emirates is available on request.',
  },
  {
    q: 'Can you deliver to Dubai Airport?',
    a: 'Yes. Airport delivery is available at Dubai International (DXB) and Al Maktoum International (DWC). Timing is coordinated around your flight arrival to avoid waiting.',
  },
  {
    q: 'What insurance is included?',
    a: 'Basic comprehensive insurance is included with every rental. Additional coverage options are available at checkout. Our team can walk you through the details on WhatsApp before you book.',
  },
  {
    q: 'How quickly does booking get confirmed?',
    a: 'Most bookings are confirmed within minutes on WhatsApp. We are available throughout the day and into the evening to process your request.',
  },
];

function ExpandIcon({ open }: { open: boolean }) {
  return (
    <span
      className="shrink-0 relative w-7 h-7 flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Horizontal bar always visible */}
      <span
        className="absolute block w-3 h-px rounded-full transition-all duration-300"
        style={{ background: open ? '#CFA64A' : 'rgba(255,255,255,0.38)' }}
      />
      {/* Vertical bar rotates away when open */}
      <span
        className="absolute block w-px h-3 rounded-full transition-all duration-300"
        style={{
          background: open ? '#CFA64A' : 'rgba(255,255,255,0.38)',
          transform: open ? 'scaleY(0)' : 'scaleY(1)',
          opacity: open ? 0 : 1,
        }}
      />
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative transition-colors duration-300"
      style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
    >
      {/* Gold tint on open state — full background tint, not a side stripe */}
      <div
        className="absolute inset-0 pointer-events-none rounded-sm transition-opacity duration-300"
        style={{ background: 'rgba(207,166,74,0.04)', opacity: open ? 1 : 0 }}
      />

      <button
        onClick={() => setOpen(o => !o)}
        className="relative w-full flex items-start justify-between gap-6 py-7 text-left"
        aria-expanded={open}
      >
        <span
          className="flex-1 font-semibold leading-snug transition-colors duration-300"
          style={{ fontSize: '17px', color: open ? '#ffffff' : 'rgba(255,255,255,0.82)', textWrap: 'pretty' }}
        >
          {q}
        </span>

        <ExpandIcon open={open} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="relative text-white/68 leading-relaxed pb-7 mt-0" style={{ fontSize: '15px', lineHeight: 1.7 }}>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_EXPO } },
  };

  return (
    <section id="faq" className="pt-24 pb-32 px-6" style={{ background: 'oklch(13% 0.010 82)' }}>
      <div ref={ref} className="max-w-[1160px] mx-auto">

        {/* 2-col editorial split */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-16 items-start">

          {/* Left: sticky heading + CTA */}
          <div className="md:sticky md:top-24">
            <div className="w-10 h-px mb-7" style={{ background: 'rgba(207,166,74,0.55)' }} />
            <motion.h2
              className="font-bold uppercase text-white leading-[0.88] m-0 mb-5 font-display"
              style={{ fontSize: 'clamp(34px,3.2vw,52px)', letterSpacing: '-0.025em' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              animate={inView && !reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.65, ease: EASE_EXPO }}>
              Common<br />questions
            </motion.h2>
            <motion.p
              className="text-white/65 leading-relaxed mb-10 max-w-[32ch]"
              style={{ fontSize: '15px', lineHeight: 1.65 }}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={inView && !reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_EXPO }}>
              What renters ask most before booking with Speed Switch.
            </motion.p>

            {/* Gold accent line */}
            <div className="w-10 h-px mb-10" style={{ background: '#CFA64A', opacity: 0.4 }} />

            <motion.a
              href={WA_FAQ}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={inView && !reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.14, ease: EASE_EXPO }}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-[8px] font-bold text-[14px] transition-all duration-[250ms] hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(37,211,102,0.15)]"
              style={{ background: 'rgba(37,211,102,0.10)', border: '1px solid rgba(37,211,102,0.22)', color: '#25D366' }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ask on WhatsApp
            </motion.a>
          </div>

          {/* Right: FAQ list */}
          <motion.div
            variants={reduce ? undefined : listVariants}
            initial={reduce ? undefined : 'hidden'}
            animate={inView && !reduce ? 'visible' : undefined}
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            {faqs.map(({ q, a }, i) => (
              <motion.div key={q} variants={reduce ? undefined : itemVariants}>
                <FAQItem q={q} a={a} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
