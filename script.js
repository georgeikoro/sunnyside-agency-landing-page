// Define constants for buttons, lines, dropdown trigger, and menu
const button1 = document.getElementById("learn-more-btn1");
const button2 = document.getElementById("learn-more-btn2");
const yellowLine = document.querySelector(".yellow-line");
const pinkLine = document.querySelector(".pink-line");
const dropdownTrigger = document.getElementById("dropdown-trigger");
const dropdownMenu = document.getElementById("dropdown-menu");

// Function to handle mouseover event for buttons
function handleMouseOver() {
  if (yellowLine) {
    yellowLine.style.backgroundColor = "hsl(51, 100%, 49%)";
  }
  if (pinkLine) {
    pinkLine.style.backgroundColor = "hsl(7, 99%, 70%)";
  }
}

// Function to handle mouseout event for buttons
function handleMouseOut() {
  if (yellowLine) {
    yellowLine.style.backgroundColor = "hsla(51, 100%, 49%, 0.3)";
  }
  if (pinkLine) {
    pinkLine.style.backgroundColor = "hsla(7, 99%, 70%, 0.2)";
  }
}

// Function to handle click event for dropdown trigger
function handleDropdownClick() {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "flex" ? "none" : "flex";
  dropdownTrigger.style.opacity =
    dropdownTrigger.style.opacity === "0.5" ? "1" : "0.5";
}

// Add event listeners to buttons and dropdown trigger
button1.addEventListener("mouseover", handleMouseOver);
button1.addEventListener("mouseout", handleMouseOut);
button2.addEventListener("mouseover", handleMouseOver);
button2.addEventListener("mouseout", handleMouseOut);
dropdownTrigger.addEventListener("click", handleDropdownClick);
