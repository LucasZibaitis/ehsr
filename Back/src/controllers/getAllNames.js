const { Word, Randomname, Authorname } = require("../db");

const getAllNames = async (req, res) => {
  try {
    const allNames = await Authorname.findAll();
    return res.status(200).json({ allNames });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getAllNames;
