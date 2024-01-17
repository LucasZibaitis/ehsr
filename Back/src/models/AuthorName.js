const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "authorname",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
    },
    {
      timestamps: false,
    }
  );
};
