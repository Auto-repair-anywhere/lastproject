const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Wishlist = sequelize.define('Wishlist', {
  idWishlist: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Wishlist;