// To match all occurrences of the word "JavaScript"

const regex = /JavaScript/g;

const text = "I love JavaScript. JavaScript is a versatile language.";
const matches = text.match(regex);
console.log(matches);


// to match all the digits in a string

const digitsRegex = /\d/g;
const text1 = "My phone number is 123-456-7890 and my zip code is 98765.";
const matches1 = text1.match(digitsRegex);
console.log(matches1);
