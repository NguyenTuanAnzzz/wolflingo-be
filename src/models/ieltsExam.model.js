import mongoose from 'mongoose';

const ieltsExamSchema = new mongoose.Schema({
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
  band: {
    type: String
  },
  description: {
    type: String
  },
  reading: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  listening: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  vocabulary: {
    type: mongoose.Schema.Types.Mixed,
    default: []
  }
}, {
  timestamps: true,
  strict: false
});

export default mongoose.model('IeltsExam', ieltsExamSchema);
