// Create a simple form that saves user input when submitted. Retrieve and display the saved data on page load.

function saveFormData1(event) {
    event.preventDefault();

    const name = document.querySelector("#name1").value;
    const password = document.querySelector("#password1").value;

    const userData1 = {
        name, 
        password,
    }

    sessionStorage.setItem("userData1", JSON.stringify(userData1));
    displaySavedData1();
}


function displaySavedData1() {
    const saveData = JSON.parse(sessionStorage.getItem("userData1"));
   
    if(saveData) {
        document.querySelector("#saved-name1").textContent = `Name: ${saveData.name}`;
        document.querySelector("#saved-password1").textContent = `Password: ${saveData.password}`;
    } else {
        document.querySelector("#message1").textContent = `No data saved.`;
    }
}
// Event listener for form submission
document.querySelector("#userForm1").addEventListener("submit", saveFormData1);

// Display saved data when the page loads
window.onload = displaySavedData1;




// write script to remove an item from localStorage

sessionStorage.removeItem("City");
