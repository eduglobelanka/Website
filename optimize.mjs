import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public/assets/images');

async function optimizeImages() {
  try {
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const filePath = path.join(directoryPath, file);
        const newFilePath = path.join(directoryPath, file.replace(/\.(png|jpe?g)$/i, '.webp'));

        console.log(`Optimizing ${file}...`);

        let image = sharp(filePath);

        // Get metadata to optionally resize
        const metadata = await image.metadata();
        if (metadata.width > 1200 && file !== 'hero_bg.png') {
           image = image.resize(1200);
        } else if (file === 'hero_bg.png' && metadata.width > 1920) {
           image = image.resize(1920); // Hero can be a bit larger, but not huge
        }

        await image.webp({ quality: 75 }).toFile(newFilePath);
        console.log(`Created ${newFilePath}`);
      }
    }
    console.log('All images optimized!');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
