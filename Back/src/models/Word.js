const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "word",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      word: { type: DataTypes.STRING(40), allowNull: false, unique: true },
    },
    {
      timestamps: false,
    }
  );
};
