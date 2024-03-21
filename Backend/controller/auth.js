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

async function addProfessionelPosition(req, res) {
    try {
        const { latitude, longitude, id_user } = req.body;

        const existingUser = await connection.User.findOne({ where: { iduser: id_user } });

        if (existingUser) {
            await existingUser.update({ latitude, longitude });
            res.status(200).json({ message: 'Professional position updated successfully', data: existingUser });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating professional position:', error);
        res.status(500).json({ message: 'Failed to update professional position', error: error.message });
    }
}


async function getProfessionelPositionById(req, res) {
    try {
        const { idUser } = req.params;

        const position = await connection.User.findOne({
            where: {
                iduser: idUser
            }
        });

        if (!position) {
            return res.status(404).json({ message: 'Professional position not found' });
        }

        res.status(200).json({ message: 'Professional position found', data: position });
    } catch (error) {
        console.error('Error getting professional position by user ID:', error);
        res.status(500).json({ message: 'Failed to get professional position', error: error.message });
    }
}



module.exports={ signupUser ,loginUser,getProfessionelPositionById, addProfessionelPosition}