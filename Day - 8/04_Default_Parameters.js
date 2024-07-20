// Function that takes two parameters, and return their product, with the secons parameter having a default value of 1.

function findProduct(num1, num2 = 1) {
  return num1 * num2;
}

const product = findProduct(12, 7);
console.log(product); // 84

// Calling the function without the second parameter
const product1 = findProduct(13);
console.log(product1); // 13
