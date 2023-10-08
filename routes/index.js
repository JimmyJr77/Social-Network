const router = require('express').Router();

// Imports individual route files
const userRoutes = require('./api/userRoutes');
const thoughtRoutes = require('./api/thoughtRoutes');

// Sets up API endpoints
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
