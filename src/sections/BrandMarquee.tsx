import { brandSvgs } from '../assets/brandLogos';

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

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section id="brands" className="relative border-y border-black/[0.05] overflow-hidden">
      <div className="relative overflow-hidden w-full">
        <div className="marquee-track flex w-max items-center">
          {doubled.map((b, i) => {
            const lg = brandSvgs[b];
            return (
              <div key={`${b}-${i}`} className="li-wrap select-none">
                <svg viewBox={lg?.vb ?? '0 0 24 24'} aria-label={b} dangerouslySetInnerHTML={{ __html: lg?.d ?? '' }} />
                <span className="li-name">{b}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
