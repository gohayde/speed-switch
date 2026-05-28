import { ArrowRight, CalendarDays, CarFront, ChevronDown, MapPin, Search, UserRound } from 'lucide-react';

function Logo() {
  return (
    <a className="inline-flex items-center gap-[18px]" href="#" aria-label="Speed Switch home">
      <span className="relative w-[39px] h-[39px] inline-block" aria-hidden="true">
        <span className="absolute left-[16px] top-[-2px] w-[10px] h-[43px] rounded-[1px] bg-[#CFA64A] rotate-[42deg]" />
        <span className="absolute left-[16px] top-[-2px] w-[10px] h-[43px] rounded-[1px] bg-[#CFA64A] rotate-[-42deg]" />
      </span>
      <span className="text-[clamp(22px,1.55vw,30px)] leading-none font-extrabold tracking-[0.15em]">SPEED SWITCH</span>
    </a>
  );
}

function Nav() {
  const items = ['Home', 'Vehicles', 'Locations', 'Experiences', 'About Us'];
  return (
    <header className="relative z-[4] grid items-center gap-6 w-[min(91%,1740px)] mx-auto pt-[clamp(24px,3.2vh,38px)]"
      style={{ gridTemplateColumns: '245px 1fr 310px' }}>
      <Logo />
      <nav className="flex justify-center items-center gap-[clamp(42px,4.6vw,73px)] font-bold text-[clamp(15px,0.93vw,18px)] max-[900px]:hidden">
        {items.map(item => (
          <a key={item} href="#"
            className={`relative py-3 transition-colors duration-[180ms] hover:text-[#CFA64A] ${item === 'Home' ? 'after:content-[""] after:absolute after:left-1/2 after:-bottom-[7px] after:w-[7px] after:h-[7px] after:-translate-x-1/2 after:rounded-full after:bg-[#CFA64A]' : ''}`}>
            {item}
          </a>
        ))}
      </nav>
      <div className="flex justify-end items-center gap-12 max-[900px]:gap-3">
        <button className="grid place-items-center w-12 h-12 rounded-full border-2 border-[#1A1A1A] bg-transparent transition-all duration-[180ms] hover:-translate-y-px hover:border-[#CFA64A] hover:text-[#CFA64A] max-[560px]:hidden"
          aria-label="Open profile">
          <UserRound size={25} strokeWidth={1.7} />
        </button>
        <a href="#" className="inline-flex items-center justify-center gap-[18px] min-w-[199px] min-h-[63px] px-7 rounded-[8px] font-bold text-[17px] bg-[#CFA64A] shadow-[0_14px_28px_rgba(207,166,74,0.22)] transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_18px_34px_rgba(207,166,74,0.3)] max-[900px]:min-w-[154px] max-[900px]:min-h-[52px] max-[560px]:min-w-[128px] max-[560px]:min-h-[46px] max-[560px]:text-[14px]">
          <span>Book Now</span>
          <ArrowRight size={25} strokeWidth={1.8} />
        </a>
      </div>
    </header>
  );
}

function SearchField({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <button type="button"
      className="relative grid items-center min-w-0 min-h-[68px] pr-[18px] text-left bg-transparent border-0 border-r border-black/10 transition-colors duration-[180ms] hover:bg-[rgba(207,166,74,0.06)] [&:nth-of-type(2)]:pl-[31px] [&:nth-of-type(3)]:pl-[31px]"
      style={{ gridTemplateColumns: '42px 1fr 20px' }}>
      <Icon className="justify-self-start" size={30} strokeWidth={1.8} />
      <span className="flex flex-col gap-[10px] min-w-0">
        <span className="text-[#8F9198] text-[15px] leading-none font-medium">{label}</span>
        <span className="overflow-hidden whitespace-nowrap text-ellipsis text-[17px] leading-[1.1] font-extrabold">{value}</span>
      </span>
      <ChevronDown className="justify-self-end text-[#70747a]" size={20} strokeWidth={1.8} />
    </button>
  );
}

export default function Hero() {
  return (
    <main className="relative min-h-screen overflow-hidden isolate bg-[#F8F7F3]">
      <img className="absolute inset-0 w-full h-full object-cover object-[center_bottom] -z-[4]"
        src="/assets/hero-bg.png" alt="" aria-hidden />
      <div className="absolute inset-0 -z-[3] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 49% 16%, rgba(255,255,255,0.58), transparent 26%), radial-gradient(circle at 16% 34%, rgba(207,166,74,0.08), transparent 25%), linear-gradient(180deg, rgba(255,255,255,0.34), transparent 38%)' }} />
      <Nav />
      <section className="relative z-[3] w-[min(1180px,92vw)] mx-auto mt-8 text-center" aria-labelledby="hero-title">
        <h1 id="hero-title" className="flex flex-col items-center m-0 font-[family-name:var(--font-display)] text-[clamp(58px,5.95vw,101px)] leading-[0.82] font-bold uppercase"
          style={{ fontFamily: "'Space Grotesk', 'Manrope', Arial, sans-serif", textShadow: '0 1px 0 #303030, 0 2px 0 rgba(255,255,255,0.2)' }}>
          <span className="block" style={{ transform: 'scaleX(1.13)', transformOrigin: 'center' }}>Premium Car</span>
          <span className="block" style={{ transform: 'scaleX(1.13)', transformOrigin: 'center' }}>Rental</span>
        </h1>
        <p className="max-w-[640px] mx-auto mt-3 mb-5 text-[#777B82] text-[clamp(18px,1.25vw,22px)] leading-[1.22] font-medium">
          Drive extraordinary. Luxury cars, simple booking, unforgettable experiences.
        </p>
        <form className="grid items-center w-[min(962px,82vw)] min-h-[110px] mx-auto px-[37px] py-[14px] pr-[26px] rounded-[19px] bg-[rgba(255,255,255,0.88)] shadow-[0_18px_38px_rgba(36,28,20,0.11)] backdrop-blur-[14px] max-[900px]:grid-cols-1 max-[900px]:w-[min(560px,90vw)] max-[900px]:min-h-0 max-[900px]:p-3 max-[900px]:rounded-[18px]"
          style={{ gridTemplateColumns: '1fr 1.08fr 1.12fr 104px' }}
          aria-label="Search rental cars">
          <SearchField icon={CarFront} label="Car Type" value="Luxury SUV" />
          <SearchField icon={MapPin} label="Pick-up Location" value="Dubai, UAE" />
          <SearchField icon={CalendarDays} label="Date" value="May 24 – May 27" />
          <button type="submit"
            className="grid place-items-center gap-2 w-[116px] h-[84px] px-[10px] py-[11px] border-0 rounded-[8px] bg-[#CFA64A] shadow-[0_13px_24px_rgba(207,166,74,0.3)] text-[17px] font-extrabold cursor-pointer transition-all duration-[180ms] hover:-translate-y-[2px] hover:shadow-[0_18px_34px_rgba(207,166,74,0.3)] max-[900px]:w-full max-[900px]:h-16 max-[900px]:grid-flow-col max-[900px]:mt-[11px]">
            <Search size={31} strokeWidth={1.8} />
            <span>Search</span>
          </button>
        </form>
      </section>
      <img className="absolute z-[2] left-1/2 -translate-x-1/2 bottom-[clamp(-108px,-10vh,-78px)] w-[min(1350px,79vw)] max-w-none pointer-events-none"
        style={{ filter: 'drop-shadow(0 24px 23px rgba(44,34,20,0.22))' }}
        src="/assets/hero-car.png" alt="Yellow luxury SUV" />
    </main>
  );
}
