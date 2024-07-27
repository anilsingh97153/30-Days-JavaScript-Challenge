// Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function idGenerator() {
  let id = 0;

  function generateId() {
    id++;
    return `id-${id}`;
  }

  return generateId;
}

let generateId = idGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());

// The closure in the ID generator example allows the inner function to persistently access and update the private `id` variable across multiple calls, preserving state between function invocations.

// Create a closrue that captures a user's name and return a function that greets the user by name.

function user(name) {
  let userName;

  function greet() {
    userName = name;
    return `Hello ${userName}!`;
  }

  return greet;
}

let greet = user("Anil");
console.log(greet());

// This example shows how a closure can keep a user's name private and use it to create a personalized greeting function.
