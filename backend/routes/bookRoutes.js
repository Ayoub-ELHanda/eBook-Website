const express = require('express');
const { getBooks, getBookById, uploadBook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/upload', authMiddleware, uploadBook);

module.exports = router;
