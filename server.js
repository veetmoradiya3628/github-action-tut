const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

let books = [];

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get a book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send("Book not found");
  res.json(book);
});

// Add a new book
app.post("/books", (req, res) => {
  const book = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
  };
  books.push(book);
  res.status(201).json(book);
});

// Delete a book by ID
app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).send("Book not found");
  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
