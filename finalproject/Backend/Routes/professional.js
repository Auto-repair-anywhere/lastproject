const express=require('express')
const {getAllRequests}=require('../controller/professional')

const professionalRouter=express.Router()

professionalRouter.get('/getall/:id',getAllRequests)

module.exports=professionalRouter