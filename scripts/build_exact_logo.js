import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generate() {
  console.log('Downloading official Plus Jakarta Sans bold font...');
  const fontUrl = 'https://fonts.gstatic.com/s/plusjakartasans/v12/LDIbaomQNQcsA88c7O9yZ4KMCoOg4IA6-91aHEjcWuA_KUnNSg.ttf';
  const fontBuf = Buffer.from(await (await fetch(fontUrl)).arrayBuffer());
  const fontBase64 = fontBuf.toString('base64');

  // Exact SVG definition matching the uploaded image geometry
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 400" width="1440" height="400">
  <defs>
    <style>
      @font-face {
        font-family: 'PlusJakarta';
        src: url('data:font/truetype;charset=utf-8;base64,${fontBase64}') format('truetype');
        font-weight: 800;
        font-style: normal;
      }
      .brand-just {
        font-family: 'PlusJakarta', sans-serif;
        font-size: 195px;
        font-weight: 800;
        letter-spacing: -2px;
      }
      .brand-promot {
        font-family: 'PlusJakarta', sans-serif;
        font-size: 195px;
        font-weight: 800;
        letter-spacing: -2px;
      }
    </style>
  </defs>

  <!-- Clean background -->
  <rect width="1440" height="400" fill="white"/>

  <!-- Left Monogram Icon -->
  <g id="logo-mark" transform="translate(60, 48)">
    <!-- J Glyph - Deep Navy #051329 -->
    <path
      d="M 160 30
         L 98 30
         L 98 178
         C 98 226 72 258 28 258
         C 10 258 -4 250 -18 238
         L 8 194
         C 15 200 24 205 35 205
         C 48 205 54 196 54 178
         L 54 30
         L 160 30 Z"
      fill="#051329"
    />

    <!-- Intersecting P Glyph - Electric Royal Blue #0066FF -->
    <!-- Outer loop + fluid bottom hook tail -->
    <path
      d="M 112 30
         L 230 30
         C 308 30 358 72 358 136
         C 358 198 308 240 234 240
         L 174 240
         C 158 240 148 252 148 268
         C 148 285 136 298 118 298
         C 102 298 90 285 90 268
         C 90 208 126 186 168 186
         L 225 186
         C 260 186 286 166 286 136
         C 286 106 260 84 225 84
         L 112 84 Z"
      fill="#0066FF"
    />

    <!-- Refined J terminal cut and hook -->
    <path
      d="M 54 30
         L 98 30
         L 98 175
         C 98 224 74 255 30 255
         C 12 255 -2 248 -16 236
         L 9 194
         C 16 200 24 204 34 204
         C 48 204 54 196 54 180 Z"
      fill="#051329"
    />

    <!-- Smooth P lower tail swoosh connecting with the stem -->
    <path
      d="M 112 30
         L 165 30
         L 165 180
         C 165 224 188 248 226 248
         C 240 248 250 256 250 268
         C 250 282 238 294 218 294
         C 155 294 112 246 112 180 Z"
      fill="#0066FF"
    />
  </g>

  <!-- Typography Wordmark -->
  <!-- "Just" in Deep Navy -->
  <text x="475" y="254" class="brand-just" fill="#051329">Just</text>
  <!-- "Promot" in Electric Royal Blue -->
  <text x="845" y="254" class="brand-promot" fill="#0066FF">Promot</text>
</svg>
`;

  const publicDir = path.resolve(__dirname, '../public');
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svg.trim());

  // Render high-res PNG
  const pngBuffer = await sharp(Buffer.from(svg))
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'Just Promot Web logo.png'), pngBuffer);
  fs.writeFileSync(path.join(publicDir, 'logo.png'), pngBuffer);

  // Also create a transparent version
  const transparentSvg = svg.replace('<rect width="1440" height="400" fill="white"/>', '');
  const transparentPng = await sharp(Buffer.from(transparentSvg))
    .png({ quality: 100 })
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'logo-transparent.png'), transparentPng);

  console.log('SUCCESS: Generated pixel-perfect JustPromot logo assets:');
  console.log('- public/Just Promot Web logo.png (' + pngBuffer.length + ' bytes)');
  console.log('- public/logo.png');
  console.log('- public/logo.svg');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
