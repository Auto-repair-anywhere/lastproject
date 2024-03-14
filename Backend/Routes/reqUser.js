const express=require('express')
const{ getRequests }= require('../controller/requestUser')


const requestRouter=express.Router()

requestRouter.get('/getall/:id',getRequests)

module.exports=requestRouter