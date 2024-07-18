// Basic methods of array --> push, pop, shift, unshift

const arr = [1, 2, 3, 4, 5];
console.log("Original array: ", arr);

arr.push(6);
console.log("Push operation:", arr);

arr.pop();
console.log("Pop operation:", arr);

arr.shift() 
console.log("Shift operation:", arr);

arr.unshift(1);
console.log("Unshift operation:", arr);


// Notes: 
// console.log(`Original array: ${arr}`);
// When you use a template literal with an array (${arr}), JavaScript calls the array's toString() method to convert it to a string. The toString() method of an array returns a comma-separated string of the array's elements. That's why you see 1,2,3,4,5 in the output.

// console.log(arr);
// When you pass the array directly to console.log, the console's internal mechanism for displaying arrays is used. This typically involves displaying the array in a more readable format, such as [1, 2, 3, 4, 5].