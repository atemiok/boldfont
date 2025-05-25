const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'icon.png': 32,
  'apple-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
};

async function generateFavicons() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  // Use PNG as the source
  const sourcePath = path.join(process.cwd(), 'src', 'app', 'favicon-source.png');
  if (!fs.existsSync(sourcePath)) {
    console.error('favicon-source.png not found in src/app directory');
    process.exit(1);
  }

  for (const [filename, size] of Object.entries(sizes)) {
    try {
      await sharp(sourcePath)
        .resize(size, size)
        .toFile(path.join(publicDir, filename));
      console.log(`Generated ${filename}`);
    } catch (error) {
      console.error(`Error generating ${filename}:`, error);
    }
  }
}

generateFavicons().catch(console.error); 