const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
require('dotenv').config();
const userRouter = require('./controller/userController');

app.use(express.json());

// mongoose connect URL
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
