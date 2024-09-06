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
router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', addUser)

router.patch('/:id', updateUser)

// Delete a user
router.delete('/:id', deleteUser)

module.exports = router;