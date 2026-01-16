/**
 * Image Optimization Script
 * Converts heavy JPG/JFIF images to WebP format
 * Run with: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../src/assets/images');
const OUTPUT_DIR = path.join(__dirname, '../src/assets/images/optimized');

// Images larger than 500KB will be converted
const SIZE_THRESHOLD = 500 * 1024;

// WebP quality setting (0-100)
const WEBP_QUALITY = 80;

// Max width for resize (maintains aspect ratio)
const MAX_WIDTH = 1920;

async function optimizeImages() {
    console.log('🖼️  Starting image optimization...\n');

    // Create output directory
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const files = fs.readdirSync(IMAGES_DIR);
    const imageFiles = files.filter(f =>
        /\.(jpg|jpeg|jfif|png)$/i.test(f) &&
        !fs.statSync(path.join(IMAGES_DIR, f)).isDirectory()
    );

    let totalSaved = 0;

    for (const file of imageFiles) {
        const inputPath = path.join(IMAGES_DIR, file);
        const stats = fs.statSync(inputPath);

        if (stats.size < SIZE_THRESHOLD) {
            console.log(`⏭️  Skipping ${file} (${(stats.size / 1024).toFixed(0)}KB - under threshold)`);
            continue;
        }

        const outputName = file.replace(/\.(jpg|jpeg|jfif|png)$/i, '.webp');
        const outputPath = path.join(OUTPUT_DIR, outputName);

        try {
            await sharp(inputPath)
                .resize(MAX_WIDTH, null, {
                    withoutEnlargement: true,
                    fit: 'inside'
                })
                .webp({ quality: WEBP_QUALITY })
                .toFile(outputPath);

            const newStats = fs.statSync(outputPath);
            const saved = stats.size - newStats.size;
            totalSaved += saved;

            console.log(`✅ ${file} → ${outputName}`);
            console.log(`   ${(stats.size / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024).toFixed(0)}KB (saved ${(saved / 1024 / 1024).toFixed(2)}MB)`);
        } catch (err) {
            console.error(`❌ Error processing ${file}:`, err.message);
        }
    }

    console.log(`\n🎉 Done! Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
    console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
}

optimizeImages();
