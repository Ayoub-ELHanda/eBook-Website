const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    address: String,
    cardNumber: String,
    items: Array,
    total: Number
});

module.exports = mongoose.model('Order', OrderSchema);
