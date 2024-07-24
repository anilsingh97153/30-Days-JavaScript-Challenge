// Error handling in fetch()

// Fetch api to request data from an invalid URL and handle the error using .catch()

fetch("htps://api.github.com/users/anilsingh97153")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Invalid URL");
    }
  })
  .then((data) =>
    console.log(
      `Data fetched successfully for ${data.name} using fetch, then-catch.`
    )
  )
  .catch((error) => {
    console.log("Error: ", error.message, " using fetch, then-catch.");
  });

// Fetch api to request data from an invalid URL and handle the error using try-catch

async function dataFetch() {
  try {
    let response = await fetch("htps://api.github.com/users/anilsingh97153");
    let data = await response.json();
    console.log(
      `Data fetched successfully for ${data.name} using fetch, try-catch.`
    );
  } catch (error) {
    console.log("Error: Invalid URL.");
  }
}

dataFetch();

// In .then()/.catch(), the catch block handles errors from the promise chain, using a callback function. With async/await, the catch block directly receives the error object, making it more straightforward.
