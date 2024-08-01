// Save a string value to sessionStorage.

const city = "Delhi";
sessionStorage.setItem("City", city);

// Save an object to sessionStorage by converting it into a JSON string.

const country = {
    states: 29,
    name: "India",
}

sessionStorage.setItem("Country", JSON.stringify(country));