const express = require('express');
const router = express.Router();
const professionnalController = require('../controller/admin');

router.post('/add', professionnalController.addProfessionnal);

module.exports = router;
