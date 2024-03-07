const express = require('express');
const authrouter = express.Router();
const {signupUser,loginUser} = require('../controller/auth');



authrouter.post('/signup', signupUser );



authrouter.post('/login', loginUser);

module.exports = authrouter