const express = require('express');
const { getWeather } = require('../controllers/weatherControllers');

const router = express.Router();

router.route('/')
    .get(getWeather);

module.exports = router;
