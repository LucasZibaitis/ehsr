const { Word } = require("../db");

const postWord = async (req, res) => {
  try {
    const { word } = req.body;

    const existingWord = await Word.findOne({
      where: { word: word },
    });

    if (existingWord) {
      return res
        .status(400)
        .json({ error: "La palabra ya existe en la base de datos." });
    }

    const newWord = await Word.create({ word });
    return res.status(201).json(newWord);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postWord;
