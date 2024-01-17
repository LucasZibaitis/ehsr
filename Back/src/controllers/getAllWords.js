const { Word } = require("../db");

const getAllWords = async (req, res) => {
  try {
    const allWords = await Word.findAll();
    return res.status(200).json({ allWords });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllWords;
