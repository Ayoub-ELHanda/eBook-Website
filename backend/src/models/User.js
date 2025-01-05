const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// ✅ Prevent Double Hashing by checking password modification
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();  // Prevent double hashing
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model('User', UserSchema);
