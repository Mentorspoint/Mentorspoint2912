const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Register a new user
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).send("User saved");
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