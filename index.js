const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
