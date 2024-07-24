// Create a custom class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block

class ConnectionError extends Error {
  constructor(message, errorCode) {
    super(message); // Initialize the Error class with the message
    this.name = "ConnectionError"; // Set the custom error name
    this.errorCode = errorCode; // Add a custom property for additional context
  }
}

try {
  let isConnected = false;
  if (!isConnected) {
    throw new ConnectionError("Counldn't connect to server.", 123); // Throwing the custom error
  } else {
    console.log("Connected.");
  }
} catch (error) {
  console.log(`${error.name}: ${error.message}`); // Handling and displaying the error
}


// Write a function that validates user input (example, checking if a string is not empty) and throws a custom error, if the validation failed. Handle the custom error using try-catch block


class StringError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.name = "StringEmptyError";
    this.errorCode = errorCode;
  }
}

try {
  let str = "";
  if(str.length === 0) {
    throw new StringError("String is empty", 123);
  } else {
    console.log("String:", str);
  }
} catch(error) {
  console.log(`${error.errorCode} ${error.name}: ${error.message}.`);
}