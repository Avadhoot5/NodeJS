const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    jobTitle: {
        type: String
    },
}, {timest} )

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}
