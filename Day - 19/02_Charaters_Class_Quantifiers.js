// Regular expression to match all words in a string that starts with a capital letter.
const regex1 = /\b[A-Z][a-z]*\b/g;
const text1 = "Alice went to the Park. She met Bob and Carol there.";
const matches1 = text1.match(regex1);

console.log(matches1);
// Output: ["Alice", "Park", "She", "Bob", "Carol"]

// Regular expression match all the sequences of one or more digits in a string.
const regex2 = /\d+/g;
const text2 = "There are 123 apples, 45 oranges, and 6789 bananas.";
const matches2 = text2.match(regex2);

console.log(matches2);


