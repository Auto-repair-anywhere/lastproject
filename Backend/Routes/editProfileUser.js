const express=require('express')
const {updateUser} = require('../controller/editProfileUser')

const userRouter = express.Router()


userRouter.put('/put/:iduser',updateUser)

module.exports = userRouter