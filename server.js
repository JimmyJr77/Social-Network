const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
// const userRoutes = require('./routes/userRoutes');
// const thoughtRoutes = require('./routes/thoughtRoutes');
const routes = require('./routes'); // Imports all routes from routes/index.js


// Use routes
app.use('/api', routes); // Uses the consolidated routes
// app.use('/api/users', userRoutes);
// app.use('/api/thoughts', thoughtRoutes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

