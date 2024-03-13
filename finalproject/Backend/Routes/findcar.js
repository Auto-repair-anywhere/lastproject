const express = require('express');
const router = express.Router();
const plate=require('../controller/carplate')


router.post('/car-info', plate.getCarInfoFromLicensePlate);
router.get('/verify',plate.getcar)

module.exports = router;
