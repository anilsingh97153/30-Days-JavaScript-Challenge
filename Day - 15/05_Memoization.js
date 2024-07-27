// Write a function that memoize the results of another function. Use a closure to store the results of previous computations.

// Memoization function
function memoize(fn) {
    const cache = []; // Create an array to store results
  
    return function(arg1, arg2) {
      // Check if the result for the given arguments is already in the cache
      for (let i = 0; i < cache.length; i++) {
        if (cache[i][0] === arg1 && cache[i][1] === arg2) {
          // Return cached result if found
          console.log('Returning from cache:', cache[i][2]);
          return cache[i][2];
        }
      }
      
      // Compute result if not cached
      console.log('Computing result for:', arg1, arg2);
      const result = fn(arg1, arg2);
      cache.push([arg1, arg2, result]); // Store the result in the cache
      return result;
    };
  }
  
  // Function to be memoized
  function sum(a, b) {
    return a + b;
  }
  
  // Create a memoized version of the sum function
  const memoizedSum = memoize(sum);
  
  // Example usage
  console.log(memoizedSum(2, 3)); // Computes and caches the result: 5
  console.log(memoizedSum(2, 3)); // Returns cached result: 5
  console.log(memoizedSum(4, 5)); // Computes and caches the result: 9
  
// Create a memoized version of a function that calculates the factorial of a number.

// Memoization function
function memoize(fn) {
  const cache = {}; // Create an object to store results

  return function (n) {
    // Check if the result for the given argument is already in the cache
    if (cache[n] !== undefined) {
      console.log("Returning from cache:", cache[n]);
      return cache[n];
    }

    // Compute result if not cached
    console.log("Computing result for:", n);
    const result = fn(n);
    cache[n] = result; // Store the result in the cache
    return result;
  };
}

// Function to calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize(factorial);

// Example usage
console.log(memoizedFactorial(5)); // Computes and caches the result: 120
console.log(memoizedFactorial(5)); // Returns cached result: 120
console.log(memoizedFactorial(6)); // Computes and caches the result: 720

// What is Memoization?
// Memoization is an optimization technique used to improve the performance of functions by storing the results of expensive function calls and returning the cached result when the same inputs occur again. It helps in avoiding redundant calculations by reusing previously computed results.
