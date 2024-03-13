const express = require('express');
const router = express.Router();
const plate=require('../controller/carplate')


router.post('/car-info', plate.getCarInfoFromLicensePlate);


module.exports = router;
