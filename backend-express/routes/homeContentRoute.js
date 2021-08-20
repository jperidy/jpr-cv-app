const express = require('express');
const { getHomePageContent } = require('../controllers/homeContentController');

const router = express.Router();

router.route('/')
    .get(getHomePageContent);

module.exports = router;
