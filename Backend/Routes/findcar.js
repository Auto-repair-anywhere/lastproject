const express = require('express');
const router = express.Router();
const plate=require('../controller/carplate')


router.post('/car-info/:userId', plate.getCarInfoFromLicensePlate);
router.get('/verify/:id',plate.getcar)

module.exports = router;
