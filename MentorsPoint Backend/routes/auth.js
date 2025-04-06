const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register a new user
router.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Login (basic example - in reality, use bcrypt for passwords)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials!' });
    }
    res.json({ message: 'Login successful!', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;