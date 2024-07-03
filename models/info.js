const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('info', infoSchema, 'info');