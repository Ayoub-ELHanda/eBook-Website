const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// ✅ Submit a new order
router.post('/', async (req, res) => {
    try {
        const { fullName, email, address, cardNumber, items, total } = req.body;
        
        // ✅ Basic server-side validation
        if (!fullName || !email || !address || !items.length) {
            return res.status(400).send('Please provide all required fields');
        }

        const newOrder = new Order({ fullName, email, address, cardNumber, items, total });
        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully' });
    } catch (error) {
        res.status(500).send('Error placing order');
    }
});

module.exports = router;
