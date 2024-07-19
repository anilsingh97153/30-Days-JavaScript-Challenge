// Use a for...in loop to iterate over properties of the book object, and log each property, and its value.

const libObj = {
  name: "Anil's Library",
  books: [
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      year: 2011,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
    },
  ],
};

// each book object in book array
for (book of libObj.books) {
  // each key of a book
  for (key in book) {
    console.log(`${key}: ${book[key]}`);
  }
  console.log();
}

// Use Object.keys, and Object.values methods to log all the keys, and values of the book object.
libObj.books.forEach(book => {
    console.log("Keys:",Object.keys(book));
    console.log("Values:",Object.values(book));
})