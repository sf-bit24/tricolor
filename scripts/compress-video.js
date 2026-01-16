/**
 * Video Compression Script for Web
 * Compresses 4K video to 1080p with optimized bitrate
 * Run with: node scripts/compress-video.js
 */

import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegStatic);

const INPUT_VIDEO = path.join(__dirname, '../src/assets/videos/tricolor_boucle.mp4');
const OUTPUT_VIDEO = path.join(__dirname, '../src/assets/videos/tricolor_boucle_web.mp4');

// Compression settings for web
const TARGET_BITRATE = '5000k'; // 5 Mbps - good balance for 1080p
const TARGET_WIDTH = 1920;
const TARGET_HEIGHT = 1080;

console.log('🎬 Starting video compression...');
console.log(`   Input: ${INPUT_VIDEO}`);
console.log(`   Output: ${OUTPUT_VIDEO}`);
console.log(`   Target: ${TARGET_WIDTH}x${TARGET_HEIGHT} @ ${TARGET_BITRATE}\n`);

// Get input file size
const inputStats = fs.statSync(INPUT_VIDEO);
const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);
console.log(`📦 Input size: ${inputSizeMB} MB`);

ffmpeg(INPUT_VIDEO)
    .videoCodec('libx264')
    .videoBitrate(TARGET_BITRATE)
    .size(`${TARGET_WIDTH}x${TARGET_HEIGHT}`)
    .outputOptions([
        '-preset slow',         // Better compression
        '-crf 23',              // Constant Rate Factor (18-28 is good)
        '-movflags +faststart', // Enable streaming
        '-an'                   // Remove audio (for autoplay)
    ])
    .on('start', (cmd) => {
        console.log('⚙️  FFmpeg command:', cmd);
    })
    .on('progress', (progress) => {
        if (progress.percent) {
            process.stdout.write(`\r📊 Progress: ${progress.percent.toFixed(1)}%`);
        }
    })
    .on('end', () => {
        const outputStats = fs.statSync(OUTPUT_VIDEO);
        const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
        const saved = ((inputStats.size - outputStats.size) / 1024 / 1024).toFixed(2);

        console.log(`\n\n✅ Compression complete!`);
        console.log(`   Output size: ${outputSizeMB} MB`);
        console.log(`   Saved: ${saved} MB (${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}% reduction)`);
        console.log(`\n📁 Compressed video saved to: ${OUTPUT_VIDEO}`);
        console.log(`\n💡 Next step: Update Collection2025.jsx to import 'tricolor_boucle_web.mp4'`);
    })
    .on('error', (err) => {
        console.error('\n❌ Error:', err.message);
    })
    .save(OUTPUT_VIDEO);
