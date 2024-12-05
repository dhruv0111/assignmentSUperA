const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    type: { type: String, required: true },
    questionText: { type: String, required: true },
    options: [String],
    categories: [String],
    passage: { type: String },
});

const formSchema = new mongoose.Schema({
    title: { type: String, required: true },
    headerImage: { type: String },
    questions: [questionSchema],
});

module.exports = mongoose.model("Form", formSchema);
