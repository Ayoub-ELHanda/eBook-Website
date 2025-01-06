const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image_url: String,
    price: Number,
    description: String,
    manufacturer: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
