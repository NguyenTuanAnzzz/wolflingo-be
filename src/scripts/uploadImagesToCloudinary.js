import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { seedExamsData } from './seedExams.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGES_DIR = path.resolve(__dirname, '../../../frontend/public/images/toeic');
const DATA_FILE = path.resolve(__dirname, '../data/toeicData.js');

async function uploadImagesAndUpdateData() {
  try {
    console.log('--- Bắt đầu Upload ảnh TOEIC lên Cloudinary ---');
    console.log(`Cloud Name: ${process.env.CLOUDINARY_CLOUD_NAME}`);
    
    if (!fs.existsSync(IMAGES_DIR)) {
      throw new Error(`Không tìm thấy thư mục ảnh: ${IMAGES_DIR}`);
    }

    const files = fs.readdirSync(IMAGES_DIR).filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
    console.log(`Tìm thấy ${files.length} file ảnh trong: ${IMAGES_DIR}`);

    const urlMap = {};

    for (const file of files) {
      const filePath = path.join(IMAGES_DIR, file);
      const publicId = `toeic_images/${path.parse(file).name}`;
      console.log(`Đang tải lên: ${file} -> public_id: ${publicId} ...`);

      const res = await cloudinary.uploader.upload(filePath, {
        public_id: publicId,
        overwrite: true,
        resource_type: 'image',
      });

      console.log(`  -> Thành công! URL: ${res.secure_url}`);
      urlMap[`/images/toeic/${file}`] = res.secure_url;
    }

    console.log('\n--- Bắt đầu cập nhật URL vào toeicData.js và toeicExams.js ---');
    const dataFiles = [
      path.resolve(__dirname, '../data/toeicData.js'),
      path.resolve(__dirname, '../data/toeicExams.js'),
    ];
    let totalReplaced = 0;

    for (const file of dataFiles) {
      let content = fs.readFileSync(file, 'utf-8');
      let replacedCount = 0;
      for (const [oldUrl, newUrl] of Object.entries(urlMap)) {
        const regex = new RegExp(oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = content.match(regex);
        if (matches) {
          content = content.replace(regex, newUrl);
          replacedCount += matches.length;
          console.log(`[${path.basename(file)}] Đã thay thế: ${oldUrl} (${matches.length} vị trí)`);
        }
      }
      fs.writeFileSync(file, content, 'utf-8');
      totalReplaced += replacedCount;
    }
    console.log(`\nĐã lưu thay đổi vào file dữ liệu (${totalReplaced} đường dẫn được cập nhật)!`);

    console.log('\n--- Bắt đầu đồng bộ dữ liệu mới vào MongoDB ---');
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Đã kết nối MongoDB thành công!');
      await seedExamsData(true);
      await mongoose.disconnect();
      console.log('Đã cập nhật dữ liệu kèm URL Cloudinary vào MongoDB thành công!');
    } else {
      console.log('Không có MONGODB_URI trong .env, bỏ qua đồng bộ MongoDB.');
    }

    console.log('\n✅ HOÀN TẤT TOÀN BỘ QUÁ TRÌNH!');
  } catch (err) {
    console.error('❌ Lỗi upload ảnh lên Cloudinary:', err);
    process.exit(1);
  }
}

uploadImagesAndUpdateData();
