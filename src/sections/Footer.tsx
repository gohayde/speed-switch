const WA_BOOK = 'https://wa.me/971521430808?text=Hi%2C%20I%20want%20to%20book%20a%20car';

const navGroups = [
  {
    heading: 'Explore',
    items: [
      { label: 'Sports Cars', href: '#vehicles' },
      { label: 'SUVs', href: '#vehicles' },
      { label: 'Luxury Sedans', href: '#vehicles' },
      { label: 'How It Works', href: '#process' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    heading: 'Delivery',
    items: [
      { label: 'Dubai Marina', href: '#delivery' },
      { label: 'Downtown Dubai', href: '#delivery' },
      { label: 'Palm Jumeirah', href: '#delivery' },
      { label: 'Dubai Airport', href: '#delivery' },
    ],
  },
];

function Logo() {
  return (
    <a className="inline-flex min-h-11 items-center gap-[14px] group" href="#home" aria-label="Speed Switch home">
      <span className="relative w-[32px] h-[32px] inline-block" aria-hidden="true">
        <span className="absolute left-[13px] top-[-2px] w-[8px] h-[36px] rounded-[1px] bg-[#CFA64A] rotate-[42deg] transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-0" />
        <span className="absolute left-[13px] top-[-2px] w-[8px] h-[36px] rounded-[1px] bg-[#CFA64A] rotate-[-42deg] transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:rotate-90" />
      </span>
      <span className="text-[18px] leading-none font-extrabold tracking-[0.15em] text-white">SPEED SWITCH</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="text-white relative" style={{ background: 'oklch(10% 0.006 82)' }}>
      {/* Gold top accent rule */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(207,166,74,0.28) 30%, rgba(207,166,74,0.28) 70%, transparent)' }} />

      <div className="max-w-[1160px] mx-auto px-6 pt-20 pb-10">

        {/* Main grid: brand left, links right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-16">

          {/* Brand column */}
          <div>
            <Logo />
            <p className="text-white/52 text-[14px] leading-relaxed mt-6 mb-8 max-w-[280px]" style={{ lineHeight: 1.65 }}>
              Premium car rental across Dubai. Delivered to your door, priced transparently.
            </p>

            {/* WhatsApp contact */}
            <a
              href={WA_BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-semibold text-[13px] transition-colors duration-[200ms]"
              style={{ color: 'rgba(37,211,102,0.70)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(37,211,102,0.70)')}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              +971 52 143 0808
            </a>
          </div>

          {/* Nav columns */}
          {navGroups.map(({ heading, items }) => (
            <div key={heading}>
              <h3
                className="font-bold text-[11px] tracking-[0.18em] uppercase mb-6"
                style={{ color: 'rgba(207,166,74,0.50)' }}
              >
                {heading}
              </h3>
              <ul className="flex flex-col gap-1 list-none p-0 m-0">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="inline-flex min-h-[36px] items-center text-[14px] font-medium transition-colors duration-[180ms] hover:text-white/80"
                      style={{ color: 'rgba(255,255,255,0.52)' }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-[13px]" style={{ color: 'rgba(255,255,255,0.38)' }}>
            &copy; {new Date().getFullYear()} Speed Switch. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-[13px] transition-colors duration-[180ms] hover:text-white/55" style={{ color: 'rgba(255,255,255,0.38)' }}>Privacy policy</a>
            <a href="#" className="text-[13px] transition-colors duration-[180ms] hover:text-white/55" style={{ color: 'rgba(255,255,255,0.38)' }}>Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
