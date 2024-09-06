const {User} = require('../db/user');

let getAllUsers = async (req, res) => {
    const users = await User.find({ });
    if (users) {
        res.status(200).json({users})
    } else {
        res.status(400).json({message: 'Not able to get users'});
    }
}

let getUser = async (req, res) => {
    const userId = req.params.id
    try {
        let user = await User.findById(userId);
        if (!user) {
            res.status(404).json({message: 'No user present with such ID'});
        } else {
           res.status(200).json({user});
        }
    } catch (error) {
        res.status(404).json({message: 'user not found'});
    }
}

let addUser = async (req, res) => {
    const body = req.body;
    if (!body || !body.firstName || !body.lastName || !body.email || !body.jobTitle) {
        res.status(400).json({message: 'All fields are required'})
    }
    try {
        const user = await User.create(body);
        if (user) {
            res.status(201).json({'User created sucessfully!': user._id});
        } else {
            res.status(401).json({message: 'Not able to create user'});
        }
    } catch (error) {
        res.status(400).json({message: 'Please enter correct credentials'});
    }
}

let updateUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const updateUser = await User.findByIdAndUpdate(userId, req.body)
        if (updateUser) {
            res.status(200).json({message: 'User updated'})
        } else {
            return res.status(400).json({message: "User ID not found"});
        }
    } catch (error) {
        res.status(400).json({message: 'User not updated'})
    }
}

let deleteUser = async (req, res) => {
    const userId = req.params.id;
    try {
        const deleteUser = await User.findByIdAndDelete(userId)
        if (deleteUser) {
            res.status(200).json({message: 'User Deleted'})
        } else {
            return res.status(400).json({message: "User ID not found"});
        }
    } catch (error) {
        res.status(400).json({message: 'Unable to delete user'})
    }
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updateUser,
    deleteUser
}