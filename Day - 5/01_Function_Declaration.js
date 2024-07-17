// Function to check even and odd number
function checkEvenOdd(num) {
    if(num%2==0) {
        console.log(`${num} is an even number.`);
    } else {
        console.log(`${num} is an odd number.`);
    }
}

checkEvenOdd(5);
checkEvenOdd(6);

// Function to calculate square of a number and return the result
function findSquare(num) {
    return num * num;
}

console.log(`Square of 12 is ${findSquare(12)}.`);
console.log(`Square of 15 is ${findSquare(15)}.`);