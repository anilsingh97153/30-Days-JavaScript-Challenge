// `Promise.all`: **Waits for all promises in an array to resolve, and returns a single promise that resolves with an array of all resolved values, or rejects if any promise in the array rejects.**

// `Promise.race`: **Returns a promise that resolves or rejects as soon as one of the promises in an array resolves or rejects, with the value or reason from that first promise.**

// Use Promise.all to wait for multiple promises to resolve and then all of their  values

// Simulate two promises: fetching user data and posts

let fetchUserData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ userId: 1, name: "John Doe" });
  }, 1000);
});

let fetchUserPosts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      { postId: 1, title: "Post 1" },
      { postId: 2, title: "Post 2" },
    ]);
  }, 2000);
});

// Use Promise.all to handle both promises

Promise.all([fetchUserData, fetchUserPosts])
  .then(([userData, userPosts]) => {
    console.log("User Data:", userData);
    console.log("User Posts:", userPosts);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Simulate two promises with different response times
const fetchFromApi1 = new Promise((resolve) => {
  setTimeout(() => resolve("Response from API 1"), 2000);
});

const fetchFromApi2 = new Promise((resolve) => {
  setTimeout(() => resolve("Response from API 2"), 1000);
});

// Use Promise.race to handle the first promise to resolve
Promise.race([fetchFromApi1, fetchFromApi2])
  .then((fastestResponse) => {
    console.log("Fastest Response:", fastestResponse);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
