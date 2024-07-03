const mongoose = require('mongoose');

const educationSchema = mongoose.Schema({
    school: {
        type: String,
        required: true
    },
    degree: {
        type: String,
        enum : ['High School', 'Bachelor', 'Master', 'Doctorate'],
        required: true
    },
    major: {
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
    },
    gpa: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('education', educationSchema, 'education');