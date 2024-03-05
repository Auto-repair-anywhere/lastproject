const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role: DataTypes.STRING,
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  age: DataTypes.INTEGER,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  image: DataTypes.STRING
});

module.exports = User;