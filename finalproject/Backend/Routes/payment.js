const express=require('express')
const { add,verify } = require('../controller/payment')

const paymentRouter=express.Router()

paymentRouter.post('/pay',add)
paymentRouter.post('/pay/:id',verify)

module.exports=paymentRouter