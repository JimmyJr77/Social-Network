const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-api', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose is connected!');
    });

    mongoose.connection.on('error', (err) => {
        console.error('Mongoose connection error:', err);
    });
};

module.exports = connectDB;
