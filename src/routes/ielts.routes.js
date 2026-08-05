import express from 'express';
import { getIeltsList, getIeltsReading, getIeltsListening, getIeltsVocabulary, getIeltsAll } from '../controllers/ielts.controller.js';

const router = express.Router();

router.get('/', getIeltsAll);
router.get('/list', getIeltsList);
router.get('/reading', getIeltsReading);
router.get('/listening', getIeltsListening);
router.get('/vocabulary', getIeltsVocabulary);
router.get('/:id', getIeltsAll);

export default router;
