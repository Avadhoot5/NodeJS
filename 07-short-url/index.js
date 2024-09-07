const express = require('express');
const PORT = 3000;
const app = express();
const { connectMongoDB } = require('./connection');
const urlRoute = require('./routes/url');
const path = require('path');
const {URL} = require('./model/urlShort');

// Parsing the body
app.use(express.json());

// MongoDB connect 
connectMongoDB()
.then(() => console.log('Connected to Database'))
.catch(() => console.log('DB not connected'))

// view setup
app.set('view engine', 'ejs');

app.set('views', path.resolve('./views'))

app.get('/test', async (req, res) => {
    const allUrls = await URL.find({});
    return res.render('home', {
        urls: allUrls
    });
})

// Routes
app.use('/url', urlRoute);

app.listen(PORT, () => {
    `App Listening on Port ${PORT}`
})