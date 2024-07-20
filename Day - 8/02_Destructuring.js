// Array destructuring to extract first, and second elements
const numsArray = [1, 2, 3, 4, 5];
const [first, second] = numsArray;
console.log(first, second); // 1 2

// Array destructuring to extract third, fourth, and fifth elements
const [, , third, fourth, fifth] = numsArray; // first, and second are skipped using blank
console.log(third, fourth, fifth);

// Object destructuring to extract title, and author from a book object
const bookObj = {
  title: "Sapiens",
  author: "Yuvan Noah Harrari",
  year: 2011,
};

const { title, author } = bookObj;
console.log(title, author); // Sapiens Yuvan Noah Harrari

({ year } = bookObj);
console.log(year); // 2011
