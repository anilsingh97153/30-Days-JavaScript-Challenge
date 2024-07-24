// Error handling in promises

// Create a promise that  randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const promise1 = new Promise((resolve, reject) => {
  let flag = true; // change it to false to see different result
  if (flag) {
    resolve("Promise1 is fulfilled.");
  } else {
    reject("Promise2 is rejected.");
  }
});

promise1
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

//   Use try-catch within an async function to handle error from a promise that randomly resolve or rejects, and log the error message

async function randomPromise() {
  try {
    const result = await new Promise((resolve, reject) => {
      let flag = true;
      if (!flag) {
        resolve("Promise2 is fulfilled.");
      } else {
        reject("Promise2 is rejected.");
      }
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
randomPromise();
