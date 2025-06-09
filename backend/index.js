const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Backend API is running!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});