// Arrow function to find sum of two numbers, and return the result

const sum = (a, b) => {
    return a + b;
}

const result = sum(12, 15);
console.log(`Sum of 12, and 15 is ${result}.`);


// Arrow function to check if string contains a specfic character, and return boolean value

let checkChar = (str, char) => {
    if(str.includes(char)) {
        return true;
    } else {
        return false;
    }
}

if(checkChar("Anil Singh", "S")) {
    console.log("Found the character.");
} else {
    console.log("Could not find the character.");
}