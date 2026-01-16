/**
 * Saint Gervais Video Compression Script
 * Run with: node scripts/compress-saint-gervais.js
 */

import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

ffmpeg.setFfmpegPath(ffmpegStatic);

const INPUT_VIDEO = path.join(__dirname, '../src/assets/videos/saint_gervais.mp4');
const OUTPUT_VIDEO = path.join(__dirname, '../src/assets/videos/saint_gervais_web.mp4');

console.log('🎬 Compressing saint_gervais.mp4...');

const inputStats = fs.statSync(INPUT_VIDEO);
console.log(`📦 Input size: ${(inputStats.size / 1024 / 1024).toFixed(2)} MB`);

ffmpeg(INPUT_VIDEO)
    .videoCodec('libx264')
    .videoBitrate('3000k')
    .size('1280x720')
    .outputOptions(['-preset slow', '-crf 26', '-movflags +faststart', '-an'])
    .on('progress', (p) => p.percent && process.stdout.write(`\r📊 Progress: ${p.percent.toFixed(1)}%`))
    .on('end', () => {
        const outputStats = fs.statSync(OUTPUT_VIDEO);
        console.log(`\n\n✅ Done! ${(outputStats.size / 1024 / 1024).toFixed(2)} MB (saved ${((1 - outputStats.size / inputStats.size) * 100).toFixed(1)}%)`);
    })
    .on('error', (err) => console.error('❌ Error:', err.message))
    .save(OUTPUT_VIDEO);
