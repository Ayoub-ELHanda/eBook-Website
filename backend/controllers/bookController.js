const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findById(req.params.id);
    res.json(book);
};

exports.uploadBook = async (req, res) => {
    const { title, description, price, pdfUrl } = req.body;
    const newBook = new Book({ title, description, price, pdfUrl });
    await newBook.save();
    res.send('Book uploaded successfully');
};
