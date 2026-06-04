import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
const WA_FAQ = 'https://wa.me/971523660709?text=Hi%2C%20I%20have%20a%20question%20about%20renting';

const getTranslatedFaqs = (language: 'en' | 'ar') => {
  if (language === 'ar') {
    return [
      {
        q: 'ما هي المستندات المطلوبة للاستئجار؟',
        a: 'للاستئجار، تحتاج إلى: (١) رخصة قيادة سارية المفعول من بلدك الأم أو رخصة دولية إذا لزم الأمر. (٢) نسخة من جواز السفر مع صفحة تأشيرة الدخول (للسياح) أو الهوية الإماراتية (للمقيمين). (٣) بطاقة ائتمان أو خصم لمبلغ التأمين. لا يحتاج زوار دول مجلس التعاون الخليجي، الاتحاد الأوروبي، الولايات المتحدة، المملكة المتحدة، كندا، وبعض الدول الأخرى إلى رخصة دولية.',
      },
      {
        q: 'كيف يعمل مبلغ التأمين المسترد؟',
        a: 'يتم إجراء حجز مؤقت لمبلغ التأمين على بطاقتك الائتمانية أو الخصم أثناء تسليم السيارة. بمجرد إرجاع السيارة بحالتها الأصلية، نقوم بإلغاء الحجز في نفس اليوم. وستظهر الأموال في حسابك خلال ٣ إلى ٥ أيام عمل حسب سياسة مصرفك.',
      },
      {
        q: 'هل تقومون بالتوصيل إلى الفندق أو المنزل؟',
        a: 'نعم، نوفر خدمة توصيل واستلام مجانية إلى أي فندق، منزل خاص، فيلا، أو مكتب في جميع أنحاء دبي. يتم تنسيق عملية التسليم مباشرة مع السائق الخاص بك عبر واتساب.',
      },
      {
        q: 'هل يمكنكم تسليم السيارة في مطار دبي؟',
        a: 'نعم، نقوم بالتوصيل والاستلام في مطاري دبي الدولي (DXB) وآل مكتوم الدولي (DWC). نحن نتابع حالة رحلتك وننسق مع السائق ليلتقي بك خارج مبنى الوصول لتسليم سريع وسهل.',
      },
      {
        q: 'ما هي التغطية التأمينية المشمولة؟',
        a: 'تأمين شامل قياسي مشمول في سعر الإيجار. يغطي هذا المسؤولية تجاه الغير والأضرار، شريطة الحصول على تقرير شرطة. يمكنك شراء تغطية إضافية أو إعفاء من أضرار الاصطدام أثناء الحجز.',
      },
      {
        q: 'ما هي سرعة تأكيد الحجز؟',
        a: 'نؤكد توفر السيارة وتفاصيل الحجز في غضون ٥ إلى ١٠ دقائق عبر واتساب. فريق الحجوزات لدينا متصل بالإنترنت على مدار الساعة طوال أيام الأسبوع لمساعدتك.',
      },
    ];
  }
  return [
    {
      q: 'What documents do I need to rent?',
      a: 'To rent, you need: (1) A valid driving licence from your home country or an International Driving Permit (IDP) if required. (2) A passport copy with the entry visa page (for tourists) or an Emirates ID (for UAE residents). (3) A credit or debit card for the security deposit hold. Visitors from GCC, EU, US, UK, Canada, and select other countries do not require an IDP.',
    },
    {
      q: 'How does the security deposit work?',
      a: 'An authorization hold is placed on your credit or debit card during handover. Once you return the vehicle in its original condition, we release the hold on the same day. Depending on your bank, the funds will reflect in your account within 3 to 5 business days.',
    },
    {
      q: 'Do you deliver to my hotel or residence?',
      a: 'Yes, we provide complimentary delivery and collection to any hotel, private residence, villa, or office across Dubai. Handovers are coordinated directly with your driver via WhatsApp.',
    },
    {
      q: 'Can you deliver to Dubai Airport?',
      a: 'Yes, we deliver and collect at both Dubai International (DXB) and Al Maktoum International (DWC) airports. We track your flight status and arrange for your driver to meet you outside the arrivals terminal for a seamless handover.',
    },
    {
      q: 'What insurance is included?',
      a: 'Standard comprehensive insurance is included in the rental price. This covers third-party liability and damage, subject to a police report. You can purchase additional coverage or a collision damage waiver (CDW) during booking.',
    },
    {
      q: 'How quickly does booking get confirmed?',
      a: 'We confirm vehicle availability and booking details within 5 to 10 minutes on WhatsApp. Our reservation team is online 24/7 to assist with your booking.',
    },
  ];
};

