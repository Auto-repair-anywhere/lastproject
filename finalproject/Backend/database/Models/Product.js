const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Product = sequelize.define('Product', {
  prodId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  price: DataTypes.INTEGER,
  file: DataTypes.STRING
});

module.exports = Product;