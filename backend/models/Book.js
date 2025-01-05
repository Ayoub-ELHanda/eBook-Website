const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    pdfUrl: String
});

module.exports = mongoose.model('Book', BookSchema);
