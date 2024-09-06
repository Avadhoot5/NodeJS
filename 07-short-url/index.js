const express = require('express');
const PORT = 3000;
const app = express();
const { connectMongoDB } = require('./connection');
const urlRoute = require('./routes/url');

// Parsing the body
app.use(express.json());

// MongoDB connect 
connectMongoDB()
.then(() => console.log('Connected to Database'))
.catch(() => console.log('DB not connected'))

// Routes
app.use('/url', urlRoute);

app.listen(PORT, () => {
    `App Listening on Port ${PORT}`
})