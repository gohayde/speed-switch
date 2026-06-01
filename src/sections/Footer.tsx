import { useLanguage } from '../LanguageContext';

function Logo() {
  return (
    <a className="inline-flex min-h-11 items-center gap-[12px] group" href="#home" aria-label="Speed Switch home">
      <svg className="w-[20px] h-[20px] text-white transition-colors duration-300 group-hover:text-[#F7BF35] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L12 12L17 17" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 10L12 5L17 10" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="hero-logo-word !text-white">SPEED SWITCH</span>
    </a>
  );
}

const getTranslatedExploreLinks = (language: 'en' | 'ar') => {
  if (language === 'ar') {
    return [
      { label: 'سيارات رياضية', href: '#vehicles' },
      { label: 'سيارات دفع رباعي', href: '#vehicles' },
      { label: 'سيدان فاخرة', href: '#vehicles' },
      { label: 'خطوات التأجير', href: '#process' },
      { label: 'الأسئلة الشائعة', href: '#faq' },
    ];
  }
  return [
    { label: 'Sports Cars', href: '#vehicles' },
    { label: 'SUVs', href: '#vehicles' },
    { label: 'Luxury Sedans', href: '#vehicles' },
    { label: 'How It Works', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];
};

export default function Footer() {
  const { language, t } = useLanguage();
  const exploreLinks = getTranslatedExploreLinks(language);

  return (
    <footer className="text-white relative" style={{ background: 'oklch(12% 0.007 82)' }}>
      {/* Gold top accent rule */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(247,191,53,0.3) 30%, rgba(247,191,53,0.3) 70%, transparent)' }} />

      <div className="max-w-[1160px] mx-auto px-6 pt-20 pb-10 relative z-10">

        {/* Main grid: brand left, links right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-16 text-left rtl:text-right">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start rtl:items-end">
            <Logo />
            <p className="text-white/60 text-[14px] leading-relaxed mt-6 max-w-[325px]" style={{ lineHeight: 1.65 }}>
              {t('footer_desc')}
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col items-start rtl:items-end">
            <h3
              className="font-bold text-[11px] tracking-[0.18em] uppercase mb-6"
              style={{ color: '#F7BF35' }}
            >
              {t('footer_explore')}
            </h3>
            <ul className="flex flex-col gap-1.5 list-none p-0 m-0 items-start rtl:items-end">
              {exploreLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex min-h-[36px] items-center text-[14px] font-semibold transition-colors duration-[180ms] text-white/60 hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: HQ Location & Stylized Map */}
          <div className="flex flex-col items-start rtl:items-end">
            <h3
              className="font-bold text-[11px] tracking-[0.18em] uppercase mb-6"
              style={{ color: '#F7BF35' }}
            >
              {t('footer_location')}
            </h3>
            <div className="flex flex-col gap-4 w-full items-start rtl:items-end">
              {/* Real interactive Google Map - Styled in high-end dark mode */}
              <div className="relative w-full h-[115px] rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden group shadow-[0_12px_24px_rgba(0,0,0,0.15)] block">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1706691475727!2d55.2741498!3d25.1869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f694e9f7353f9%3A0xe54d2dcfe366914!2sThe%20Prime%20Tower!5e0!3m2!1sen!2sae!4v1717200000000!5m2!1sen!2sae"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Speed Switch HQ Location"
                  className="w-full h-full opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                />
                <a 
                  href="https://maps.app.goo.gl/mTcn8Ai2dpDmYAhCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bg-[#111215]/85 backdrop-blur-md border border-white/10 rounded-lg px-2.5 py-1.5 text-[9px] font-black text-white tracking-wide uppercase select-none hover:border-[#F7BF35]/40 hover:text-[#F7BF35] transition-all duration-300 z-20 cursor-pointer"
                  style={{ bottom: '10px', left: '10px' }}
                >
                  {language === 'ar' ? 'برج برايم تاور، دبي ↗' : 'Prime Tower, Dubai ↗'}
                </a>
              </div>
              
              <div className="text-[13px] font-semibold text-white/50 flex flex-col gap-2.5 mt-1 items-start rtl:items-end w-full">
                <a
                  href="https://maps.app.goo.gl/mTcn8Ai2dpDmYAhCA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#F7BF35] transition-colors duration-180 flex items-start gap-2 group rtl:flex-row-reverse"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-[#F7BF35] shrink-0 mt-0.5" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <span className="leading-relaxed whitespace-pre-line text-left rtl:text-right">
                    {t('footer_office')}
                  </span>
                </a>
                <span className="flex items-center gap-2 rtl:flex-row-reverse">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-[#F7BF35] shrink-0" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>{t('footer_open')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-7 flex items-center justify-center" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <p className="text-[13px] font-semibold text-white/40 text-center">
            {language === 'ar' ? (
              <>جميع الحقوق محفوظة. سبيد سويتش © {new Date().getFullYear()}</>
            ) : (
              <>&copy; {new Date().getFullYear()} Speed Switch. All rights reserved.</>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
