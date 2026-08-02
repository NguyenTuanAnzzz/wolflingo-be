import express from 'express';
import { getVocabulary } from '../controllers/vocabulary.controller.js';

const router = express.Router();

// GET /api/vocabulary
router.get('/', getVocabulary);

export default router;
