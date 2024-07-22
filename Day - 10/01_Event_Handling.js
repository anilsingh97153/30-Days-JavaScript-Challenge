// Activity - 1: Basic event handling

// Add a click event listener to a button that changes text content of a paragraph.

const para = document.querySelector(".para");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  para.textContent = "Paragraph content is changed.";
  btn.textContent = "Done!";
});

// Add a double-click event listener to an image that toggles its visibility.
const toggleImgBtn = document.querySelector(".toggle-img-btn");
const toggleImg = document.querySelector(".toggle-img");
toggleImgBtn.addEventListener("dblclick", () => {
  toggleImg.classList.toggle("hidden");
});

// Activity - 2: Mouse events

// Add a mouseoer event listener to an element that changes its backgorund color

para.addEventListener("mouseover", () => {
  para.style.backgroundColor = "black";
  para.style.color = "white";
});

// Add a mouseout event listener to reset its backgorund color

para.addEventListener("mouseout", () => {
  para.style.backgroundColor = "";
  para.style.color = "";
});

// Activity - 3: Keyboard events

// Add a keydown event listener to an input field that logs the key pressed to the console

const keydownInput = document.querySelector("#keydown");
keydownInput.addEventListener("keydown", (event) => {
  console.log(event.key);
});

// Do the same as above for keyup event listener

const keyupInput = document.querySelector("#keyup");
keyupInput.addEventListener("keyup", (event) => {
  console.log(event.key);
});

// Activity - 4: Form events

// Add a submit event listener to a form that prevents the default submission and log the form data to console

const formField = document.querySelector("#myForm");
formField.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  console.log(name);
  console.log(email);
});

// Add a change event listener to a select dropdown that displays the selected value in a paragraph

const dropDown = document.querySelector("#dropdown");
const optionPara = document.querySelector(".option-para");

dropDown.addEventListener("change", () => {
  optionPara.textContent = `Selected option: ${dropDown.value}`;
});

// Activity - 5: Event delegation

//  Add a click event listener to a list that logs the text content of the clicked list item using event delegation

const itemPara = document.querySelector(".selected-list-item");
const list = document.querySelector(".list");
list.addEventListener("click", (event) => {
  if (event.target.nodeName === "LI") {
    itemPara.textContent = `Selected item: ${event.target.textContent}`;
  }
});

// Add an event listener to a parent element that listens event from dynamically added child

const addListItemBtn = document.querySelector(".addListItem");
let itemNumber = 2;
addListItemBtn.addEventListener("click", () => {
  // code to add new list item
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${++itemNumber}`;
  list.appendChild(newItem);
});
