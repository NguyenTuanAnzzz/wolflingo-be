import IeltsExam from '../models/ieltsExam.model.js';

const getExamDataFromDB = async (id) => {
  const examId = Number(id) || 1;
  try {
    const dbExam = await IeltsExam.findOne({ id: examId }).lean();
    return dbExam;
  } catch (err) {
    console.error('Error fetching IELTS exam from MongoDB:', err.message);
    throw err;
  }
};

export const getIeltsList = async (req, res) => {
  try {
    const list = await IeltsExam.find({}, 'id title badge topic band description -_id').sort({ id: 1 }).lean();
    res.json(list || []);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching IELTS exam list', error: error.message });
  }
};

export const getIeltsReading = async (req, res) => {
  try {
    const { examId } = req.query;
    const exam = await getExamDataFromDB(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    
    res.json(exam.reading || {});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching IELTS reading sets', error: error.message });
  }
};

export const getIeltsListening = async (req, res) => {
  try {
    const { examId } = req.query;
    const exam = await getExamDataFromDB(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    
    res.json(exam.listening || {});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching IELTS listening sets', error: error.message });
  }
};

export const getIeltsVocabulary = async (req, res) => {
  try {
    const { examId } = req.query;
    const exam = await getExamDataFromDB(examId);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    
    res.json(exam.vocabulary || []);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching IELTS vocabulary sets', error: error.message });
  }
};

export const getIeltsAll = async (req, res) => {
  try {
    const { examId } = req.query;
    const id = req.params.id || examId || 1;
    const exam = await getExamDataFromDB(id);
    if (!exam) return res.status(404).json({ message: 'Exam not found' });
    
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching IELTS practice sets', error: error.message });
  }
};
