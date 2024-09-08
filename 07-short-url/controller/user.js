const { User } = require('../model/user');

const handleSignup = async (req, res) => {
    const { name, email, password } = req.body;
    const data = await User.create({
        name, email, password
    });
    return res.render('home');
}

const handleSignin = async (req, res) => {
    const { email, password } = req.body;
    const data = await User.create({
        email, password
    });
    return res.render('home');
}




module.exports = {
    handleSignup,
    handleSignin
}