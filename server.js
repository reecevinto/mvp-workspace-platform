const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get spaces data
app.get('/api/spaces', (req, res) => {
  fs.readFile(path.join(__dirname, 'data', 'spaces.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Server error');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// API endpoint to get counters data
app.get('/api/counters', (req, res) => {
  res.json({ spaces: 120, countries: 15, users: 350 });
});

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/spaces.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'spaces.html'));
});

app.get('/list-space.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'list-space.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
