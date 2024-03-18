<<<<<<< HEAD
const express = require('express');
const { getRequests, createRequest } = require('../controller/requestUser');

const requestRouter = express.Router();

requestRouter.get('/getall/:id', getRequests);

requestRouter.post('/create', createRequest);

module.exports = requestRouter;
=======
const express=require('express')
const{ getRequests }= require('../controller/requestUser')


const requestRouter=express.Router()

requestRouter.get('/getall/:id',getRequests)

module.exports=requestRouter
>>>>>>> d178a0085bbd0c028ad7a04739952787ddb4f2ea
