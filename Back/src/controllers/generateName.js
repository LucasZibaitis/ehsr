const { Word, Randomname } = require("../db");
const { Op } = require("sequelize");

const generateName = async (req, res) => {
  const minWords = 2;
  const maxWords = 4;
  const numberOfWordsToSelect =
    Math.floor(Math.random() * (maxWords - minWords + 1)) + minWords;
  try {
    const allWords = await Word.findAll();

    // Verificar si hay al menos dos palabras disponibles
    if (allWords.length < numberOfWordsToSelect) {
      console.log(
        "No hay suficientes palabras disponibles para crear un nuevo Name."
      );
      return;
    }

    // Seleccionar dos palabras aleatorias
    const randomWords = allWords
      .sort(() => Math.random() - 0.5)
      .slice(0, numberOfWordsToSelect);

    // Crear un nuevo Name con las palabras seleccionadas
    const newNameValue = randomWords.map((word) => word.word).join(" ");

    const existingName = await Randomname.findOne({
      where: {
        [Op.and]: [
          { name: { [Op.like]: `%${randomWords[0].word}%` } },
          { name: { [Op.like]: `%${randomWords[1].word}%` } },
        ],
      },
    });

    if (existingName) {
      console.log(`${newNameValue} ya existe, o existe uno similar.`);
      return;
    }
    const newName = await Randomname.create({
      name: newNameValue,
    });

    console.log("Nuevo Name creado:", newName.name);
  } catch (error) {
    console.error(error);
  }
};

module.exports = generateName;
