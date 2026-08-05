import express from 'express';
import { getToeicList, getToeicListening, getToeicReading, getToeicAll } from '../controllers/toeic.controller.js';

const router = express.Router();

router.get('/', getToeicAll);
router.get('/list', getToeicList);
router.get('/listening', getToeicListening);
router.get('/reading', getToeicReading);
router.get('/:id', getToeicAll);

export default router;
