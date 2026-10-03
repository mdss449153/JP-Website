import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgLogo = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1520 440" width="1520" height="440">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800;900&amp;display=swap');
      .font-just {
        font-family: 'Plus Jakarta Sans', 'Liberation Sans', 'FreeSans', -apple-system, sans-serif;
        font-size: 204px;
        font-weight: 900;
        letter-spacing: -3px;
      }
    </style>
  </defs>

  <!-- Transparent background -->
  <rect width="1520" height="440" fill="transparent"/>

  <g transform="translate(60, 45)">
    <!-- Monogram: JP Symbol matching uploaded image -->
    <!-- J Element: Deep Navy (#001438) -->
    <path
      d="M 175 40 
         L 115 40 
         L 115 190 
         C 115 240 85 275 35 275 
         C 15 275 0 265 -15 250 
         L 10 205 
         C 18 212 28 218 42 218 
         C 58 218 65 208 65 188 
         L 65 40 
         L 175 40 Z"
      fill="#001438"
    />
    
    <!-- P Outer Bowl and Fluid Hook Tail: Electric Blue (#0066FF) -->
    <path
      d="M 125 40 
         L 245 40 
         C 325 40 375 80 375 145 
         C 375 205 325 245 250 245 
         L 190 245 
         C 172 245 160 258 160 274 
         C 160 292 148 305 130 305 
         C 112 305 100 292 100 275 
         C 100 215 135 190 180 190 
         L 240 190 
         C 278 190 305 170 305 145 
         C 305 120 278 98 240 98 
         L 125 98 Z"
      fill="#0066FF"
    />

    <!-- Overlapping J tail perfection matching uploaded image -->
    <path
      d="M 65 40 
         L 115 40 
         L 115 185 
         C 115 235 88 270 40 270 
         C 18 270 0 260 -15 245 
         L 12 205 
         C 20 212 30 218 42 218 
         C 58 218 65 208 65 190 Z"
      fill="#001438"
    />

    <!-- P lower dynamic swoop curve -->
    <path
      d="M 125 40 
         L 180 40 
         L 180 190 
         C 180 235 205 260 245 260 
         C 260 260 270 268 270 280 
         C 270 294 256 305 235 305 
         C 170 305 125 255 125 190 Z"
      fill="#0066FF"
    />
  </g>

  <!-- Wordmark: Just in Navy, Promot in Electric Blue -->
  <text x="495" y="260" class="font-just" fill="#001438">Just</text>
  <text x="880" y="260" class="font-just" fill="#0066FF">Promot</text>
</svg>
`;

async function main() {
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Write SVG
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgLogo.trim());

  // 2. Render High-Resolution PNG with sharp
  const pngBuffer = await sharp(Buffer.from(svgLogo))
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'Just Promot Web logo.png'), pngBuffer);
  fs.writeFileSync(path.join(publicDir, 'logo.png'), pngBuffer);

  // Also create a version on white background
  const whiteBgSvg = svgLogo.replace('fill="transparent"', 'fill="#ffffff"');
  const whiteBgPng = await sharp(Buffer.from(whiteBgSvg))
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'logo-white-bg.png'), whiteBgPng);

  console.log('SUCCESS: Generated official JustPromot logo files in /public:');
  console.log('- /public/Just Promot Web logo.png');
  console.log('- /public/logo.png');
  console.log('- /public/logo.svg');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
