import express from 'express';
import { getVocabulary, getVocabularySummary } from '../controllers/vocabulary.controller.js';

const router = express.Router();

// GET /api/vocabulary/summary
router.get('/summary', getVocabularySummary);

// GET /api/vocabulary
router.get('/', getVocabulary);

export default router;
