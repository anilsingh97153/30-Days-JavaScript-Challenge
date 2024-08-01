// Script to save a string value localStorage it.
const name = "Anil Singh";
localStorage.setItem("Name", "Anil Singh");

// Save an object to localStorage by converting it to a JSON string. Retrieve and parse the object.
const user = {
    fname: "Anil",
    lname: "Singh",
    age: 23,
}

localStorage.setItem("user", JSON.stringify(user));
const obj = JSON.parse(localStorage.getItem("user"));
console.log(obj);