function ExpandIcon({ open }: { open: boolean }) {
  return (
    <span
      className="shrink-0 relative w-7 h-7 flex items-center justify-center rounded-full bg-black/[0.03] group-hover:bg-[#F7BF35]/10 transition-colors duration-300"
      aria-hidden="true"
    >
      {/* Horizontal bar always visible */}
      <span
        className="absolute block w-3.5 h-[1.5px] rounded-full transition-all duration-300"
        style={{ background: open ? '#F7BF35' : 'rgba(0, 0, 0, 0.42)' }}
      />
      {/* Vertical bar rotates away when open */}
      <span
        className="absolute block w-[1.5px] h-3.5 rounded-full transition-all duration-300"
        style={{
          background: open ? '#F7BF35' : 'rgba(0, 0, 0, 0.42)',
          transform: open ? 'scaleY(0) rotate(90deg)' : 'scaleY(1) rotate(0deg)',
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
      className="relative transition-colors duration-300 group/item overflow-hidden"
      style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}
    >
      {/* Golden tint on open state — full background tint */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-[400ms]"
        style={{ background: 'rgba(247,191,53,0.035)', opacity: open ? 1 : 0 }}
      />

      <button
        onClick={() => setOpen(o => !o)}
        className="relative w-full flex items-start justify-between gap-6 py-7 px-4 text-left rtl:text-right group"
        aria-expanded={open}
      >
        <span
          className="flex-1 font-bold leading-snug transition-colors duration-300 font-sans text-[#111215]"
          style={{ fontSize: '16.5px', textWrap: 'pretty' }}
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
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="relative text-black/60 leading-relaxed pb-7 px-4 mt-0 font-medium text-left rtl:text-right" style={{ fontSize: '14.5px', lineHeight: 1.7 }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { language, t } = useLanguage();
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const faqs = getTranslatedFaqs(language);

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0.9, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE_EXPO } },
  };

  return (
    <section id="faq" className="py-20 px-6 bg-[oklch(99%_0.003_82)] max-[900px]:py-16 max-[640px]:py-12">
      <div ref={ref} className="max-w-[1160px] mx-auto">

        {/* 2-col editorial split */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.7fr] gap-16 items-start">

          {/* Left: sticky heading + CTA */}
          <div className="md:sticky md:top-28 text-left rtl:text-right flex flex-col items-start rtl:items-end">
            <motion.h2
              className="font-black uppercase text-[#111215] leading-[0.88] m-0 mb-5 font-display mt-4 flex flex-col items-start rtl:items-end"
              style={{ fontSize: 'clamp(38px,3.2vw,56px)', letterSpacing: '-0.025em' }}
              initial={reduce ? undefined : { opacity: 0.9, y: 10 }}
              animate={inView && !reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.65, ease: EASE_EXPO }}>
              <span>{t('faq_title_1')}</span>
              <span className="bg-[#111215] text-[#F7BF35] px-4 py-2 mt-2.5 inline-block select-none rounded-xl font-display font-black leading-none">
                {t('faq_title_2')}
              </span>
            </motion.h2>
            <motion.p
              className="text-[#111215]/80 font-semibold leading-relaxed mb-10 max-w-[32ch]"
              style={{ fontSize: '15px', lineHeight: 1.65 }}
              initial={reduce ? undefined : { opacity: 0.9, y: 8 }}
              animate={inView && !reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE_EXPO }}>
              {t('faq_paragraph')}
            </motion.p>

            {/* Gold accent line */}
            <div className="w-10 h-px mb-10" style={{ background: '#F7BF35', opacity: 0.3 }} />

            {/* Trailing Icon Button WhatsApp CTA */}
            <motion.a
              href={WA_FAQ}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={inView && !reduce ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.5, delay: 0.14, ease: EASE_EXPO }}
              className="speed-cta inline-flex"
            >
              <span>{t('cta_ask_whatsapp')}</span>
              <span className="speed-cta-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
            </motion.a>
          </div>

          {/* Right: FAQ list */}
          <motion.div
            variants={reduce ? undefined : listVariants}
            initial={reduce ? undefined : 'hidden'}
            animate={inView && !reduce ? 'visible' : undefined}
            style={{ borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}
            className="px-2 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.035)]"
          >
            {faqs.map(({ q, a }) => (
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

