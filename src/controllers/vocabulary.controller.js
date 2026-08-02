import { Vocabulary } from '../models/vocabulary.model.js';

export const getVocabularySummary = async (req, res) => {
  try {
    const summary = await Vocabulary.aggregate([
      { $group: { _id: "$level", count: { $sum: 1 } } }
    ]);
    const counts = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0 };
    let total = 0;
    summary.forEach(item => {
      if (item._id) {
        const level = item._id.toUpperCase();
        counts[level] = item.count;
        total += item.count;
      }
    });
    res.json({ total, counts });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching summary', error: error.message });
  }
};

export const getVocabulary = async (req, res) => {
  try {
    const query = {};
    if (req.query.level) {
      // Case-insensitive regex match for level
      query.level = { $regex: new RegExp(`^${req.query.level}$`, 'i') };
    }
    
    const vocabularies = await Vocabulary.find(query);
    
    // Map data to the format the frontend expects:
    const formattedData = vocabularies.map(item => ({
      id: item._id.toString(),
      word: item.word,
      meaning: item.meaning,
      level: item.level,
      example: `Level: ${item.level} | Pronunciation: ${item.pronunciation}`,
    }));

    res.json(formattedData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching vocabulary', error: error.message });
  }
};
