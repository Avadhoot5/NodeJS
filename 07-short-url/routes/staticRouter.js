const express = require('express');
const router = express.Router();
const {URL} = require('../model/urlShort');

router.get('/', async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', {
        urls: allUrls
    });
})

module.exports = router;