require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import only if these files exist and export a router properly
const userRoutes = require('./routes/userRoutes');
const eBookRoutes = require('./routes/eBookRoutes');  // Double-check this file
const orderRoutes = require('./routes/orderRoutes');  // Double-check this file

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected Successfully'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Ensure routes are actually functions
if (typeof userRoutes === 'function') app.use('/api/users', userRoutes);
if (typeof eBookRoutes === 'function') app.use('/api/ebooks', eBookRoutes);
if (typeof orderRoutes === 'function') app.use('/api/orders', orderRoutes);

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
