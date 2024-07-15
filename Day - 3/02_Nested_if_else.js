// Task - 3: Find largest of three numbers

const num1 = 134;
const num2 = 16;
const num3 = 74;

if (num1 > num2) {
    // largest number is either num1 or num3
    if (num1 > num3) {
        console.log(`${num1} is the largest among ${num1}, ${num2}, and ${num3}.`);
    } else {
        console.log(`${num3} is the largest among ${num1}, ${num2}, and ${num3}.`);
    }
} else {
    // largest number is either num2 or num3
    if (num2 > num3) {
        console.log(`${num2} is the largest among ${num1}, ${num2}, and ${num3}.`);
    }
    else {
        console.log(`${num3} is the largest among ${num1}, ${num2}, and ${num3}.`);
    }
}