const mongoose = require('mongoose');

const experienceSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum : ['Internship', 'Fulltime', 'Parttime', 'Freelance'],
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: false
    }
});

module.exports = mongoose.model('experience', experienceSchema, 'experience');