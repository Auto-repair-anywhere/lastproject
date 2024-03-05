const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Image = sequelize.define('Image', {
  imgId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  img: DataTypes.STRING
});

module.exports = Image;