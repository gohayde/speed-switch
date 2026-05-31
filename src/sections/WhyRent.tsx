import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const getTranslatedSignals = (language: 'en' | 'ar') => {
  if (language === 'ar') {
    return [
      {
        title: 'مثالية. في كل مرة.',
        body: 'يتم تنظيف وصيانة السيارات بالكامل قبل كل تسليم. حالة ممتازة وموثوقة بلا استثناء.',
      },
      {
        title: 'أشخاص تعرفهم',
        body: 'أحمد وفريق العمل مذكورون بالاسم في مئات التقييمات. أشخاص حقيقيون يهتمون بك، وليس مجرد هاتف مجيب.',
      },
      {
        title: 'سعر واضح. نقطة.',
        body: 'السعر الذي نرسله لك هو ما تدفعه بالضبط. لا رسوم خفية أو إضافات عند التسليم.',
      },
      {
        title: 'استرداد التأمين اليوم',
        body: 'استرداد مبلغ التأمين في نفس يوم إرجاع السيارة هو المعيار لدينا، ويسعد عملاؤنا بكتابة ذلك في مراجعاتهم.',
      },
    ];
  }
  return [
    {
      title: 'Flawless. Every Time.',
      body: 'Cleaned and serviced before every handover. Reliable condition, without exception.',
    },
    {
      title: 'People You Know',
      body: 'Ahmad and the team are named in hundreds of Google reviews. Real people, not a hotline.',
    },
    {
      title: 'Price. Full Stop.',
      body: 'The quote you receive is the total you pay. No line items added at handover.',
    },
    {
      title: 'Deposit Back Today',
      body: 'Same-day deposit returns are the standard here. Renters name it specifically in their reviews.',
    },
  ];
};

export default function WhyRent() {
  const { language, t } = useLanguage();
  const reduce = useReducedMotion();
  const signals = getTranslatedSignals(language);

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[oklch(99%_0.003_82)] py-16 max-[900px]:py-12 max-[640px]:py-10 lg:h-screen lg:min-h-[620px] lg:py-0 flex items-center"
    >
      {/* G63 Brabus: bleeds from the LEFT edge — desktop only. Mirrored in RTL. */}
      <motion.div
        className="absolute inset-y-0 left-0 rtl:right-0 rtl:left-auto w-[42%] pointer-events-none max-[1040px]:hidden"
        aria-hidden="true"
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={reduce ? undefined : { opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.1, ease: EASE_EXPO }}
      >
        <motion.img
          src="/assets/g63-brabus.webp"
          alt=""
          className="absolute bottom-0 w-[115%] max-w-none object-contain select-none"
          style={{ left: '-6%', right: 'auto' }}
          draggable={false}
          initial={reduce ? undefined : { scale: 1.04 }}
          whileInView={reduce ? undefined : { scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.4, ease: EASE_EXPO }}
        />
      </motion.div>

      {/* Content container — text block sits on the RIGHT 55% */}
      <div className="relative mx-auto max-w-[1340px] px-8 max-[640px]:px-5 w-full">

        {/* G63 Brabus: inline for tablet/mobile, shown above text */}
        <motion.div
          className="hidden max-[1040px]:block relative mb-10 overflow-hidden"
          style={{ height: 260 }}
          aria-hidden="true"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE_EXPO }}
        >
          <img
            src="/assets/g63-brabus.webp"
            alt=""
            className="absolute bottom-0 w-[88%] object-contain select-none max-[640px]:w-full"
            style={{ left: '-8%', right: 'auto' }}
            draggable={false}
          />
        </motion.div>

        {/* Right-aligned text block */}
        <div className="ml-auto rtl:mr-auto rtl:ml-0 max-[1040px]:ml-0 max-[1040px]:rtl:mr-0 why-us-text-block">

          {/* Statement headline */}
          <motion.div
            className="mb-8 max-[1040px]:mb-6 text-left rtl:text-right"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: EASE_EXPO }}
          >
            <div
              className="mb-6 max-[640px]:mb-4"
              style={{ width: 48, height: 1, background: '#F7BF35' }}
              aria-hidden="true"
            />

            <h2
              className="m-0 font-display font-black uppercase text-[#111215]"
              style={{
                fontSize: 'clamp(42px, 5.5vw, 76px)',
                letterSpacing: '-0.022em',
                lineHeight: 0.88,
                textWrap: 'balance',
              }}
            >
              {language === 'ar' ? (
                <>
                  {t('why_subtitle')} <span style={{ color: '#F7BF35' }}>{t('why_subtitle_2')}</span><br />
                  {t('why_subtitle_highlight')}
                </>
              ) : (
                <>
                  {t('why_subtitle')}<br />
                  {t('why_subtitle_2')}{' '}
                  <span style={{ color: '#F7BF35' }}>{t('why_subtitle_highlight')}</span>.
                </>
              )}
            </h2>

            <p
              className="mt-5 font-sans text-[14.5px] leading-[1.65] text-[#111215]/65"
              style={{ maxWidth: 440 }}
            >
              {t('why_paragraph')}
            </p>
          </motion.div>

          {/* Signals list - Beautiful 2x2 grid */}
          <div
            className="grid grid-cols-2 max-[500px]:grid-cols-1 gap-x-10 gap-y-7 pt-6 border-t text-left rtl:text-right"
            style={{ borderColor: 'rgba(247,191,53,0.28)' }}
          >
            {signals.map((s, i) => (
              <motion.div
                key={s.title}
                className="flex flex-col gap-2"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: EASE_EXPO }}
              >
                <h3
                  className="m-0 font-display font-black uppercase text-[#111215] leading-snug"
                  style={{
                    fontSize: 'clamp(15px, 1.5vw, 18px)',
                    letterSpacing: '-0.016em',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  className="m-0 font-sans text-[13px] leading-[1.6] text-black/60"
                >
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

