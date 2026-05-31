const brands = [
  { name: 'BMW',        src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg' },
  { name: 'Audi',       src: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/audi.png' },
  { name: 'Bentley',    src: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/bentley.png' },
  { name: 'Cadillac',   src: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/cadillac.png' },
  { name: 'Rolls-Royce',src: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/rolls-royce.png' },
  { name: 'Dodge',      src: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/dodge.png' },
  { name: 'Nissan',     src: 'https://cdn.jsdelivr.net/gh/filippofilip95/car-logos-dataset@master/logos/optimized/nissan.png' },
];

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <section id="brands" className="relative overflow-hidden" style={{ background: '#F7BF35', zIndex: 20 }}>
      <div className="relative overflow-hidden w-full pt-10 pb-10">
        <div className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #F7BF35, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #F7BF35, transparent)' }} />

        <div className="marquee-track flex w-max items-center">
          {doubled.map((b, i) => (
            <div key={`${b.name}-${i}`} className="li-wrap select-none flex items-center justify-center" style={{ padding: '0 48px' }}>
              <img
                src={b.src}
                alt={b.name}
                style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
