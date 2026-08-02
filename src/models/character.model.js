import mongoose from 'mongoose';

const bioSchema = new mongoose.Schema({
  heading: {
    en: { type: String, required: true },
    vi: { type: String, required: true }
  },
  text: {
    en: { type: String, required: true },
    vi: { type: String, required: true }
  },
  image: {
    type: String
  }
}, { _id: false });

const vocabularySchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  },
  meaning: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}, { _id: false });

const quoteSchema = new mongoose.Schema({
  en: {
    type: String,
    required: true
  },
  vi: {
    type: String,
    required: true
  }
}, { _id: false });

const characterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  bio: [bioSchema],
  gallery: [String],
  vocabulary: [vocabularySchema],
  quotes: [quoteSchema]
}, {
  timestamps: true
});

export default mongoose.model('Character', characterSchema);
