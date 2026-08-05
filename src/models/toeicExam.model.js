import mongoose from 'mongoose';

const toeicExamSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  badge: {
    type: String
  },
  topic: {
    type: String
  },
  difficulty: {
    type: String
  },
  description: {
    type: String
  },
  listening: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  reading: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true,
  strict: false
});

export default mongoose.model('ToeicExam', toeicExamSchema);
