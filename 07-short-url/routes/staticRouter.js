const express = require('express');
const router = express.Router();
const {URL} = require('../model/urlShort');

router.get('/', async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', {
        urls: allUrls
    });
})

router.get('/signup', async (req, res) => {
    return res.render('signup')
})

router.get('/signin', async (req, res) => {
    return res.render('signin')
})

module.exports = router;