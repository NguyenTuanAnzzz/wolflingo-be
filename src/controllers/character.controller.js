import Character from '../models/character.model.js';

// Get all characters
export const getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find().select('-bio -quotes -gallery');
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single character by id (string id like 'batman')
export const getCharacterById = async (req, res) => {
  try {
    const character = await Character.findOne({ id: req.params.id });
    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
