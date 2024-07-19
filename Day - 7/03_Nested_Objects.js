// Create a nested object, representng a library with properties like name, and books (an array of book objects)

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

console.log(libObj);

// Access, and log the name of the library, and titles of all the books in library

console.log(libObj.name);
libObj.books.forEach((book) => console.log(book.title));
