// models/responseModel.js
const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    formId: { type: mongoose.Schema.Types.ObjectId, ref: 'Form', required: true },
    answers: [
        {
            questionId: { type: mongoose.Schema.Types.ObjectId },
            answer: mongoose.Schema.Types.Mixed, // Flexible for various question types
        },
    ],
});

module.exports = mongoose.model('Response', responseSchema);
