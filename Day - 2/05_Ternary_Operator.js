//  Task 14: Use of ternary operator to check if number is +ve or -ve.

let num1 = 10;
let num2 = -18;
let num3 = 0;

let result1 = num1 > 0 ? 'Positive ' : num1 < 0 ? 'Negative' : 'Zero';
let result2 = num2 > 0 ? 'Positive ' : num2 < 0 ? 'Negative' : 'Zero';
let result3 = num3 > 0 ? 'Positive ' : num3 < 0 ? 'Negative' : 'Zero';

console.log(`${num1} is a ${result1} number.`);
console.log(`${num2} is a ${result2} number.`);
console.log(`${num3} is a ${result3} number.`);

// OUTPUT
// 10 is a Positive  number.
// -18 is a Negative number.
// 0 is a Zero number.