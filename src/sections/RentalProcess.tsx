import { motion, useReducedMotion } from 'framer-motion';
import { Car, MessageCircle, Truck, KeyRound } from 'lucide-react';

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const WA_BOOK = 'https://wa.me/971521430808?text=Hi%2C%20I%20want%20to%20start%20a%20booking';

const steps = [
  {
    n: '01',
    Icon: Car,
    title: 'Choose Your Car',
    body: 'Pick from luxury, sports, SUV, or everyday options. Browse the fleet, then send us a message.',
  },
  {
    n: '02',
    Icon: MessageCircle,
    title: 'Confirm on WhatsApp',
    body: 'Share your dates, delivery address, and documents. The team confirms everything in minutes.',
  },
  {
    n: '03',
    Icon: Truck,
    title: 'Delivered to You',
    body: 'Your car arrives at your door in Dubai. Hotels, homes, offices — anywhere in the city.',
  },
  {
    n: '04',
    Icon: KeyRound,
    title: 'Drive, Return Easily',
    body: 'Clean car, support on standby. Return is as smooth as the pickup. Deposit back the same day.',
  },
];

export default function RentalProcess() {
  const reduce = useReducedMotion();

  return (
    <section
      id="process"
      style={{ background: 'oklch(13% 0.010 82)' }}
    >
      {/* Thin gold top divider to mark section entry */}
      <div
        className="max-w-[1340px] mx-auto px-8 max-[640px]:px-5"
        style={{ borderTop: '1px solid rgba(207,166,74,0.14)' }}
      />

      <div className="max-w-[1340px] mx-auto px-8 max-[640px]:px-5 pt-24 pb-0 max-[900px]:pt-16">

        {/* ── Section header ─────────────────────────── */}
        <motion.div
          className="mb-20 max-[640px]:mb-12 flex items-end justify-between gap-8 max-[760px]:flex-col max-[760px]:items-start"
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_EXPO }}
        >
          <div>
            <h2
              className="font-display font-black uppercase text-white m-0 leading-[0.86]"
              style={{
                fontSize: 'clamp(40px, 4.8vw, 76px)',
                letterSpacing: '-0.02em',
              }}
            >
              Renting in<br />
              <span style={{ color: '#CFA64A' }}>Four Steps</span>
            </h2>
          </div>
          <p
            className="font-sans text-[15px] m-0 max-w-[34ch] flex-shrink-0"
            style={{ color: 'rgba(255,255,255,0.70)', lineHeight: 1.7 }}
          >
            No counters, no forms. WhatsApp us and we deliver the car directly to you — anywhere in Dubai.
          </p>
        </motion.div>

        {/* ── Steps ──────────────────────────────────── */}
        <div
          className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          {steps.map(({ n, Icon, title, body }, i) => (
            <motion.div
              key={n}
              className="step-col relative pt-10 pb-14"
              style={{
                paddingRight: '40px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.10, ease: EASE_EXPO }}
            >
              {/* Step number — small, gold, display */}
              <span
                className="block font-display font-black text-[11px] tracking-[0.2em] mb-8"
                style={{ color: 'rgba(207,166,74,0.55)' }}
              >
                {n}
              </span>

              {/* Icon — lucide, minimal */}
              <div className="mb-7">
                <Icon
                  size={22}
                  strokeWidth={1.35}
                  style={{ color: '#CFA64A' }}
                />
              </div>

              <h3
                className="font-display font-black uppercase text-white m-0 mb-4"
                style={{ fontSize: '18px', letterSpacing: '-0.015em', lineHeight: 1.1 }}
              >
                {title}
              </h3>

              <p
                className="font-sans m-0 text-[14px]"
                style={{ color: 'rgba(255,255,255,0.70)', lineHeight: 1.68 }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA ────────────────────────────────────── */}
        <motion.div
          className="pt-16 pb-24 flex items-center gap-6 max-[640px]:flex-col max-[640px]:items-start"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: EASE_EXPO }}
        >
          <a
            href={WA_BOOK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 pl-7 pr-3 py-3 rounded-full font-sans font-bold text-[15px] text-white transition-all duration-500 group"
            style={{
              background: '#25D366',
              boxShadow: '0 10px 32px rgba(37,211,102,0.18)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 16px 40px rgba(37,211,102,0.28)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 32px rgba(37,211,102,0.18)';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            <span>Start Booking on WhatsApp</span>
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
          </a>

          <p
            className="font-sans text-[13px] m-0"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            No forms. No waiting. Delivery across Dubai.
          </p>
        </motion.div>
      </div>

      {/* Step column padding on mobile — CSS approach so border logic stays correct */}
      <style>{`
        @media (max-width: 900px) {
          #process .step-col:nth-child(even) {
            padding-left: 32px;
            border-right: none;
          }
          #process .step-col:nth-child(odd) {
            border-right: 1px solid rgba(255,255,255,0.08);
          }
          #process .step-col:nth-child(3),
          #process .step-col:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,0.08);
          }
        }
        @media (max-width: 480px) {
          #process .step-col {
            padding-right: 0 !important;
            padding-left: 0 !important;
            border-right: none !important;
            border-top: 1px solid rgba(255,255,255,0.08);
          }
          #process .step-col:first-child {
            border-top: none;
          }
        }
      `}</style>
    </section>
  );
}
