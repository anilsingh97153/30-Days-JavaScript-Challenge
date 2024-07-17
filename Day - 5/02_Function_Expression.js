// Function expression to find the max of two numbers.
const maxValue = function findMax(num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} is maximum of ${num1}, and ${num2}.`);
    } else {
        console.log(`${num2} is maximum of ${num1}, and ${num2}.`);
    }
}
maxValue(13, 15);
maxValue(133, 47);

// Function expression to find concatenate two strings and return the results. 
const concatString = function concatenateStrings(str1, str2) {
    return str1 + str2;
}

const result = concatString("Hello, ", "World!");
console.log(`${result}`);
