import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const WA_DELIVERY = 'https://wa.me/971521430808?text=Hi%2C%20I%20would%20like%20to%20request%20delivery';
const GOOGLE_MAPS_DUBAI = 'https://maps.app.goo.gl/mTcn8Ai2dpDmYAhCA';

export default function DubaiDelivery() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="delivery" className="py-20 px-6 overflow-hidden relative max-[900px]:py-16 max-[640px]:py-12" style={{ background: 'oklch(99% 0.003 82)' }}>
      {/* Top golden hairline rule */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(247,191,53,0.18) 30%, rgba(247,191,53,0.18) 70%, transparent)' }} />

      <div ref={ref} className="max-w-[1160px] mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-14">

          {/* Left Column: Focused Copy & Action (5 cols) */}
          <motion.div
            className="col-span-5 max-[900px]:col-span-12 text-left rtl:text-right"
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            
            <h2
              className="font-black uppercase text-[#111215] leading-[0.88] m-0 mb-6 font-display mt-2 flex flex-col items-start rtl:items-end"
              style={{ fontSize: 'clamp(44px, 4.8vw, 72px)', letterSpacing: '-0.022em' }}>
              <span>{t('deliv_title_1')}</span>
              <span className="bg-[#111215] text-[#F7BF35] px-5 py-2.5 mt-3 inline-block select-none rounded-2xl font-display font-black leading-none">
                {t('deliv_title_2')}
              </span>
            </h2>
            
            <p className="text-[#111215]/80 font-semibold text-[15px] leading-relaxed mb-8 max-w-[42ch]">
              {t('deliv_paragraph')}
            </p>

            {/* Premium Highlights */}
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-9 h-9 rounded-full bg-[#F7BF35]/[0.05] border border-[#F7BF35]/18 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin size={15} className="text-[#F7BF35]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[#111215] font-semibold text-[14px] leading-tight">{t('deliv_highlight1_title')}</h3>
                  <p className="text-black/55 text-[12.5px] mt-1.5 leading-relaxed">{t('deliv_highlight1_body')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rtl:flex-row-reverse">
                <div className="w-9 h-9 rounded-full bg-[#F7BF35]/[0.05] border border-[#F7BF35]/18 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-[#F7BF35]" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#111215] font-semibold text-[14px] leading-tight">{t('deliv_highlight2_title')}</h3>
                  <p className="text-black/55 text-[12.5px] mt-1.5 leading-relaxed">{t('deliv_highlight2_body')}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA (Button-in-Button) */}
            <a
              href={WA_DELIVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="speed-cta"
            >
              <span>{t('cta_book_whatsapp')}</span>
              <span className="speed-cta-arrow">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Right Column: Premium Double-Bezel Map Console (7 cols) */}
          <motion.div 
            className="col-span-7 max-[900px]:col-span-12"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            
            {/* Double Bezel Console Frame */}
            <div className="p-2 rounded-[20px] bg-gradient-to-b from-black/5 to-black/[0.01] border border-black/5 relative group shadow-[0_20px_50px_rgba(0,0,0,0.03)]">

              {/* Inner Screen Case */}
              <div className="rounded-[14px] overflow-hidden relative aspect-[4/3] bg-black/5">
                
                {/* Real interactive Google Map - Styled in high-end dark mode */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1706691475727!2d55.2741498!3d25.1869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f694e9f7353f9%3A0xe54d2dcfe366914!2sThe%20Prime%20Tower!5e0!3m2!1sen!2sae!4v1717200000000!5m2!1sen!2sae"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Speed Switch Interactive Delivery Map"
                  className="w-full h-full z-10"
                />


                {/* Floating Map Link Badge in Center/Bottom */}
                <a 
                  href={GOOGLE_MAPS_DUBAI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 border border-black/10 bg-white px-5 py-3.5 rounded-2xl text-[13px] font-bold text-[#111215]/70 hover:text-[#111215] hover:border-black/20 transition-all duration-200 shadow-[0_6px_16px_rgba(0,0,0,0.06)] select-none z-20">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#FBBC05]" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                  <span>{t('deliv_map_btn')}</span>
                </a>

              </div>

            </div>

            <p className="text-black/40 text-[11px] mt-4 leading-relaxed text-left rtl:text-right pl-2 pr-2 select-none">
              {t('deliv_footer_text')}
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

