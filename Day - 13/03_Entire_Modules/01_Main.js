// Import the module object
import mathUtils from './02_Export.js';

// Use the constants and functions
const sum = mathUtils.add(5, 3);
const difference = mathUtils.subtract(9, 4);
const product = mathUtils.multiply(7, 6);
const quotient = mathUtils.divide(12, 3);

console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('PI:', mathUtils.PI);
console.log('E:', mathUtils.E);
