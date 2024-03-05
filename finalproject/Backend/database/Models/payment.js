const { DataTypes } = require('sequelize');
const sequelize = require('../index');

const Payment = sequelize.define('Payment', {
  idpayment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
});

module.exports = Payment;