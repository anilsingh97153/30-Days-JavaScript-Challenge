// Activity - 1: Understanding promises

// Create a promise that resolves with a message after 2-second timeout, and log the message to the console

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("fulfilled.");
  }, 2000);
})
  .then((message) => {
    console.log("Promise " + message);
  })
  .catch((error) => {
    console.log("Promise " + error);
  });

// Create a promise that rejects with an error message after a 2-second timeout, and handle the error using .cach()

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected.");
  }, 2000);
})
  .then((message) => console.log("Promise " + message))
  .catch((error) => console.log("Promise " + error));
