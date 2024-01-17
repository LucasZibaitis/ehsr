const { Randomname } = require("../db");

const getRandomName = async (req, res) => {
  try {
    const randomName = await Randomname.findOne({
      order: [[Randomname.sequelize.random()]],
    });
    if (!randomName) {
      return res
        .status(404)
        .json({ error: "No se encontraron nombres aleatorios." });
    }
    return res.status(200).json(randomName);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getRandomName;
