import { readFileSync, writeFileSync, mkdirSync } from 'fs';

function extract(filename) {
  let svg = readFileSync(filename, 'utf8');
  const vb = (svg.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 24 24';
  let inner = svg
    .replace(/<\?xml[^>]*\?>/g, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<svg[^>]*>/g, '')
    .replace(/<\/svg>/g, '')
    .trim()
    .replace(/fill="#[0-9a-fA-F]{3,8}"/g, 'fill="currentColor"')
    .replace(/stroke="#[0-9a-fA-F]{3,8}"/g, 'stroke="currentColor"')
    .replace(/\n+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return { vb, inner };
}

const files = {
  'Mercedes-Benz': 'public/logos/mercedes.svg',
  'Audi': 'public/logos/audi.svg',
  'BMW': 'public/logos/bmw.svg',
  'Bentley': 'public/logos/bentley.svg',
  'Cadillac': 'public/logos/cadillac.svg',
  'Rolls-Royce': 'public/logos/rollsroyce.svg',
  'Dodge': 'public/logos/dodge.svg',
  'Nissan': 'public/logos/nissan.svg',
  'Land Rover': 'public/logos/landrover.svg',
  'Lamborghini': 'public/logos/lamborghini.svg',
};

let out = '// Auto-generated brand SVG marks\n';
out += 'export interface BrandSvg { vb: string; d: string; }\n';
out += 'export const brandSvgs: Record<string, BrandSvg> = {\n';
for (const [brand, file] of Object.entries(files)) {
  const { vb, inner } = extract(file);
  out += `  ${JSON.stringify(brand)}: { vb: ${JSON.stringify(vb)}, d: ${JSON.stringify(inner)} },\n`;
}
out += '};\n';

mkdirSync('src/assets', { recursive: true });
writeFileSync('src/assets/brandLogos.ts', out);
console.log('Written src/assets/brandLogos.ts, size:', out.length);
