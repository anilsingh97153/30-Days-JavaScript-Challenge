// Reverse an integer

function reverseInteger(num) {
  let reversed = 0;
  let number = Math.abs(num);
  let isNegative = num < 0;

  while (number !== 0) {
    lastDigit = number % 10;

    // Check for overflow: before multiplying reversed by 10
    if (reversed > (Math.pow(2, 31) - 1) / 10) {
      return 0; // Return 0 if it overflows
    }

    reversed = reversed * 10 + lastDigit;
    number = Math.floor(number / 10);
  }

  if (isNegative) {
    reversed = -reversed;
  }
  // Check for overflow again for negative numbers
  if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) {
    return 0;
  }
  return reversed;
}

// Test cases
console.log(reverseInteger(123)); // Output: 321
console.log(reverseInteger(-123)); // Output: -321
console.log(reverseInteger(120)); // Output: 21
console.log(reverseInteger(0)); // Output: 0
console.log(reverseInteger(-1200)); // Output: -21
