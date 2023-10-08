const mongoose = require('mongoose');
const Thought = require('./Thought');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Must match a valid email address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

// Create a virtual called `friendCount` 
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Middleware to remove all associated thoughts when a user is deleted
UserSchema.pre('remove', function(next) {
    // Remove all the thoughts associated with the user
    Thought.deleteMany({ username: this.username })
        .then(() => next())
        .catch(err => next(err));
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
