const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    visited: [{
        ref: 'events',
        type: Schema.Types.ObjectId,
    }],
    email: String,
    firstName: String,
    lastName: String,
    telegram: String,
    role: String,
});

module.exports = mongoose.model('users', userSchema);