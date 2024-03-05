const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Rating = sequelize.define('Rating', {
  idrating: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  rating: DataTypes.INTEGER
});

module.exports = Rating;