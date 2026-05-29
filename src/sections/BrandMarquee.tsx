const brands = [
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
    <div className="flex min-w-[192px] items-center justify-center px-8 select-none">
      <span className="font-display text-[22px] font-extrabold uppercase tracking-[0.08em] text-[#1A1A1A]/65 transition-colors duration-300 hover:text-[#CFA64A]">
        {name}
      </span>
    </div>
  );
}

export default function BrandMarquee() {
  // Doubling the array exactly matches the -50% translation keyframe
  // this creates a mathematically perfect, seamless infinite loop with NO jumps or restarts!
  const doubled = [...brands, ...brands];

  return (


    <section id="brands" className="relative border-y border-black/[0.05] py-10 overflow-hidden" style={{ background: 'oklch(100% 0 0)' }}>
      <div className="relative overflow-hidden w-full">
        <div className="marquee-track flex w-max items-center">
          {doubled.map((brand, i) => (
            <BrandItem key={`${brand}-${i}`} name={brand} />
          ))}
        </div>
      </div>
    </section>


  );
}
