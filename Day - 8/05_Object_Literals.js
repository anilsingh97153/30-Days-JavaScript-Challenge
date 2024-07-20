// Use enhanced object literals to create an object with methods with methods, and properties, and log the object

const myName = "Anil Singh";
const age = 22;
const greet = () => "Hello";

const person = {
  myName, // Shorthand property name
  age, // Shorthand property name
  greet, // Shorthand method definition
  [myName.toLowerCase()]: age, // Computed property name
};

console.log(person);
console.log(person.greet());

// Output:
// {
//     myName: 'Anil Singh',
//     age: 22,
//     greet: [Function: greet],
//     'anil singh': 22
//   }
// Hello


// Key Features of Enhanced Object Literals:

// 1. Shorthand Property Names:
// If the property key and variable name are the same, you can use shorthand notation.

// 2. Method Definitions:
// You can define methods directly within the object literal without the function keyword.

// 3. Computed Property Names:
// You can use expressions inside square brackets to define property names dynamically.

// 4. Object Property Assignment:
// You can use the shorthand syntax for setting properties when using the object spread operator.

// Summary:
// Enhanced Object Literals simplify object creation and property assignment with features like shorthand property names, concise method definitions, computed property names, and more readable code.
