// Fetching data from an api

// use of 'fetch' API to get data from a public api and log the result using promised

// Start a network request to fetch user data from GitHub API
fetch("https://api.github.com/users/anilsingh97153")
  .then((response) => {
    // This block runs when the fetch request completes successfully
    if (response.ok === true) {
      // Check if the response status is OK (status code 200-299)
      return response.json(); // Parse the JSON body of the response
    } else {
      // If the response status is not OK, throw an error with status code
      throw new Error(`HTTP error! Status: ${response.status}.`);
    }
  })
  .then((data) => {
    // This block runs if the response was successfully parsed as JSON
    console.log("Data fetched: followers -", data.followers); // Log the fetched user data
  })
  .catch((error) => {
    // This block runs if there was a network error or if an error was thrown
    console.log("Error occurred: ", error); // Log the error message
  });

// use of 'fetch' API to get data from a public api and log the result using async/await

// Define an asynchronous function to fetch the GitHub user name
async function fetchUserName() {
  try {
    // Use 'fetch' to make a network request to the GitHub API
    let response = await fetch("https://api.github.com/users/anilsingh97153");

    // Check if the response status is not okay (i.e., not in the range 200-299)
    // 'response.ok' is true for status codes 200-299, otherwise false
    if (!response.ok) {
      // Throw an error if the response status indicates a failure
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Extract the JSON data from the response
    // 'await' waits for the promise returned by 'response.json()' to resolve
    let data = await response.json();

    // Log the 'name' property from the fetched data to the console
    console.log("Data fetched:", data.name);
  } catch (error) {
    // Catch and log any errors that occur during the fetch or processing
    console.log(error);
  }
}

// Call the async function to fetch and log the user name
fetchUserName();
