# 30-Days-JavaScript-Challenge

## Function Declaration vs Function Expression

### Function Declaration

In JavaScript, function declarations are defined using the `function` keyword followed by a function name and a block of code. These declarations are hoisted, meaning they can be called before they are defined in the code. They must have a name.

### Function Expression

Function expressions involve assigning a function to a variable. They are not hoisted and must be defined before they are called in the code. Function expressions can be either anonymous (unnamed) or named, with named expressions allowing recursion or internal debugging within the function.

Understanding these distinctions helps ensure effective use of JavaScript functions based on their intended scope and timing within your code.

```javascript
const add = function addFunction(a, b) {
    return a + b;
};
add(2, 3); // In case of an error, 'addFunction' will appear in the stack trace.

---

## Arrow Functions Cheatsheet

### Basic Syntax

```javascript
// Single parameter
const square = num => {
    return num * num;
};

// Multiple parameters
const add = (a, b) => {
    return a + b;
};

// No parameters
const greet = () => {
    console.log("Hello!");
};

