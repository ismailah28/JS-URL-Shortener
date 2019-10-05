// import express framework
const express = require('express');
const connectDB = require('./config/db');

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Let app accept json data into our api
app.use(express.json({ extended: false }));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));