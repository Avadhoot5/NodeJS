const express = require('express');
const PORT = 3000;
const app = express();
const { connectMongoDB } = require('./connection');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');
const path = require('path');

// Parsing the body
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// MongoDB connect 
connectMongoDB()
.then(() => console.log('Connected to Database'))
.catch(() => console.log('DB not connected'))

// view setup
app.set('view engine', 'ejs');

app.set('views', path.resolve('./views'))

// Routes
app.use('/url', urlRoute);
app.use('/', staticRoute);
app.use('/user', userRoute);

app.listen(PORT, () => {
    `App Listening on Port ${PORT}`
})