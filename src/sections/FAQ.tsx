import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What documents do I need to rent a car?',
    a: 'A valid driving licence (international or UAE), a passport or Emirates ID, and a credit card for the security deposit. Visitors with a licence from most countries are welcome.',
  },
  {
    q: 'Is there a minimum rental period?',
    a: 'Our minimum rental is 24 hours. We offer daily, weekly, and monthly rates — each progressively better value.',
  },
  {
    q: 'Can you deliver to my hotel or residence?',
    a: 'Yes. We deliver to any address across Dubai at no additional charge. Delivery to other Emirates is available on request.',
  },
  {
    q: 'What is included in the rental price?',
    a: 'Basic insurance, 24/7 roadside assistance, and unlimited mileage on most vehicles. A detailed breakdown is shown before you confirm.',
  },
  {
    q: 'Can I extend my rental after it starts?',
    a: 'Absolutely. Contact us any time and we will extend your booking subject to availability — usually within the hour.',
  },
  {
    q: 'How does the security deposit work?',
    a: 'A refundable hold is placed on your card at the start. It is released within 5 business days of returning the vehicle in the agreed condition.',
  },
  {
    q: 'Are the vehicles serviced regularly?',
    a: 'Every vehicle in our fleet undergoes rigorous mechanical checks and a full detail before each rental. We deliver nothing less than perfect.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-black/[0.08]">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}>
        <span className={`font-semibold text-[16px] leading-snug transition-colors duration-[180ms] ${open ? 'text-[#CFA64A]' : 'text-[#1A1A1A]'}`}>
          {q}
        </span>
        <span className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-[180ms] ${open ? 'border-[#CFA64A] bg-[rgba(207,166,74,0.08)] text-[#CFA64A]' : 'border-black/[0.12] text-[#777]'}`}>
          {open ? <Minus size={14} strokeWidth={2} /> : <Plus size={14} strokeWidth={2} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden">
            <p className="text-[#777B82] text-[15px] leading-relaxed pb-6 mt-0">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#F8F7F3] py-28 px-6">
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#CFA64A] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-bold uppercase text-[#1A1A1A] leading-[0.88] m-0"
            style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(36px,4vw,68px)' }}>
            Common Questions
          </h2>
        </div>
        <div>
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
