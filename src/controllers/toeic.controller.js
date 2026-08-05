import ToeicExam from '../models/toeicExam.model.js';

const getExamDataFromDB = async (id) => {
  const examId = Number(id) || 1;
  try {
    const dbExam = await ToeicExam.findOne({ id: examId }).lean();
    return dbExam;
  } catch (err) {
    console.error('Error fetching TOEIC exam from MongoDB:', err.message);
    throw err;
  }
};

export const getToeicList = async (req, res) => {
  try {
    const list = await ToeicExam.find({}, 'id title badge topic difficulty description -_id').sort({ id: 1 }).lean();
    res.json(list || []);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching TOEIC exam list', error: error.message });
  }
};

export const getToeicListening = async (req, res) => {
  try {
    const { part, examId } = req.query;
    const exam = await getExamDataFromDB(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    
    if (part && exam.listening && exam.listening[part]) {
      return res.json(exam.listening[part]);
    }
    return res.json(exam.listening || {});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching TOEIC listening sets', error: error.message });
  }
};

export const getToeicReading = async (req, res) => {
  try {
    const { part, examId } = req.query;
    const exam = await getExamDataFromDB(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    
    if (part && exam.reading && exam.reading[part]) {
      return res.json(exam.reading[part]);
    }
    return res.json(exam.reading || {});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching TOEIC reading sets', error: error.message });
  }
};

export const getToeicAll = async (req, res) => {
  try {
    const { examId } = req.query;
    const id = req.params.id || examId || 1;
    const exam = await getExamDataFromDB(id);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching TOEIC practice sets', error: error.message });
  }
};
