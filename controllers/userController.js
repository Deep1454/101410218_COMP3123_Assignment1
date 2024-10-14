const User = require('../models/User'); // importing the user file from the models
const bcrypt = require('bcryptjs'); // importing the bycrypt.js for managing the password with security measures like Hasdedpassword.
const jwt = require('jsonwebtoken'); // importing the jsonwebtoken for providing the token to each user uo succesful login.

// creating a signup function for handling signup endpoint and handles the user registartion
exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user_id: newUser._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// This function will handle the login endpoint and handles the user authentication 
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Username or Password is not correct please check and try it again' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
