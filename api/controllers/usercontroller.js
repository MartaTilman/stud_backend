const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    console.log(req.body);
    const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
    });

    try {
        await newUser.save();
        return res.status(200).json({
            title: 'signup success'
        });
    } catch (error) {
        return res.status(400).json({
            title: 'error',
            error: 'Email in use!'
        });
    }
}
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(401).json({
                title: 'user not found',
                error: 'invalid credentials',
            });
        }

        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'login failed',
                error: 'invalid credentials',
            });
        }


        const token = jwt.sign({ userId: user._id }, 'secretkey');
        res.status(200).json({
            title: 'Login successful!',
            token: token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            title: 'server error',
            error: err.message,
        });
    }
};