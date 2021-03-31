"use strict";
// YouTube Video: https://www.youtube.com/watch?v=-mGCe_TSU5Q

let button = document.getElementById("btn");
let content = document.getElementById("content");

//Manipulating Elements in DOM
button.addEventListener("click", () => {
  if (content.innerHTML == "Goodbye.") {
    content.innerHTML = "Hello.";
  } else {
    content.innerHTML = "Goodbye.";
  }
});
//remove elements from DOM
document.getElementById("remove").addEventListener("click", () => {
  let idToRemove = document.getElementById("remove-id").value;
  let elementToRemove = document.getElementById(idToRemove);
  elementToRemove.parentNode.removeChild(elementToRemove);
  document.getElementById("remove-id").value = "";
});

let id = 0;

//adding an Element to DOM
document.getElementById("add").addEventListener("click", () => {
  var parent = document.getElementById("paragraphs");
  var newElement = document.createElement("p");

  newElement.innerHTML = document.getElementById("new-text").value;
  newElement.setAttribute("id", id++);
  parent.appendChild(newElement);
  document.getElementById("new-text").value = "";
});
