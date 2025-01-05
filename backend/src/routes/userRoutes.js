const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// ✅ Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ Example of a protected route using JWT
router.get('/profile', authMiddleware, (req, res) => {
    res.send(`Hello, User with ID: ${req.user._id}`);
});

module.exports = router;
