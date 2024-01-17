const { Authorname } = require("../db");

const postAuthorName = async (req, res) => {
  try {
    const { name } = req.body;

    const existingAuthorName = await Authorname.findOne({
      where: { name: name },
    });

    if (existingAuthorName) {
      return res
        .status(400)
        .json({ error: "El nombre de autor ya existe en la base de datos." });
    }

    const newAuthorName = await Authorname.create({ name });
    return res.status(201).json(newAuthorName);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postAuthorName;
