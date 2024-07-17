// An immediately invoked function expression (IIFE) is a JavaScript design pattern that executes immediately after it’s created. It's typically used to encapsulate variables and avoid polluting the global scope. Here's an example of an IIFE:

(function(name) {
    // Your code here
    console.log(`Hello, ${name}!`);
})("Anil");

// IIFEs are commonly used in scenarios where you want to create a local scope to avoid variable name collisions or to execute code immediately without needing to call a function explicitly. They're a powerful tool in JavaScript for modularizing code and managing scope effectively.
