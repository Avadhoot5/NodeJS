const express = require('express');
const app = express();
const PORT = 3000;
const users = require('./MOCK_DATA.json');


// rendering HTML document for users route
// SSR page

app.get('/users', (req, res) => {
    let html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

// Hybrid server

// REST API
app.get('/api/users', (req, res) => {
    res.json(users);
})

app.get('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    let user = users.find((user) => user.id === parseInt(userId));
    res.json(user);
})

app.post('/api/users', (req, res) => {
    console.log('User created');
    return res.json({status: 'pending'});
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})