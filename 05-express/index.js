const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello from main page");
})

app.get('/about', (req, res) => {
    res.send('hello from about page');
})


app.listen(3000, ()=> {
    console.log("server listening on port 3000");
})

