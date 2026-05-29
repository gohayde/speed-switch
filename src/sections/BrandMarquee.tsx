interface Brand {
  name: string;
  slug: string;
}

const brands: Brand[] = [
  { name: 'Mercedes-Benz', slug: 'mercedes-benz' },
  { name: 'Audi', slug: 'audi' },
  { name: 'BMW', slug: 'bmw' },
  { name: 'Bentley', slug: 'bentley' },
  { name: 'Cadillac', slug: 'cadillac' },
  { name: 'Rolls-Royce', slug: 'rolls-royce' },
  { name: 'Dodge', slug: 'dodge' },
  { name: 'Nissan', slug: 'nissan' },
  { name: 'Land Rover', slug: 'land-rover' },
  { name: 'Lamborghini', slug: 'lamborghini' },
];

function BrandItem({ brand }: { brand: Brand }) {
  const { name, slug } = brand;

  // Use the official flat vector SVG for BMW, and high-quality colored PNGs for the other brands
  const logoSrc = slug === 'bmw'
    ? 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg'
    : `https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/${slug}.png`;

  return (
    <div className="flex items-center justify-center px-8 select-none group cursor-pointer">
      <div className="relative w-32 h-24 flex items-center justify-center">
        {/* Exact Official Colored Logo: 100% full colors and full opacity at all times. Zooms up on hover */}
        <img
          src={logoSrc}
          alt={`${name} official logo`}
          className="max-w-[100px] h-15 object-contain transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] opacity-100 group-hover:scale-120"
          loading="lazy"
        />
      </div>
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
            <BrandItem key={`${brand.slug}-${i}`} brand={brand} />
          ))}
        </div>
      </div>
    </section>


  );
}
