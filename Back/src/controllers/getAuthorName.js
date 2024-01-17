const { Authorname } = require("../db");

const getAuthorName = async (req, res) => {
  try {
    const authorName = await Authorname.findOne({
      order: [[Authorname.sequelize.random()]],
    });
    if (!authorName) {
      return res
        .status(404)
        .json({ error: "No se encontraron nombres de autor." });
    }
    return res.status(200).json(authorName);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAuthorName;
