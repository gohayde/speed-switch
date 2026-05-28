import { ArrowRight } from 'lucide-react';

const WA_FOOTER = 'https://wa.me/971500000000?text=Hi%2C%20I%20want%20to%20book%20a%20car';

function Logo() {
  return (
    <a className="inline-flex items-center gap-[14px]" href="#" aria-label="Speed Switch home">
      <span className="relative w-[32px] h-[32px] inline-block" aria-hidden="true">
        <span className="absolute left-[13px] top-[-2px] w-[8px] h-[36px] rounded-[1px] bg-[#CFA64A] rotate-[42deg]" />
        <span className="absolute left-[13px] top-[-2px] w-[8px] h-[36px] rounded-[1px] bg-[#CFA64A] rotate-[-42deg]" />
      </span>
      <span className="text-[18px] leading-none font-extrabold tracking-[0.15em] text-white">SPEED SWITCH</span>
    </a>
  );
}

const links = {
  Fleet: ['Sports Cars', 'SUVs', 'Luxury Sedans', 'Vans', 'Chauffeur'],
  'Service Areas': ['Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'Business Bay', 'Dubai Airport'],
  Support: ['How It Works', 'FAQ', 'Insurance', 'Roadside Assist'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy'],
};

const socials = [
  {
    label: 'Instagram',
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'YouTube',
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    svg: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.02-.07z"/>
      </svg>
    ),
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 18, height: 18, flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: 'oklch(12% 0.007 82)' }}>
      <div className="max-w-[1160px] mx-auto px-6 pt-20 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-5 gap-12 mb-16 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {/* Brand col */}
          <div className="col-span-1 max-[900px]:col-span-2">
            <Logo />
            <p className="text-[#555] text-[14px] leading-relaxed mt-5 max-w-[260px]">
              Premium car rental across Dubai. Delivered to your door, tailored to your standards.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ svg, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-all duration-[180ms] hover:border-[#CFA64A] hover:text-[#CFA64A] hover:-translate-y-px">
                  {svg}
                </a>
              ))}
            </div>
            <a
              href={WA_FOOTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mt-7 px-4 py-2.5 rounded-[7px] bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-semibold text-[13px] transition-all duration-[180ms] hover:bg-[#25D366]/18 hover:-translate-y-px">
              <WhatsAppIcon />
              WhatsApp Now
            </a>
          </div>

          {/* Nav cols */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-[11px] font-bold tracking-[0.18em] text-[#555] uppercase mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-[14px] text-white/60 font-medium transition-colors duration-[180ms] hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="flex items-center justify-between gap-8 py-8 border-y border-white/[0.07] mb-10 flex-wrap gap-y-5">
          <div>
            <p className="font-bold text-[16px] text-white mb-1">Stay in the fast lane.</p>
            <p className="text-[13px] text-[#555]">New arrivals, exclusive offers, and Dubai driving guides.</p>
          </div>
          <form className="flex gap-0 rounded-lg overflow-hidden border border-white/10 min-w-85 max-[560px]:min-w-0 max-[560px]:w-full">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none font-medium"
            />
            <button
              type="submit"
              className="bg-[#CFA64A] px-5 flex items-center gap-2 text-[#1A1A1A] font-bold text-[13px] transition-colors duration-[180ms] hover:brightness-105 shrink-0">
              Subscribe <ArrowRight size={14} strokeWidth={2.2} />
            </button>
          </form>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-[#444] text-[13px]">
            &copy; {new Date().getFullYear()} Speed Switch. All rights reserved.
          </p>
          <p className="text-[#333] text-[13px]">
            Dubai, UAE &mdash; Serving the Emirates since 2020
          </p>
        </div>
      </div>
    </footer>
  );
}
