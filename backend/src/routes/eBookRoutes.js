const express = require('express');
const router = express.Router();
const eBook = require('../models/eBook');

// ✅ Search eBooks by Title
router.get('/', async (req, res) => {
    try {
        const { title } = req.query;
        const searchResults = await eBook.find(
            title ? { title: { $regex: title, $options: 'i' } } : {}
        );
        res.json(searchResults);
    } catch (error) {
        res.status(500).send('Error searching for eBooks');
    }
});

module.exports = router;
