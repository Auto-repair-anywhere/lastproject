const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Comment = sequelize.define('Comment', {
  idcomments: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  commentscol: DataTypes.TEXT
});

module.exports = Comment;