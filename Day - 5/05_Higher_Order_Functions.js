// Certainly! Higher-order functions are functions that can take other functions as arguments or return functions as their results. In JavaScript, functions are first-class citizens, meaning they can be treated like any other data type, such as strings or numbers. This flexibility allows for the creation of higher-order functions, which are foundational to functional programming paradigms. Here's a breakdown of higher-order functions in JavaScript:

function greet(name, callback) {
  return callback(name);
}

function sayHello(name) {
  return `Hello, ${name}!`;
}

function sayGoodbye(name) {
  return `Goodbye, ${name}!`;
}

console.log(greet("Anil", sayHello)); // Output: Hello, Anil!
console.log(greet("Anil", sayGoodbye)); // Output: Goodbye, Anil!


// Higher-order function that takes a function, and a number, and calls the function that many times.

function printer(num, callback) {
  while (num > 0) {
    callback("Anil");
    num--;
  }
}

function sayHi(name) {
  console.log(`Hello, ${name}`);
}

printer(3, sayHi);



// Higher-order function that takes two functions, and a value, applies the first function of the value, and then applies second function to the result.

// Here we will have a function, which will take two functions, first find the square of a number, then  another add 10 to it.

function endResult(num, findSquare, addTen) {
    const square = findSquare(num);
    const result = addTen(square);
    return result;

    // above same in one line
    // return (addTen(findSquare(num)));
}

function findSquare(num) {
    return num * num;
}

function addTen(num) {
    return num + 10;
}

console.log(`Result1: ${endResult(10, findSquare, addTen)}.`); // 110
console.log(`Result2: ${endResult(5, findSquare, addTen)}.`); // 35
