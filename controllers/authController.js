const User = require('../models/User');
const jwt = require('jsonwebtoken');

const MAXAGE = 10 * 365 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, 'cura_fci', {
        expiresIn: MAXAGE,
    });
};
const signup_post = async (req, res) => {
    const { id, password } = req.body;
    try {
        const user = await User.create({ id, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: MAXAGE * 1000 });

        res.status(201).json({ user: user._id });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};
module.exports = {
    signup_post,
};
