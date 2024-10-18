const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Ensure the correct import of the User model
const { body, validationResult } = require('express-validator');

// Replace this with your actual secret key, and keep it secure!
const JWT_SECRET = 'your_jwt_secret_key';

router.post('/loginuser', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('name').isLength({ min: 5 }).withMessage('Name must be at least 5 characters long')
], async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password, location } = req.body; // Extract data from req body

        // Check if the user with the given email already exists
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({ success: false, message: 'User with this email already exists' });
        }

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        const securepass = await bcrypt.hash(password, salt);

        // Create a new user
        user = await User.create({
            name: name,
            email: email,
            password: securepass,
            location: location
        });

        // Create a JWT token
        const data = {
            user: {
                id: user.id
            }
        };

        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour

        // Send the token in response
        res.json({ success: true, message: 'User created successfully', authToken: authToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router;
