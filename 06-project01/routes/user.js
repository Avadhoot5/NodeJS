const express = require('express');
const router = express.Router()

const {
    getAllUsers,
    addUser,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

// REST API
router.get('/users', getAllUsers)

router.get('/users/:id', getUser)

router.post('/users', addUser)

router.patch('/users/:id', updateUser)

// Delete a user
router.delete('/users/:id', deleteUser)

module.exports = router;