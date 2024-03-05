const { Sequelize,DataTypes} = require('sequelize')
const mysql = require('mysql2')

const connection = new Sequelize('commerce', 'root', '1234', {
    host:'localhost',
    dialect:'mysql'
})

connection.authenticate() 
.then(()=>{
    console.log("connection has been successfully establissshed");
})
.catch((err)=>{
    console.log(err);
})


module.exports = connection