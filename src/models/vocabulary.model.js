import mongoose from 'mongoose';

const vocabularySchema = new mongoose.Schema({
  word: String,
  pos: String,
  pronunciation: String,
  meaning: String,
  level: String,
});

export const Vocabulary = mongoose.model('Vocabulary', vocabularySchema);
