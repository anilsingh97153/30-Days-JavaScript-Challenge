// Define constants
const PI = 3.14159;
const E = 2.71828;

// Define functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Encapsulate constants and functions in an object
const mathUtils = {
  PI,
  E,
  add,
  subtract,
  multiply,
  divide
};

// Export the object
export default mathUtils;
