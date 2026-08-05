import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import vocabularyRoutes from './routes/vocabulary.routes.js';
import characterRoutes from './routes/character.routes.js';
import toeicRoutes from './routes/toeic.routes.js';
import ieltsRoutes from './routes/ielts.routes.js';
import { seedExamsData } from './scripts/seedExams.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9999;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB!');
    await seedExamsData(false);
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));


// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

app.get('/api/courses', (req, res) => {
  res.json([
    { id: '1', title: 'IELTS Mastery', description: 'Comprehensive IELTS preparation course.', type: 'IELTS' },
    { id: '2', title: 'TOEIC 900+', description: 'Intensive TOEIC practice tests and strategies.', type: 'TOEIC' },
    { id: '3', title: 'General English', description: 'Improve your everyday English communication skills.', type: 'General' },
  ]);
});

app.use('/api/vocabulary', vocabularyRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/toeic', toeicRoutes);
app.use('/api/ielts', ieltsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
