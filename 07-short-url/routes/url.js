const express = require('express');
const router = express.Router();
const {
    handleShortUrl,
    handleRedirect,
    handleAnalytics
} = require('../controller/url');


// get the url from user
router.post('/', handleShortUrl);



router.get('/url/:id', handleRedirect);

router.get('/analytics/:id', handleAnalytics);

module.exports = router;
