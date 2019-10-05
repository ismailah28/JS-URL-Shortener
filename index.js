// import express framework
const express = require('express');

// Initialize express app
const app = express();

// Let app accept json data into our api
app.use(express.json({ extended: false }));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));