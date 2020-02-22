const mongoose = require('mongoose');

const { Schema } = mongoose;

const eventSchema = new Schema({
    title: String,
    author: {
        ref: 'users',
        type: Schema.Types.ObjectId,
    },
    vote: Number,
    isActive: Boolean,
    sponsors: [{
        user: {
            ref: 'users',
            type: Schema.Types.ObjectId,
        },
        cost: {
            type: Number,
        },
    }],
    region: String,
    date: String,
});

module.exports = mongoose.model('events', eventSchema);