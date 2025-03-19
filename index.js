const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  // JSON পার্সিংয়ের জন্য middleware

// ইন-মেমরি ডাটাবেস
let users = [];

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to MafStudio WatchPay API');
});

// Register Route
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
