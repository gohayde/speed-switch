const links = {
  Fleet: ['Sports Cars', 'SUVs', 'Luxury Sedans', 'Vans', 'Chauffeur'],
  'Service Areas': ['Dubai Marina', 'Downtown Dubai', 'Palm Jumeirah', 'Business Bay', 'Dubai Airport'],
  Support: ['How It Works', 'FAQ', 'Insurance', 'Roadside Assist'],
};

function Logo() {
  return (
    <a className="inline-flex items-center gap-[14px] group" href="#" aria-label="Speed Switch home">
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
    <footer className="text-white" style={{ background: 'oklch(12% 0.007 82)' }}>
      <div className="max-w-[1160px] mx-auto px-6 pt-20 pb-10">

        {/* Top row */}
        <div className="grid grid-cols-4 gap-12 mb-16 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {/* Brand col */}
          <div className="col-span-1 max-[900px]:col-span-2">
            <Logo />
            <p className="text-[#555] text-[14px] leading-relaxed mt-5 max-w-[260px]">
              Premium car rental across Dubai. Delivered to your door, tailored to your standards.
            </p>
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

        {/* Bottom row */}
        <div className="border-t border-white/[0.07] pt-8 text-center">
          <p className="text-[#444] text-[13px]">
            &copy; {new Date().getFullYear()} Speed Switch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
