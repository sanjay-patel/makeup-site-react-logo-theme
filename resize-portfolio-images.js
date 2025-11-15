const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const portfolioDir = './public/images/portfolio';
const targetWidth = 800;
const targetHeight = 800;

async function resizeImages() {
  try {
    const files = fs.readdirSync(portfolioDir);
    const imageFiles = files.filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to resize`);

    for (const file of imageFiles) {
      const inputPath = path.join(portfolioDir, file);
      const outputPath = inputPath; // Overwrite original

      console.log(`Resizing ${file}...`);

      await sharp(inputPath)
        .resize(targetWidth, targetHeight, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 90 })
        .toFile(inputPath + '.tmp');

      // Replace original with resized version
      fs.renameSync(inputPath + '.tmp', outputPath);

      console.log(`✓ Resized ${file} to ${targetWidth}x${targetHeight}`);
    }

    console.log('\nAll images resized successfully!');
  } catch (error) {
    console.error('Error resizing images:', error);
    process.exit(1);
  }
}

resizeImages();
