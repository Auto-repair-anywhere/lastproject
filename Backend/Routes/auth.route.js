const express = require('express');
const authrouter = express.Router();
const {signupUser,loginUser, addProfessionelPosition, getProfessionelPositionById} = require('../controller/auth');



authrouter.post('/signup', signupUser );



authrouter.post('/login', loginUser);

authrouter.post('/professionel_positions', addProfessionelPosition);

authrouter.get('/professionel_positions/:id_driver', getProfessionelPositionById);


module.exports = authrouter