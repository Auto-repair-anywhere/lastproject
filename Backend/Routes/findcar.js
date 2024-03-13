const express = require('express');
const router = express.Router();
const plate=require('../controller/carplate')


<<<<<<< HEAD
router.post('/car-info', plate.getCarInfoFromLicensePlate);
router.get('/verify',plate.getcar)
=======
router.post('/car-info/:userId', plate.getCarInfoFromLicensePlate);
router.get('/verify/:id',plate.getcar)
>>>>>>> ab713ac9624d57be430ff6e3844a6347b57895d1

module.exports = router;
