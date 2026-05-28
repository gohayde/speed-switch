import { ArrowRight } from 'lucide-react';

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
  Company: ['About Us', 'Careers', 'Press', 'Contact'],
  Fleet: ['Sports Cars', 'SUVs', 'Luxury', 'Vans', 'Chauffeur'],
  Support: ['How It Works', 'FAQ', 'Insurance', 'Roadside Assist'],
  Legal: ['Privacy Policy', 'Terms of Use', 'Cookie Policy'],
};

// Simple inline SVG social icons (lucide-react doesn't ship brand icons)
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

export default function Footer() {
  return (
    <footer className="bg-[#111010] text-white">
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
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-all duration-180 hover:border-gold hover:text-gold hover:-translate-y-px">
                  {svg}
                </a>
              ))}
            </div>
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
            <input type="email" placeholder="Your email address"
              className="flex-1 bg-transparent px-4 py-3 text-[14px] text-white placeholder-white/30 outline-none font-medium" />
            <button type="submit"
              className="bg-gold px-5 flex items-center gap-2 text-ink font-bold text-[13px] transition-colors duration-180 hover:bg-gold-light shrink-0">
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
