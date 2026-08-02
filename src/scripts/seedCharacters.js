import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Character from '../models/character.model.js';
import { characters } from '../../../frontend/src/data/characters.js';

dotenv.config();

const seedCharacters = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing characters
    await Character.deleteMany({});
    console.log('Cleared existing characters');

    // Insert new characters
    await Character.insertMany(characters);
    console.log('Successfully seeded characters data');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding characters:', error);
    process.exit(1);
  }
};

seedCharacters();
