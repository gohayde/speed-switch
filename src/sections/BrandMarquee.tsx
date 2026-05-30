const CDN = 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized';

const brands = [
  { name: 'Mercedes-Benz', file: 'mercedes-benz' },
  { name: 'Audi',          file: 'audi' },
  { name: 'BMW',           file: 'bmw' },
  { name: 'Bentley',       file: 'bentley' },
  { name: 'Cadillac',      file: 'cadillac' },
  { name: 'Rolls-Royce',   file: 'rolls-royce' },
  { name: 'Dodge',         file: 'dodge' },
  { name: 'Nissan',        file: 'nissan' },
  { name: 'Land Rover',    file: 'land-rover' },
  { name: 'Lamborghini',   file: 'lamborghini' },
];

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section id="brands" className="relative overflow-hidden" style={{ background: 'oklch(13% 0.010 82)', zIndex: 20 }}>
      {/* Top rule */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(207,166,74,0.20) 30%, rgba(207,166,74,0.20) 70%, transparent)' }} />

      {/* Marquee track */}
      <div className="relative overflow-hidden w-full pt-14 pb-14">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, oklch(13% 0.010 82), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, oklch(13% 0.010 82), transparent)' }} />

        <div className="marquee-track flex w-max items-center">
          {doubled.map((b, i) => (
            <div key={`${b.file}-${i}`} className="li-wrap select-none">
              <img
                src={`${CDN}/${b.file}.png`}
                alt={b.name}
                className="brand-logo"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.04) 70%, transparent)' }} />
    </section>
  );
}
