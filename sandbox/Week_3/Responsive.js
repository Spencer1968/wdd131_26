/*
get the elements that we want to modify
figure out when the modification should occur
for each element
    figure out which one it is
    output that number

figure out where/how we will display the message... get a reference
figure out what day it is
update the display


*/
function renderNumber(element, index) {
    const number = document.createElement("span");
    number.textContent = index + 1;
    element.prepend(number);
}

function displayWelcome() {
    const headerEl = document.querySelector("header");
    const dayIndex = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = days[dayIndex];
    const welcomeMessage = `Happy ${today}`
    const messageElement = document.createElement("p");
    messageElement.textContent = welcomeMessage;
    headerEl.append(messageElement);
}

function addIndex() {
    const scriptureElements = document.querySelectorAll(".scripture");
    scriptureElements.forEach(renderNumber);
}

function toggleMenu() {
    
}

document.querySelector(".menu-btn").addEventListener("click", toggleMenu);

addIndex();
displayWelcome();