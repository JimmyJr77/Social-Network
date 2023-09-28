const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

//Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/mydatabase'), {
    useNewUrlParser: true,
    userUnifiedTopology: true,
}

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB!');
});

mongoose.connection.on('error', (err) => {
    console.log('Failed to connect to MongoDB:', err);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

