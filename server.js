// // Import required modules
// const express = require('express');
// const path = require('path');
// // require('dotenv').config();

// const app = express();
// app.use(express.json());


// // // Start the server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });

// // app.get('/', (req, res) => {
// //   res.send('Welcome to Tilly Inc!');
// // });


// //Need this for the Heroku Web Application to Run. Needed some assitance, and will edit later

// // serve static assets when in production
// const isProd = process.env.NODE_ENV === 'production';
// if (isProd) {
//   app.use(express.static(path.join(__dirname, 'dist')));
// }

// // example API route (keep or remove)
// app.get('/api/health', (req, res) => res.json({ ok: true }));

// // SPA fallback: serve index.html for any other route in production
// app.get('*', (req, res) => {
//   if (isProd) {
//     res.sendFile(path.join(__dirname, 'dist', 'index.html'));
//   } else {
//     res.send('Development server: run "npm run dev" for client');
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// // ...existing code...


// //Need this for the Heroku Web Application to Run. Needed Copilot assitance as permitted, and it will be edited later for my understanding


// ...existing code...
const express = require('express');
const path = require('path');
const fs = require('fs');
// require('dotenv').config();

const app = express();
app.use(express.json());

// log environment for debugging
const isProd = process.env.NODE_ENV === 'production';
console.log('NODE_ENV=', process.env.NODE_ENV, 'isProd=', isProd);
console.log('__dirname=', __dirname);

// serve static assets when in production
if (isProd) {
  const distPath = path.join(__dirname, 'dist');
  console.log('Serving static from:', distPath);
  if (!fs.existsSync(distPath)) {
    console.error('ERROR: dist directory does not exist. Run "npm run build" to create it.');
  } else {
    app.use(express.static(distPath));
  }
}

// example API route (keep or remove)
app.get('/api/health', (req, res) => res.json({ ok: true }));

// SPA fallback: serve index.html for any other route in production
// <- changed '*' to '/*' to avoid path-to-regexp PathError
app.use((req, res, next) => {
  try {
    if (isProd) {
      const indexPath = path.join(__dirname, 'dist', 'index.html');
      if (fs.existsSync(indexPath)) {
        return res.sendFile(indexPath);
      } else {
        console.error('ERROR: index.html not found at', indexPath);
        return res.status(500).send('Server misconfigured: missing index.html');
      }
    } else {
      return res.send('Development server: run "npm run dev" for client');
    }
  } catch (err) {
    console.error('Unexpected error in fallback middleware:', err);
    next(err);
  }
});

// global error logging to catch unexpected crashes
process.on('uncaughtException', (err) => {
  console.error('uncaughtException:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('unhandledRejection:', reason);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// ...existing code...
