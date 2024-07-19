// Object representing a book with properties like title, author, and year

// An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax

const bookObj = {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: 2011,
}

console.log(bookObj);
console.log(user1);
console.log(user2);

// get property values of the object:
console.log(bookObj.title);
console.log(`${bookObj.title}, ${bookObj.author}, ${bookObj.year}`);

// Adding a value in object:
bookObj.isPublished = true;
console.log(bookObj);

// To remove a property, we can use the delete operator:
delete bookObj.isPublished;
console.log(bookObj);

// We can also use multiword property names, but then they must be quoted:
bookObj["copies sold"] = 1e6; // 1e6 represents one million
console.log(bookObj);

