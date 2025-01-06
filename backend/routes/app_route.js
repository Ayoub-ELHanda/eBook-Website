const express = require('express');
const router = express.Router();
const Product = require('../models/products');

// Get All Products
router.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add Product
router.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send('✅ Product Added Successfully');
});

module.exports = router;
