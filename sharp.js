
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target).forEach((image) => {
  // resize the image to 800px wide, with the prefix -large.jpg
  sharp(`${target}/${image}`)
    .resize(800)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-large.jpg`));

  // resize the image to 480px wide, with the prefix -small.jpg
  sharp(`${target}/${image}`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-small.jpg`));
});
