const express = require('express');
const app = express();
const PORT = 3000;
const users = require('./MOCK_DATA.json');
const fs = require('fs');

app.use(express.json());

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
    if (!user) {
        res.status(400).json({message: "user not found"});
    }
    res.json(user);
})

app.post('/api/users', (req, res) => {
    const id = users.length + 1;
    const userData = {id, ...req.body};
    users.push(userData);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) console.log("not able to write the data");
        return res.status(201).json({'User created sucessfully!': id});
    })
})

app.patch('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);
    const updatedDetails = {id: userId, ...req.body};

    if (userIndex > -1) {
        users[userIndex] = updatedDetails;
    } else {
        return res.status(400).json({message: "user not found"});
    }

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        if (err) console.log("not able to write the data");
        return res.status(201).json({'User details updated sucessfully!': userId});
    })

})

// Delete a user
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    let deleteUser = users.filter((user) => user.id !== userId);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(deleteUser), (err, data) => {
        if (err) console.log("not able to write the data");
        if (!err) {
            return res.status(201).json({message: 'User deleted sucessfully!'});
        } else {
            return res.status(401).json({message: 'User Not Found!'})
        }
    })
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})