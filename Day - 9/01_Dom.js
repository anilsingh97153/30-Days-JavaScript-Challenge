// Activity - 1: Selecting and Manipulating elements

// Select and HTML element by its ID, and change its text content
let textElement = document.getElementById("text");
textElement.textContent = "Hi Anil!";

// Select element by its class, and change its background color
let paraElement = document.querySelector(".para");
paraElement.style.backgroundColor = "Blue";


// Activity - 2: Creating, and appending elements

// Create a new div element with some text content, and append it to the body

let newElement = document.createElement("h1");
newElement.textContent = "This is new heading."
document.body.appendChild(newElement);

// ALternate & simple way
// let div = "<div>New div child.</div>"
// document.body.innerHTML += div;


// Create a new li element, and add it to an existing ul list
let liElement = document.createElement("li");
liElement.textContent = "Third";
let ul = document.querySelector("ul");
ul.appendChild(liElement);


// Activity - 3: Removing elements

// Select an HTML element, and remove it from the DOM
let removeElement = document.querySelector("h1");
removeElement.remove();

// Remove the last child of a specific HTML element
ul.removeChild(ul.lastChild);


// Activity - 4: Modifying attributes, and classes

// Select an HTML element and change one of its attributes
let imgElement = document.querySelector("img");
imgElement.src = "https://images.unsplash.com/photo-1717457782058-d8c50bfedc3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
imgElement.setAttribute("alt", "man");

// Add and remove CSS class to/from an HTML element
let element = document.querySelector(".para");
element.classList.add("body-para");
element.classList.remove("para");


// Activity - 5: EVent Handling

// Add a click event listener to a button that changes the text content of a paragraph

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    btn.textContent = "Text changed.";
})

// Add a mouseover event listener to an element that changes its border color

btn.addEventListener("mouseover", () => {
    btn.style.border = "2px solid black";
})

btn.addEventListener("mouseout", () => {
    btn.style.border = "2px solid lightgray"; // Revert to original border color
  });