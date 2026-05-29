import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';

const WA_DELIVERY = 'https://wa.me/971500000000?text=Hi%2C%20I%20would%20like%20to%20request%20delivery';
const GOOGLE_MAPS_DUBAI = 'https://www.google.com/maps/place/Dubai+-+United+Arab+Emirates/';

export default function DubaiDelivery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="delivery" className="pt-36 pb-40 px-6 overflow-hidden relative" style={{ background: 'oklch(14% 0.006 82)' }}>
      {/* Cinematic ambient radial mesh gold gradient */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none opacity-35 mix-blend-screen blur-[120px]"
        style={{ background: 'radial-gradient(circle, oklch(72% 0.13 76 / 0.12), transparent 70%)' }} 
      />

      <div ref={ref} className="max-w-[1160px] mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-16 items-center max-[900px]:grid-cols-1 max-[900px]:gap-14">

          {/* Left Column: Focused Copy & Action (5 cols) */}
          <motion.div
            className="col-span-5 max-[900px]:col-span-12"
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            
            <h2
              className="font-bold uppercase text-white leading-[0.88] m-0 mb-6 font-display"
              style={{ fontSize: 'clamp(44px, 4.8vw, 72px)', letterSpacing: '-0.02em' }}>
              We Come<br /><span className="text-white/30">To You</span>
            </h2>
            
            <p className="text-[#8C8F96] text-[15px] leading-relaxed mb-8 max-w-[42ch]">
              Across every district in Dubai, we deliver your chosen vehicle directly to your door. Tourists and residents alike: no queues, no counters, just your car exactly where you need it.
            </p>

            {/* Premium Highlights */}
            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#CFA64A]/[0.07] border border-[#CFA64A]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={15} className="text-[#CFA64A]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[14px] leading-tight">Free Delivery Across Dubai</h4>
                  <p className="text-white/40 text-[12.5px] mt-1 leading-relaxed">Complimentary handover at all major hotels, residences, or airport terminals.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#CFA64A]/[0.07] border border-[#CFA64A]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 text-[#CFA64A]" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium text-[14px] leading-tight">On-Demand Handovers</h4>
                  <p className="text-white/40 text-[12.5px] mt-1 leading-relaxed">Fast delivery within minutes, fully coordinate-tracked directly on WhatsApp.</p>
                </div>
              </div>
            </div>

            {/* Button-in-Button WhatsApp CTA */}
            <a
              href={WA_DELIVERY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 pl-7 pr-3.5 py-3 rounded-full bg-[#CFA64A] text-[#1A1A1A] font-bold text-[14px] shadow-[0_12px_32px_rgba(207,166,74,0.15)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:shadow-[0_18px_40px_rgba(207,166,74,0.25)] active:scale-[0.98] group">
              <span>Request Delivery</span>
              <span className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:scale-105">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
            </a>
          </motion.div>

          {/* Right Column: Premium Double-Bezel Map Console (7 cols) */}
          <motion.div 
            className="col-span-7 max-[900px]:col-span-12"
            initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            animate={inView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>
            
            {/* Double Bezel Console Frame */}
            <div className="p-2 rounded-[28px] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/[0.08] shadow-[0_24px_80px_rgba(0,0,0,0.4)] relative overflow-hidden group">
              
              {/* Inner Screen Case */}
              <div className="rounded-[20px] overflow-hidden relative aspect-[4/3] bg-black/40">
                
                {/* Custom Vector Map Asset */}
                <img 
                  src="/assets/dubai-delivery-map.png" 
                  alt="Speed Switch Dubai Delivery Map" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none pointer-events-none"
                />

                {/* Subtle outer vignette overlay to bleed edges */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Active Badge */}
                <div className="absolute top-5 left-5 bg-black/60 backdrop-blur-md border border-white/[0.08] rounded-full px-3 py-1.5 flex items-center gap-2 select-none shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CFA64A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#CFA64A]"></span>
                  </span>
                  <span className="text-[10px] font-semibold text-white/95 tracking-wider uppercase">Live handover active</span>
                </div>

                {/* Floating Google Maps Badge in Center/Bottom */}
                <a 
                  href={GOOGLE_MAPS_DUBAI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md border border-white/10 text-white font-medium text-[11px] px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-[#CFA64A] hover:text-[#1A1A1A] hover:border-[#CFA64A]/30 hover:-translate-y-0.5 group/badge tracking-wider uppercase">
                  <span>Open Interactive Map</span>
                  <span className="w-5 h-5 rounded-full bg-white/10 group-hover/badge:bg-black/10 flex items-center justify-center transition-all duration-500 group-hover/badge:translate-x-0.5 group-hover/badge:-translate-y-0.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-3 h-3" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </a>

              </div>

            </div>

            <p className="text-[#5E626A] text-[11px] mt-4 leading-relaxed text-right max-[900px]:text-left select-none">
              Custom handovers in Sharjah, Abu Dhabi, and surrounding Emirates available on request.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
