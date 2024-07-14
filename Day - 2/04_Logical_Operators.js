// Task 11-13: Use of logical operators '&&', '||' and'!'

let a = true;
let b = false;
let c = true;

console.log(`${a} && ${b} - ${a&&b}`);
console.log(`${a} && ${c} - ${a&&c}`);
console.log(`${a} || ${b} - ${a||b}`);
console.log(`${a} || ${c} - ${a||c}`);
console.log(`!${a} - ${!a}\n!${b} - ${!b}\n!${c} - ${!c}`);

// OUTPUT:
// true && false - false
// true && true - true
// true || false - true
// true || true - true
// !true - false
// !false - true
// !true - false