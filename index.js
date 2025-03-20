const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());  

// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to MafStudio WatchPay API');
});

// সার্ভার চালানো
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${port}`);
});
}
