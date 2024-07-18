// Intermediate methods of array --> map, filter, reduce

// Use of 'map' method to double the each element of the array.

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((element) => {
  return element * element;
});
console.log(newArr);

// alternative way with slight change in callback function
// const arr1 = [1, 2, 3, 4, 5];
// const newArr1 = arr.map(element => element * element);
// console.log(newArr1);

// Use of 'filter' method to extract/ filter only the even numbers from the array.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr2 = arr2.filter((item) => item % 2 === 0);
console.log(newArr2);

// Use of 'reduce' method to calculate the sum of all the numbers in the array.
const arr3 = [1, 2, 3, 4, 5];
const sum = arr3.reduce((accumulator, item, index, array) => {
  return accumulator + item;
}, 0);
console.log(sum);

// Use of 'reduce' method to calculate the product of all the numbers in the array.
const arr4 = [1, 2, 3, 4, 5];
const product = arr3.reduce((accumulator, item, index, array) => {
  return accumulator * item;
}, 1);
console.log(product);
