// Add a method to the book object that uses this keyword to return a string with the book's title, and year.

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

//   Adding bookInfo method to each book
libObj.books.forEach(book => {
    book.bookInfo = function() {
        return `${this.title} in the year ${this.year}.`;
    }
})

// Calling bookInfo() method for each book, and logging its result to console.
libObj.books.forEach(book => console.log(book.bookInfo()));