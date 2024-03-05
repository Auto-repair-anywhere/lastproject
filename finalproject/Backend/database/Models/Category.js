const { DataTypes } = require('sequelize');
const sequelize = require("../index");

const Category = sequelize.define('Category', {
  catId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  content: DataTypes.STRING
});

module.exports = Category;