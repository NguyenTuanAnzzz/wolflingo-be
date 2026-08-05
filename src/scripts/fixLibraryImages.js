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

const BRAIN_DIR = 'C:/Users/Admin/.gemini/antigravity-cli/brain/699021b7-5063-41b8-ab38-d70191e34b8a';
const FRONTEND_IMG_DIR = path.resolve(__dirname, '../../../frontend/public/images/toeic');

const imagesToProcess = [
  {
    localFile: path.join(BRAIN_DIR, 'library_with_people_1785794742754.jpg'),
    publicIds: ['toeic_images/q5_library_people', 'toeic_images/ex2_q6_people'],
    frontendFiles: ['q5_library.jpg', 'ex2_q6.jpg']
  },
  {
    localFile: path.join(BRAIN_DIR, 'library_researcher_people_1785794763813.jpg'),
    publicIds: ['toeic_images/ex5_q6_people', 'toeic_images/ex10_q2_people'],
    frontendFiles: ['ex5_q6.jpg', 'ex10_q2.jpg']
  },
  {
    localFile: path.join(BRAIN_DIR, 'library_employees_reading_1785794780957.jpg'),
    publicIds: ['toeic_images/ex6_q3_people'],
    frontendFiles: ['ex6_q3.jpg']
  }
];

async function run() {
  try {
    console.log('--- Bắt đầu sửa ảnh Thư viện (Library) có người ---');
    if (!fs.existsSync(FRONTEND_IMG_DIR)) {
      fs.mkdirSync(FRONTEND_IMG_DIR, { recursive: true });
    }

    const uploadedUrls = {};

    for (const item of imagesToProcess) {
      if (!fs.existsSync(item.localFile)) {
        console.error(`Không tìm thấy file: ${item.localFile}`);
        continue;
      }
      for (const fFile of item.frontendFiles) {
        const targetPath = path.join(FRONTEND_IMG_DIR, fFile);
        fs.copyFileSync(item.localFile, targetPath);
        console.log(`Đã copy ${item.localFile} -> ${fFile}`);
      }

      for (const publicId of item.publicIds) {
        console.log(`Đang upload ${publicId} lên Cloudinary...`);
        const res = await cloudinary.uploader.upload(item.localFile, {
          public_id: publicId,
          overwrite: true,
          resource_type: 'image'
        });
        console.log(` -> Upload thành công: ${res.secure_url}`);
        uploadedUrls[publicId] = res.secure_url;
      }
    }

    console.log('\n--- Cập nhật file toeicExams.js ---');
    const toeicExamsPath = path.resolve(__dirname, '../data/toeicExams.js');
    let contentExams = fs.readFileSync(toeicExamsPath, 'utf-8');

    if (uploadedUrls['toeic_images/q5_library_people']) {
      contentExams = contentExams.replace(
        /q5:\s*"https:\/\/res\.cloudinary\.com\/[^"]+"/g,
        `q5: "${uploadedUrls['toeic_images/q5_library_people']}"`
      );
    }
    if (uploadedUrls['toeic_images/ex2_q6_people']) {
      contentExams = contentExams.replace(
        /https:\/\/res\.cloudinary\.com\/[^"]+ex2_q6\.jpg/g,
        uploadedUrls['toeic_images/ex2_q6_people']
      );
      contentExams = contentExams.replace(
        /https:\/\/images\.unsplash\.com\/[^"]+1568667256549[^"]*/g,
        uploadedUrls['toeic_images/ex2_q6_people']
      );
    }
    if (uploadedUrls['toeic_images/ex5_q6_people']) {
      contentExams = contentExams.replace(
        /https:\/\/res\.cloudinary\.com\/[^"]+ex5_q6\.jpg/g,
        uploadedUrls['toeic_images/ex5_q6_people']
      );
      contentExams = contentExams.replace(
        /https:\/\/images\.unsplash\.com\/[^"]+1481627834876[^"]*/g,
        uploadedUrls['toeic_images/ex5_q6_people']
      );
    }
    if (uploadedUrls['toeic_images/ex6_q3_people']) {
      contentExams = contentExams.replace(
        /https:\/\/res\.cloudinary\.com\/[^"]+ex6_q3\.jpg/g,
        uploadedUrls['toeic_images/ex6_q3_people']
      );
      contentExams = contentExams.replace(
        /https:\/\/images\.unsplash\.com\/[^"]+1524178232363[^"]*/g,
        uploadedUrls['toeic_images/ex6_q3_people']
      );
    }
    if (uploadedUrls['toeic_images/ex10_q2_people']) {
      contentExams = contentExams.replace(
        /https:\/\/res\.cloudinary\.com\/[^"]+ex10_q2\.jpg/g,
        uploadedUrls['toeic_images/ex10_q2_people']
      );
      contentExams = contentExams.replace(
        /https:\/\/images\.unsplash\.com\/[^"]+1505664194779[^"]*/g,
        uploadedUrls['toeic_images/ex10_q2_people']
      );
    }

    fs.writeFileSync(toeicExamsPath, contentExams, 'utf-8');
    console.log('Đã cập nhật toeicExams.js thành công!');

    console.log('\n--- Cập nhật file toeicData.js ---');
    const toeicDataPath = path.resolve(__dirname, '../data/toeicData.js');
    let contentData = fs.readFileSync(toeicDataPath, 'utf-8');

    if (uploadedUrls['toeic_images/q5_library_people']) {
      contentData = contentData.replace(
        /https:\/\/res\.cloudinary\.com\/[^"]+q5_library\.jpg/g,
        uploadedUrls['toeic_images/q5_library_people']
      );
    }

    fs.writeFileSync(toeicDataPath, contentData, 'utf-8');
    console.log('Đã cập nhật toeicData.js thành công!');

    console.log('\n--- Kết nối MongoDB và Seed lại dữ liệu ---');
    if (!process.env.MONGODB_URI) {
      throw new Error('Chưa cấu hình MONGODB_URI trong .env');
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Đã kết nối MongoDB. Đang seed dữ liệu với force = true...');
    await seedExamsData(true);

    await mongoose.disconnect();
    console.log('\n=== HÀN TẤT! TẤT CẢ CÁC ĐỀ THI ĐÃ CÓ ẢNH THƯ VIỆN CHUẨN CÓ NGƯỜI ===');
  } catch (error) {
    console.error('Lỗi khi cập nhật ảnh:', error);
    process.exit(1);
  }
}

run();
