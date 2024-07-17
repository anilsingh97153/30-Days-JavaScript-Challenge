// Function that takes two parameters, and return their product. Provide a default value for the second parameter.

function findProduct(a, b = 5) {
    return a * b;
}

console.log(findProduct(12, 4));
console.log(findProduct(13));


// Function that takes person's name, and age, and returns a greeting message. Provide default value for age.
function greet(name, age = 40) {
    return `Hello, ${name}, ${age}.`;
}

console.log(greet("John", 22));
console.log(greet("Anil"));