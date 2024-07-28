// Recusrive function to calculate the factorial of a number.

function factorial(num) {
  // base case
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
}

console.log("Factorial 6:", factorial(6)); // 720
console.log("Factorial 5:", factorial(5)); // 120
console.log("Factorial 4:", factorial(4)); // 24
console.log("Factorial 3:", factorial(3)); // 6
console.log("Factorial 2:", factorial(2)); // 2

// Recusrive function to calculate the nth fobonacci number.
function fibonacci(n) {
  // base case
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Calculate and print Fibonacci numbers for specific terms
console.log("Fibonacci of 0:", fibonacci(0)); // 0
console.log("Fibonacci of 1:", fibonacci(1)); // 1
console.log("Fibonacci of 2:", fibonacci(2)); // 1
console.log("Fibonacci of 3:", fibonacci(3)); // 2
console.log("Fibonacci of 4:", fibonacci(4)); // 3
console.log("Fibonacci of 5:", fibonacci(5)); // 5
