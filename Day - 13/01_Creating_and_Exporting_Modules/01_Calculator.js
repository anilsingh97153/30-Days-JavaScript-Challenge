// Parent module - calculator, which imports a function to add two numbers.

import {sum} from "./02_Sum.js";

const a = 12;
const b = 115;
const result = sum(a, b);
console.log(`Sum of ${a}, and ${b}: ${result}`);