// Use spread operator to create a new array that includes all the elements of an existing array plus additional elements.

const arr = [1, 2, 3, 4, 5];
const arr1 = [...arr, 6, 7, 8, 9, 10];
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Use of rest operator (...)
const [first, second, ...rest] = arr;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

// Use of rest operator to accept an arbitary number of arguments, sum them, and return the result

function sum(...numbers) {
  let sum = 0;
  numbers.forEach((number) => (sum += number));
  return sum;
}

console.log("Sum:", sum(1, 2, 3, 4, 5));

// Note:
// Rest Operator (...): Collects multiple elements into an array or object.
// Spread Operator (...): Expands or copies elements from an array or object.
