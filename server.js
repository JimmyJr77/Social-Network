const express = require('express');
const connectDB = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple logging middleware to check incoming requests
app.use((req, res, next) => {
    console.log(`Incoming ${req.method} request to ${req.path}`);
    next();
});

// Import routes from the routes directory
const routes = require('./routes');

// Use routes with the '/api' prefix
app.use('/api', routes);

// Connect to MongoDB
connectDB();

// Generic 404 handler
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
