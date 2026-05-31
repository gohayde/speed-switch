import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const getTranslatedSteps = (language: 'en' | 'ar') => {
  if (language === 'ar') {
    return [
      {
        n: '٠١',
        title: 'اختر\nسيارتك',
        body: 'تصفح تشكيلتنا من لامبورغيني، جي-واجن، ماكلارين. حدد سيارتك وسنؤكد حجزك في دقائق.',
      },
      {
        n: '٠٢',
        title: 'نوصّلها\nإليك',
        body: 'أرسل لنا موقعك، وسنقوم بتوصيل السيارة مباشرة إلى فندقك، فيلتك، أو مكتبك في أي مكان في دبي.',
      },
      {
        n: '٠٣',
        title: 'انطلق\nواستمتع',
        body: 'خزان وقود ممتلئ، سيارة فائقة النظافة. نستلمها من باب بيتك، ونعيد لك مبلغ التأمين في نفس اليوم.',
      },
    ];
  }
  return [
    {
      n: '01',
      title: 'Choose\nYour Car',
      body: 'Browse Lamborghinis, G-Wagons, McLarens. Pick the car. We confirm in minutes.',
    },
    {
      n: '02',
      title: 'We Deliver\nTo You',
      body: 'Send us a location. Your car arrives at your hotel, villa, or office anywhere in Dubai.',
    },
    {
      n: '03',
      title: 'Drive\n& Enjoy',
      body: 'Full tank. Clean car. We collect from your door. Deposit back the same day.',
    },
  ];
};

export default function RentalProcess() {
  const { language, t } = useLanguage();
  const reduce = useReducedMotion();
  const steps = getTranslatedSteps(language);

  return (
    <section
      id="process"
      className="relative bg-white text-[#111215] flex items-center"
      style={{ minHeight: '100dvh' }}
    >
      <div className="w-full mx-auto max-w-[1340px] px-8 py-20 max-[900px]:py-16 max-[640px]:px-5 max-[640px]:py-14">

        {/* Header */}
        <motion.div
          className="mb-16 max-[900px]:mb-12 text-left rtl:text-right"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.72, ease: EASE_EXPO }}
        >
          <h2
            className="m-0 font-display font-black uppercase leading-[0.88] tracking-[-0.022em]"
            style={{ fontSize: 'clamp(44px, 5.4vw, 76px)', textWrap: 'balance' as const }}
          >
            {t('process_title')}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-3 max-[760px]:grid-cols-1 max-[760px]:gap-14">

          {/* Desktop connector line — runs between step numbers and headings */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 h-px bg-[#111215]/10 max-[760px]:hidden"
            style={{ top: 'clamp(88px, 9.5vw, 136px)' }}
          />

          {steps.map(({ n, title, body }, i) => (
            <motion.article
              key={n}
              className="relative pr-12 rtl:pr-0 rtl:pl-12 max-[900px]:pr-8 max-[900px]:rtl:pl-8 max-[760px]:pr-0 max-[760px]:rtl:pl-0 text-left rtl:text-right"
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: reduce ? 0 : i * 0.13, ease: EASE_EXPO }}
            >
              {/* Step number — punches through the connector line */}
              <div className="relative bg-white inline-block pr-6 rtl:pl-6 rtl:pr-0 max-[760px]:pr-0 max-[760px]:rtl:pl-0 max-[760px]:bg-transparent">
                <span
                  className="block font-display font-black leading-none text-[#F7BF35] select-none"
                  style={{
                    fontSize: 'clamp(76px, 9vw, 128px)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {n}
                </span>
              </div>

              {/* Headline */}
              <h3
                className="m-0 font-display font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#111215] mt-8 mb-5 max-[900px]:mt-6 max-[760px]:mt-4"
                style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', whiteSpace: 'pre-line' }}
              >
                {title}
              </h3>

              {/* Body */}
              <p className="m-0 text-[15px] font-[500] leading-[1.65] text-[#111215]/55 max-w-[260px] max-[760px]:max-w-full">
                {body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

