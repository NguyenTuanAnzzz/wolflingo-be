import { Vocabulary } from '../models/vocabulary.model.js';

export const getVocabulary = async (req, res) => {
  try {
    const vocabularies = await Vocabulary.find({});
    
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
