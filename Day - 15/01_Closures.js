// Understanding closures

// Function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner fucntion and log the result.

function parent() {
  let parentMoney = 100;

  function child() {
    let childMoney = 20;
    console.log(parentMoney);
  }
  return child();
}

parent();

// clousure "Encapsulate variables in an outer function and return inner functions to create private state with controlled access."

// create a closure that maintains a private counter. Implement functions to increment and get the current value of counter.

function counter() {
  let count = 0;
  function increment() {
    count++;
  }
  function getValue() {
    return count;
  }
  return {
    increment,
    getValue,
  };
}

let increment = counter();
console.log(increment.count);

// In the counter example, closures allow controlled access to the private `counter` variable by exposing only the `increment` and `getValue` methods, preventing direct external modification.
