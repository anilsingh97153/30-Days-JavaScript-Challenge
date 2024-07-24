// Basic error handling with Try-Catch

// Write a function that intentionally throws an error and use a try-catch block to handle and log an appropriate message to the console

function throwError() {
  try {
    throw new Error("This is an intentional error!");
    // console.log("Unreachable code."); because of above throw
  } catch (error) {
    console.log("An error occurred: ", error.message);
  }
}

throwError();

// Create a function that divides two numbers, and throws an error if the denominator is zero.

function divideNumbers(a, b) {
  try {
    if(b === 0) {
        throw new Error("Denominator zero.");
    } else {
        const ans = a / b;
        console.log(`Result: ${ans}.`);
    }
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
}

divideNumbers(12, 0);
