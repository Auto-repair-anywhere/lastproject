const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Cart = sequelize.define('Cart', {
  idCart: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  CartQuantity: DataTypes.INTEGER
});

module.exports = Cart;