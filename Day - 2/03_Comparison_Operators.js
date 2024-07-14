// Task 8-10: Use of '>', '<', '>=', '<=', '==', '===' operators.

let a = 10;
let b = 10;

console.log(`${a} > ${b} gives ${a > b}`);
console.log(`${a} < ${b} gives ${a < b}`);
console.log(`${a} >= ${b} gives ${a >= b}`);
console.log(`${a} <= ${b} gives ${a <= b}`);

let c = 12;
let d = '12';

console.log(`${c} == ${d} gives ${c == d}`);
console.log(`${c} === ${d} gives ${c === d}`);

// Note: '==' just check the value, irrespective of datatype, whereas '===' check datatypes also.

// OUTPUT
// 10 > 10 gives false
// 10 < 10 gives false
// 10 >= 10 gives true
// 10 <= 10 gives true
// 12 == 12 gives true
// 12 === 12 gives false