// index.js (or your main file)
const express = require('express');
const app = express();
const port = 5000;
const connection = require('./db'); // Ensure this path is correct

// Establish MongoDB connection
connection();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());

// Corrected path for the route
app.use('/api', require('./Routes/createuser'));
app.use('/api', require('./Routes/displaydata'));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

