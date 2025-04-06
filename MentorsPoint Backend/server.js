const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/user');
const app = express();
const cors = require('cors');

// Allow frontend to connect
app.use(cors());
app.use(bodyParser.json());

// Allow requests from your frontend (replace with your frontend URL)
app.use(cors({
  origin: 'https://mentorspoint.github.io/Mentorspoint2912/', // For React/Vue
  // or origin: 'http://your-website.com' (for live sites)
}));

// Signup
app.post('/signup', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = new User({ email, password });
      await user.save();
      res.status(201).json({ message: 'User created!' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
// Login
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(401).json({ error: 'User not found!' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(401).json({ error: 'Wrong password!' });
  
      // Create a token (for staying logged in)
      const token = jwt.sign({ userId: user._id }, 'secret-key', { expiresIn: '1h' });
      res.json({ token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Connect to MongoDB (we'll set this up later)
mongoose.connect('mongodb+srv://mentorspoint2912:Suvarnraj12/29Meghraj@mentorspoint.fnh1z.mongodb.net/?retryWrites=true&w=majority&appName=MentorsPoint')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.log('Error:', err));

// Simple route to test
app.get('/', (req, res) => {
  res.send('Backend is working! 🚀');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});