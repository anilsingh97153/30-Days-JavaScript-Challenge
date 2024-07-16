// Task - 5: Sum of numbers from 1 - 5
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Task - 6: Factorial of a number
let num1 = 5;
let factorial = 1;
let i = num1;

do {
  factorial *= i;
  i--;
} while (i >= 1);
console.log(`Factorial of ${num1}: ${factorial}`);
