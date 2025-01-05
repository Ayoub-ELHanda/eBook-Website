const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user: 'your-email@gmail.com', pass: 'your-email-password' }
});

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    transporter.sendMail({
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Welcome to the eBook Store',
        text: 'Thank you for registering!'
    });
    res.send('User registered successfully');
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, 'secret_key');
    res.json({ token });
};

exports.deleteUserAccount = async (req, res) => {
    const userId = req.user.id;
    await User.findByIdAndDelete(userId);
    transporter.sendMail({
        from: 'your-email@gmail.com',
        to: req.user.email,
        subject: 'Account Deletion',
        text: 'Your account has been deleted.'
    });
    res.send('Account deleted successfully');
};
