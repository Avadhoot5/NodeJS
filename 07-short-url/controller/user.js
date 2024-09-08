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
    const user = await User.find({
        email, password
    });
    if (!user) {
        return res.render('signin', {
            error: 'Invalid Username or password'
        })
    }
}




module.exports = {
    handleSignup,
    handleSignin
}