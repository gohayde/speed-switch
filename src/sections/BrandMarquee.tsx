import type { ReactNode } from 'react';


const brandNames = [
  'Mercedes-Benz',
  'Audi',
  'BMW',
  'Bentley',
  'Cadillac',
  'Rolls-Royce',
  'Dodge',
  'Nissan',
  'Land Rover',
  'Lamborghini',
];

function BrandItem({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1 px-10 select-none">
      <BrandIcon name={name} />
      <span className="text-[11px] font-semibold tracking-wider text-[#AAADB3] uppercase mt-1">{name}</span>
    </div>
  );
}

function BrandIcon({ name }: { name: string }) {
  const style = "w-12 h-8 object-contain opacity-50 grayscale";
  const icons: Record<string, ReactNode> = {
    'Mercedes-Benz': (
      <svg className={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="#1A1A1A" strokeWidth="4" fill="none"/>
        <path d="M50 4 L50 50 L8 74" stroke="#1A1A1A" strokeWidth="4" fill="none"/>
        <path d="M50 4 L50 50 L92 74" stroke="#1A1A1A" strokeWidth="4" fill="none"/>
        <path d="M8 74 L92 74" stroke="#1A1A1A" strokeWidth="4" fill="none"/>
      </svg>
    ),
    'Audi': (
      <svg className={style} viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[0,35,70,105].map(x => (
          <circle key={x} cx={x+25} cy="25" r="22" stroke="#1A1A1A" strokeWidth="3.5" fill="none"/>
        ))}
      </svg>
    ),
    'BMW': (
      <svg className={style} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="46" stroke="#1A1A1A" strokeWidth="4"/>
        <line x1="50" y1="4" x2="50" y2="96" stroke="#1A1A1A" strokeWidth="4"/>
        <line x1="4" y1="50" x2="96" y2="50" stroke="#1A1A1A" strokeWidth="4"/>
      </svg>
    ),
    'Bentley': (
      <svg className={style} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 5 C20 5 5 15 5 25 C5 35 20 45 40 45 C60 45 75 35 75 25 C75 15 60 5 40 5Z" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
        <text x="40" y="31" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1A1A1A" fontFamily="serif">B</text>
      </svg>
    ),
    'Cadillac': (
      <svg className={style} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="60" height="30" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
        <path d="M25 10 L25 40 M40 10 L40 40 M55 10 L55 40" stroke="#1A1A1A" strokeWidth="1.5"/>
        <path d="M10 23 L70 23 M10 27 L70 27" stroke="#1A1A1A" strokeWidth="1.5"/>
      </svg>
    ),
    'Rolls-Royce': (
      <svg className={style} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 10 L15 40 L65 40 L65 10 Z" stroke="#1A1A1A" strokeWidth="2.5" fill="none"/>
        <circle cx="40" cy="22" r="8" stroke="#1A1A1A" strokeWidth="2.5" fill="none"/>
        <path d="M38 22 L65 38" stroke="#1A1A1A" strokeWidth="2"/>
        <text x="40" y="47" textAnchor="middle" fontSize="7" fontWeight="600" fill="#1A1A1A" fontFamily="serif" letterSpacing="1">ROLLS-ROYCE</text>
      </svg>
    ),
    'Dodge': (
      <svg className={style} viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 25 L25 5 L75 5 L75 45 L25 45 Z" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
        <path d="M5 25 L30 10 L30 40 Z" fill="#1A1A1A"/>
        <text x="52" y="31" textAnchor="middle" fontSize="14" fontWeight="800" fill="#1A1A1A" fontFamily="sans-serif">DODGE</text>
      </svg>
    ),
    'Nissan': (
      <svg className={style} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="25" rx="46" ry="22" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
        <rect x="4" y="21" width="92" height="8" fill="oklch(97.5% 0.007 82)"/>
        <line x1="4" y1="21" x2="96" y2="21" stroke="#1A1A1A" strokeWidth="3"/>
        <line x1="4" y1="29" x2="96" y2="29" stroke="#1A1A1A" strokeWidth="3"/>
        <text x="50" y="30" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1A1A1A" fontFamily="sans-serif" letterSpacing="2">NISSAN</text>
      </svg>
    ),
    'Land Rover': (
      <svg className={style} viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="20" rx="48" ry="18" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
        <text x="50" y="25" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A1A1A" fontFamily="sans-serif" letterSpacing="1">LAND ROVER</text>
      </svg>
    ),
    'Lamborghini': (
      <svg className={style} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,2 58,15 58,45 30,58 2,45 2,15" stroke="#1A1A1A" strokeWidth="3" fill="none"/>
        <polygon points="30,12 48,20 48,40 30,48 12,40 12,20" fill="#1A1A1A" fillOpacity="0.08" stroke="#1A1A1A" strokeWidth="1.5"/>
        <path d="M18 35 L30 15 L42 35" stroke="#1A1A1A" strokeWidth="2.5" fill="none"/>
        <line x1="18" y1="35" x2="42" y2="35" stroke="#1A1A1A" strokeWidth="2.5"/>
      </svg>
    ),
  };
  return <>{icons[name] ?? null}</>;
}

export default function BrandMarquee() {
  const doubled = [...brandNames, ...brandNames];

  return (
    <section className="relative border-y border-black/[0.07] py-7 overflow-hidden" style={{ background: 'oklch(97.5% 0.007 82)' }}>
      <p className="text-center text-[11px] font-semibold tracking-[0.18em] text-[#AAADB3] uppercase mb-4">
        Premium Brands In Our Fleet
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex w-max">
          {doubled.map((name, i) => (
            <BrandItem key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
