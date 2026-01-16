const sharp = require('sharp');
const path = require('path');

const images = [
    { input: 'src/assets/images/doudounebeau.jpg', output: 'src/assets/images/optimized/doudounebeau.webp' },
    { input: 'src/assets/images/manteaubeau.JPG', output: 'src/assets/images/optimized/manteaubeau.webp' },
    { input: 'src/assets/images/vestebeau.JPG', output: 'src/assets/images/optimized/vestebeau.webp' },
];

async function convert() {
    for (const img of images) {
        try {
            await sharp(img.input)
                .webp({ quality: 80 })
                .toFile(img.output);
            console.log(`✅ Converted: ${img.output}`);
        } catch (err) {
            console.error(`❌ Error converting ${img.input}:`, err.message);
        }
    }
}

convert();
