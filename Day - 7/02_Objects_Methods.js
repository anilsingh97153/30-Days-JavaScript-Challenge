// Add a method to the book object, that returns a string with the book's title, and author

const bookObj = {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: 2011,
    sayHi() {
        console.log(`Hi, this book is written by ${this.author}.`);
    }
}

bookObj.intro = function() {
    console.log(`${this.title} by ${this.author}`);
}

bookObj.intro();
bookObj.sayHi();

// Add a method that takes year and updates book's year
bookObj.yearUpdate = (year) => {
    this.year = year;
    console.log(`Updated year is ${this.year}.`);
}

bookObj.yearUpdate(2024);
