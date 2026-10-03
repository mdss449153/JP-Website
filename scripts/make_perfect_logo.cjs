const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const opentype = require('opentype.js');

async function build() {
  const buf = fs.readFileSync('/tmp/poppins.ttf');
  const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));

  // Font size for wordmark
  const fontSize = 175;
  const scale = fontSize / font.unitsPerEm;

  // Exact letter positioning
  const justGlyphs = font.stringToGlyphs('Just');
  let justAdvance = 0;
  for (const g of justGlyphs) {
    justAdvance += g.advanceWidth;
  }
  const justWidth = justAdvance * scale;

  // Baseline y-position
  const baselineY = 245;
  const startX = 390;

  const justPath = font.getPath('Just', startX, baselineY, fontSize);
  const promotPath = font.getPath('Promot', startX + justWidth, baselineY, fontSize);

  const justD = justPath.toPathData();
  const promotD = promotPath.toPathData();

  // Monogram coordinates matching the uploaded image:
  // J: Navy #001438
  // P: Electric Blue #0066FF
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1360 360" width="1360" height="360">
  <!-- Clean white background matching uploaded image -->
  <rect width="1360" height="360" fill="#ffffff"/>

  <!-- Left Monogram (JP Mark) -->
  <g id="monogram" transform="translate(45, 38)">
    <!-- J Element (Navy) -->
    <!-- Top stem down to hook with angled terminal cut -->
    <path
      d="M 148 24
         L 92 24
         L 92 165
         C 92 208 68 238 28 238
         C 10 238 -4 230 -16 218
         L 8 180
         C 14 186 22 190 32 190
         C 45 190 50 182 50 166
         L 50 24
         L 148 24 Z"
      fill="#021438"
    />
    
    <!-- P Element (Electric Blue #0066FF) -->
    <!-- Upper loop + lower dynamic swooping droplet leg -->
    <path
      d="M 106 24
         L 215 24
         C 285 24 330 62 330 120
         C 330 176 285 214 218 214
         L 162 214
         C 148 214 138 224 138 238
         C 138 254 126 266 110 266
         C 94 266 84 254 84 238
         C 84 184 118 164 156 164
         L 210 164
         C 242 164 266 146 266 120
         C 266 94 242 74 210 74
         L 106 74 Z"
      fill="#0066FF"
    />

    <!-- Overlapping J tail perfection -->
    <path
      d="M 50 24
         L 92 24
         L 92 162
         C 92 205 70 234 30 234
         C 12 234 -2 226 -14 216
         L 9 180
         C 15 186 22 189 31 189
         C 44 189 50 182 50 167 Z"
      fill="#021438"
    />

    <!-- Fluid lower P curve -->
    <path
      d="M 106 24
         L 155 24
         L 155 160
         C 155 200 175 222 210 222
         C 222 222 232 230 232 240
         C 232 252 220 262 202 262
         C 145 262 106 218 106 160 Z"
      fill="#0066FF"
    />
  </g>

  <!-- Wordmark Letters directly rendered as exact SVG Paths -->
  <!-- "Just" in Deep Navy -->
  <path d="${justD}" fill="#021438" />

  <!-- "Promot" in Electric Royal Blue -->
  <path d="${promotD}" fill="#0066FF" />
</svg>`;

  const publicDir = path.resolve(__dirname, '../public');
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svg.trim());

  // Render High-Resolution PNG with sharp
  const pngBuffer = await sharp(Buffer.from(svg))
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'Just Promot Web logo.png'), pngBuffer);
  fs.writeFileSync(path.join(publicDir, 'logo.png'), pngBuffer);

  // Dist directory if exists
  const distDir = path.resolve(__dirname, '../dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'Just Promot Web logo.png'), pngBuffer);
    fs.writeFileSync(path.join(distDir, 'logo.png'), pngBuffer);
    fs.writeFileSync(path.join(distDir, 'logo.svg'), svg.trim());
  }

  console.log('SUCCESS: Generated 100% vector-precise official logo!');
  console.log('PNG size:', pngBuffer.length);
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
