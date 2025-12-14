// Import required modules
const express = require('express');
const path = require('path');
// require('dotenv').config();

const app = express();
app.use(express.json());


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to Tilly Inc!');
});
