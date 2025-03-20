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
  }

  // নতুন ইউজার সংরক্ষণ করা
  const newUser = { id: users.length + 1, username, email, password };
  users.push(newUser);

  res.status(201).json({ message: 'User registered successfully', user: newUser });
});  // **এই `}` মিসিং ছিল, এটা যোগ করো**

// **সার্ভার চালু করা**
const port = 4000;
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
}
