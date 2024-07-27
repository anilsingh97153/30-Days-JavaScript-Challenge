// Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure that each function logs the correct index.


const functionsArray = [];
for(let i = 0; i < 10; i++) {
// Use a closure to capture the current value of i    
    functionsArray.push(function() {
        console.log(i); // Log the index captured by the closure
    }); 
}

// Call each function to log its index
functionsArray.forEach(func => func());

// In this example, closures work by capturing the `i` variable from the loop's lexical scope, ensuring each function in the array logs the correct index value that was present at the time the function was created.

// Each function created inside the loop forms a closure that captures and remembers the i variable from its specific iteration. The i in each function refers to the value of i from the iteration in which that function was created.

// In loops, `let` captures each iteration's value in closures, while `var` captures the final value due to function scoping.