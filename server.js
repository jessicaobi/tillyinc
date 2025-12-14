// Import required modules
const express = require('express');
const path = require('path');
// require('dotenv').config();

const app = express();
app.use(express.json());


// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// app.get('/', (req, res) => {
//   res.send('Welcome to Tilly Inc!');
// });


//Need this for the Heroku Web Application to Run. Needed some assitance, and will edit later

// serve static assets when in production
const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// example API route (keep or remove)
app.get('/api/health', (req, res) => res.json({ ok: true }));

// SPA fallback: serve index.html for any other route in production
app.get('*', (req, res) => {
  if (isProd) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    res.send('Development server: run "npm run dev" for client');
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// ...existing code...