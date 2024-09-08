const express = require('express');
const router = express.Router();
const {
    handleSignup,
    handleSignin
} = require('../controller/user');


router.post('/signup', handleSignup)

router.post('/signin', handleSignin)

module.exports = router; 