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
    email: String,
    firstName: String,
    lastName: String,
    telegram: String,
    role: String,
});

module.exports = mongoose.model('users', userSchema);