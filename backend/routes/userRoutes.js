const express = require('express');
const { registerUser, loginUser, deleteUserAccount } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.delete('/delete-account', authMiddleware, deleteUserAccount);

module.exports = router;
