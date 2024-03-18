const express = require('express');
const { getRequests, createRequest } = require('../controller/requestUser');

const requestRouter = express.Router();

requestRouter.get('/getall/:id', getRequests);

requestRouter.post('/create', createRequest);

module.exports = requestRouter;
