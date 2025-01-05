const express = require('express');
const router = express.Router();

// Example route (replace with your actual routes)
router.get('/', (req, res) => {
    res.send('eBook route works!');
});

module.exports = router;
