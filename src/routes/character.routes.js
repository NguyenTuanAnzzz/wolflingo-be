import express from 'express';
import * as characterController from '../controllers/character.controller.js';
const router = express.Router();

// GET /api/characters
router.get('/', characterController.getAllCharacters);

// GET /api/characters/:id
router.get('/:id', characterController.getCharacterById);

export default router;
