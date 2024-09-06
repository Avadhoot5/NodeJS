const mongoose = require('mongoose');
require('dotenv').config();

function connectMongoDB() {
    return mongoose.connect(process.env.MONGO_URI)
}

module.exports = {
    connectMongoDB
}