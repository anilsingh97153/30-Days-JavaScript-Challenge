// Create a simple form that saves user input when submitted. Retrieve and display the saved data on page load.

function saveFormData(event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;

    const userData = {
        name, 
        password,
    }

    localStorage.setItem("userData", JSON.stringify(userData));
    displaySavedData();
}


function displaySavedData() {
    const saveData = JSON.parse(localStorage.getItem("userData"));
   
    if(saveData) {
        document.querySelector("#saved-name").textContent = `Name: ${saveData.name}`;
        document.querySelector("#saved-password").textContent = `Password: ${saveData.password}`;
    } else {
        document.querySelector("#message").textContent = `No data saved.`;
    }
}
// Event listener for form submission
document.querySelector("#userForm").addEventListener("submit", saveFormData);

// Display saved data when the page loads
window.onload = displaySavedData;




// write script to remove an item from localStorage

localStorage.removeItem("user");
