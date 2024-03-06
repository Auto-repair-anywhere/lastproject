const connection = require('../db/index.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config()
const secretKey =process.env.JWT_SECRET
console.log("secret",secretKey)


const signupUser = async (req, res) => {
    try {
        const { firstname, lastname,email,password,image} = req.body

    const newUser = await connection.User.create({
        firstname:firstname,
        lastname:lastname,
        email:email,
        password: await bcrypt.hash(password, 10),
        image: image,
        })
        return res.status(200).json(newUser)
    } catch (err) {
        console.error('Error in registering user:', err);;
    }
}
const loginUser = async (req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password
        const user = await connection.User.findOne({
            where: {email:email}
        })
        if (!user) {
            return res.status(404).json('Email not found');
        }
        const hashepwd=user.password
        const passwordValid = await bcrypt.compare(password,hashepwd)
        if (!passwordValid) {
            return res.status(401).json('Incorrect email or password ')
        }
        const token = await jwt.sign({email: user.email}, secretKey)
        res.send({token:token,user:user}) 
    

    } catch (err) {
       console.error('Error in signing in user:', err)
    }
}
module.exports={ signupUser ,loginUser}