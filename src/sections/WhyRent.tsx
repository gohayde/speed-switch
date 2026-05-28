import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, MapPin, Clock, Sparkles, MessageCircle, BadgeCheck } from 'lucide-react';

const WA_LINK = 'https://wa.me/971500000000';

const benefits = [
  {
    icon: Zap,
    title: 'Fast Dubai Delivery',
    body: 'We bring your car directly to your hotel, residence, or any Dubai address — often within the hour.',
  },
  {
    icon: Sparkles,
    title: 'Premium, Spotless Fleet',
    body: 'Every vehicle is detailed and inspected before delivery. You receive it immaculate, every time.',
  },
  {
    icon: Clock,
    title: 'Daily & Weekly Rates',
    body: 'Flexible durations with transparent pricing. Extend on the fly — no penalties, no surprises.',
  },
  {
    icon: MapPin,
    title: 'Delivered to Your Door',
    body: 'Across all Dubai zones: Marina, Downtown, Palm, JBR, Business Bay, airport and more.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    body: 'Reach a real person instantly on WhatsApp. Booking confirmations, changes, questions — all handled fast.',
  },
  {
    icon: BadgeCheck,
    title: 'Clear, Honest Pricing',
    body: 'No hidden fees. The price you see is the price you pay — insurance and delivery included.',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function WhyRent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#F8F7F3] py-28 px-6 overflow-hidden">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-2 gap-20 items-center max-[960px]:grid-cols-1 max-[960px]:gap-14">

          {/* Left: car image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative max-[960px]:order-last">
            <div className="relative rounded-[20px] overflow-hidden aspect-[4/3] bg-[#EDEAE2]">
              {/* Placeholder car silhouette — replace with real image */}
              <img
                src="/car-why.jpg"
                alt="Premium car delivered in Dubai"
                className="w-full h-full object-cover"
                onError={e => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* Fallback visual when no image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <svg viewBox="0 0 440 280" fill="none" className="w-[80%] opacity-20">
                  <path d="M60 180 C80 140 120 120 180 118 L200 90 C220 62 260 58 300 62 L360 72 C390 76 410 92 420 110 L428 140 C436 148 438 158 432 164 L420 168 C416 188 398 202 376 202 C354 202 336 188 332 168 L148 168 C144 188 126 202 104 202 C82 202 64 188 60 168 L44 164 C36 158 38 148 60 180Z" fill="#CFA64A"/>
                </svg>
              </div>
              {/* Gold tag */}
              <div className="absolute top-5 left-5 bg-[#CFA64A] text-[#1A1A1A] text-[11px] font-bold tracking-[0.16em] uppercase px-3 py-1.5 rounded-[6px]">
                Speed Switch
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-5 -right-5 bg-[#1A1A1A] text-white rounded-[14px] px-5 py-4 shadow-[0_12px_32px_rgba(26,26,26,0.22)] max-[560px]:hidden">
              <p className="text-[26px] font-bold leading-none text-[#CFA64A]" style={{ fontFamily: "'Space Grotesk', Arial, sans-serif" }}>4.9</p>
              <p className="text-[11px] text-[#777B82] font-medium mt-1">Google Rating</p>
            </div>
          </motion.div>

          {/* Right: copy + benefits */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              className="mb-10">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-3">
                Why Speed Switch
              </p>
              <h2
                className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0 mb-5"
                style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(36px,3.8vw,62px)' }}>
                The Rental You<br />Can Rely On
              </h2>
              <p className="text-[#777B82] text-[16px] leading-relaxed max-w-[460px]">
                Fast delivery, a clean premium fleet, flexible terms, and a team reachable on WhatsApp day or night. Everything a Dubai rental should be.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              className="grid grid-cols-2 gap-5 mb-9 max-[480px]:grid-cols-1">
              {benefits.map(({ icon: Icon, title, body }) => (
                <motion.div key={title} variants={item} className="flex flex-col gap-3">
                  <div className="w-9 h-9 rounded-[8px] bg-[rgba(207,166,74,0.1)] flex items-center justify-center shrink-0">
                    <Icon size={17} strokeWidth={1.8} className="text-[#CFA64A]" />
                  </div>
                  <div>
                    <p className="font-bold text-[15px] text-[#1A1A1A] leading-tight mb-1">{title}</p>
                    <p className="text-[#777B82] text-[13px] leading-relaxed m-0">{body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              className="inline-flex items-center gap-3 px-7 py-4 rounded-[8px] bg-[#25D366] text-white font-bold text-[15px] shadow-[0_10px_28px_rgba(37,211,102,0.25)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(37,211,102,0.35)]">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Talk to Us on WhatsApp
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
