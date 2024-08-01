// Write a function that accepts a key and a value, and saves the value to both localStorage, and sessionStorage.

function dataSaver(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}

const key = "Year";
const value = 2024;
dataSaver(key, value);

// Write a function that clears all data from both localStorage and sessionStorage. Verify that both storage are empty.

function clearData() {
    localStorage.removeItem("Year");
    sessionStorage.removeItem("Year");
}

clearData();