import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const WA_FAQ = 'https://wa.me/971500000000?text=Hi%2C%20I%20have%20a%20question%20about%20renting';

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
    q: 'Is there a mileage limit?',
    a: 'Most vehicles in our fleet include unlimited mileage. Where a mileage cap applies, it is clearly stated before you confirm — never buried in fine print.',
  },
  {
    q: 'What insurance is included?',
    a: 'Basic comprehensive insurance is included with every rental. Additional coverage options are available at checkout. Our team can walk you through the details on WhatsApp before you book.',
  },
  {
    q: 'What is the minimum age to rent?',
    a: 'The minimum age is 21 for standard vehicles. Some performance or high-end models require the driver to be at least 25. This is shown on each car listing.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit and debit cards, bank transfer, and cash in AED for eligible bookings. Payment options are confirmed at the time of booking via WhatsApp.',
  },
  {
    q: 'Can you deliver to Dubai Airport?',
    a: 'Yes. Airport delivery is available at Dubai International (DXB) and Al Maktoum International (DWC). Timing is coordinated around your flight arrival to avoid waiting.',
  },
  {
    q: 'Can I extend my rental after it starts?',
    a: 'Absolutely. Message us on WhatsApp any time and we will extend your booking subject to availability — usually confirmed within the hour.',
  },
  {
    q: 'How quickly does booking get confirmed?',
    a: 'Most bookings are confirmed within minutes on WhatsApp. We are available throughout the day and into the evening to process your request.',
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
    <section id="faq" className="pt-20 pb-32 px-6" style={{ background: 'oklch(97.5% 0.007 82)' }}>
      <div className="max-w-[860px] mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold tracking-[0.3em] text-[#CFA64A]/50 uppercase mb-6 font-[family-name:'Space_Grotesk',Arial,sans-serif]">§ FAQ</span>
          <h2
            className="font-bold uppercase text-[#1A1A1A] leading-[0.9] m-0 mb-4"
            style={{ fontFamily: "'Space Grotesk', Arial, sans-serif", fontSize: 'clamp(28px,2.8vw,44px)' }}>
            Everything You<br />Need to Know
          </h2>
          <p className="text-[#777B82] text-[16px] leading-relaxed max-w-[65ch] mx-auto">
            Answers to the most common questions about renting with Speed Switch.
          </p>
        </div>

        <div className="mb-12">
          {faqs.map(({ q, a }) => (
            <FAQItem key={q} q={q} a={a} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#777B82] text-[15px] mb-5">
            Still have a question? We are on WhatsApp.
          </p>
          <a
            href={WA_FAQ}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-4 rounded-[8px] bg-[#25D366] text-white font-bold text-[15px] shadow-[0_10px_28px_rgba(37,211,102,0.22)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_14px_36px_rgba(37,211,102,0.3)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Still Have Questions? WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
