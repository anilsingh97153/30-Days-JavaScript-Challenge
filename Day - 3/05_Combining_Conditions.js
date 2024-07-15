// Task - 7: Check if a year is leap using multiple conditions ( divisible by 4, but not 100 unless also divisible by 400).

const year = 2020;

if (year % 400 === 0) {
    // Leap year if divisible by 400
    console.log(`${year} is a leap year.`);
} else if (year % 100 === 0) {
    // Not leap year if divisible by 100 but not by 400
    console.log(`${year} is not a leap year.`);
} else if (year % 4 === 0) {
    // Leap year if divisible by 4 but not by 100
    console.log(`${year} is a leap year.`);
} else {
    // Not a leap year otherwise
    console.log(`${year} is not a leap year.`);    
}