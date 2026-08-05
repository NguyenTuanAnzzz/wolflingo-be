import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ToeicExam from '../models/toeicExam.model.js';
import IeltsExam from '../models/ieltsExam.model.js';
import { toeicExamsList, toeicExamsData } from '../data/toeicExams.js';
import { ieltsExamsList, ieltsExamsData } from '../data/ieltsExams.js';

dotenv.config();

export const seedExamsData = async (force = false) => {
  try {
    // Check and seed TOEIC exams
    const toeicCount = await ToeicExam.countDocuments({});
    if (force || toeicCount === 0) {
      const toeicDocs = toeicExamsList.map((item) => ({
        ...item,
        ...(toeicExamsData[item.id] || {})
      }));
      const toeicOps = toeicDocs.map((doc) => ({
        updateOne: {
          filter: { id: doc.id },
          update: { $set: doc },
          upsert: true
        }
      }));
      await ToeicExam.bulkWrite(toeicOps);
      console.log(`Successfully seeded/updated ${toeicDocs.length} TOEIC exams into MongoDB.`);
    } else {
      console.log(`TOEIC exams collection already has ${toeicCount} documents.`);
    }

    // Check and seed IELTS exams
    const ieltsCount = await IeltsExam.countDocuments({});
    if (force || ieltsCount === 0) {
      const ieltsDocs = ieltsExamsList.map((item) => ({
        ...item,
        ...(ieltsExamsData[item.id] || {})
      }));
      const ieltsOps = ieltsDocs.map((doc) => ({
        updateOne: {
          filter: { id: doc.id },
          update: { $set: doc },
          upsert: true
        }
      }));
      await IeltsExam.bulkWrite(ieltsOps);
      console.log(`Successfully seeded/updated ${ieltsDocs.length} IELTS exams into MongoDB.`);
    } else {
      console.log(`IELTS exams collection already has ${ieltsCount} documents.`);
    }
  } catch (error) {
    console.error('Error seeding exam data into MongoDB:', error);
    throw error;
  }
};

// If run directly from CLI
if (process.argv[1] && process.argv[1].endsWith('seedExams.js')) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
      console.log('Connected to MongoDB for seeding exams...');
      await seedExamsData(true); // Force re-seed when run manually
      process.exit(0);
    })
    .catch((err) => {
      console.error('Database connection error:', err);
      process.exit(1);
    });
}
