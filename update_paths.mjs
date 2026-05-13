import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  'src/components/WhoWeAre.jsx',
  'src/components/News.jsx',
  'src/components/Hero.jsx',
  'src/components/Gallery.jsx',
  'src/components/Destinations.jsx',
  'index.html'
];

for (const file of filesToUpdate) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    // regex to replace .png with .webp ONLY for paths starting with /assets/images/
    content = content.replace(/(\/assets\/images\/[^'"]+)\.png/g, '$1.webp');
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
  }
}
