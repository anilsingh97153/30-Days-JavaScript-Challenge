// Validate simple password (must include atleast one uppercase letter, one digit, one special character). Log whether the password is valid.

function validatePassword(password) {
    // Regular expression to check the password
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,}$/;
  
    // Check if the password matches the regular expression
    if (regex.test(password)) {
      console.log("Password is valid.");
    } else {
      console.log("Password is invalid. It needs at least one uppercase letter, one digit, one special character, and be at least 8 characters long.");
    }
  }
  
  // Test the function
  validatePassword("Password1@"); // Should print: Password is valid.
  validatePassword("password1");  // Should print: Password is invalid.
  validatePassword("PASSWORD@");  // Should print: Password is invalid.
  validatePassword("Pass1");      // Should print: Password is invalid.
  

// regular expression to validate a URL. Log whether the url is valid.

function isValidURL(url) {
    const regex = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(:\d+)?(\/[\w\d-_.]*)*\/?$/;
    const isValid = regex.test(url);
    console.log(`URL is ${isValid ? 'valid' : 'invalid'}`);
    return isValid;
  }
  
  // Example usage
  const url1 = "https://www.example.com:8080/path/to/resource";
  const url2 = "ftp://example.com";
  const url3 = "https://example";
  
  isValidURL(url1);  // Output: URL is valid
  isValidURL(url2);  // Output: URL is invalid (not matching 'http' or 'https')
  isValidURL(url3);  // Output: URL is invalid (missing path, etc.)
  