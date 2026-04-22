const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint 1 — Home
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! 👋',
    author: 'Racheal Adeyemo',
    cohort: 'She Code Africa'
  });
});

// Endpoint 2 — Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});