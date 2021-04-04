"use strict";

document.querySelector("#p-button").addEventListener("click", userEntry);

function userEntry() {
  let words = document.querySelector("#p-input").value;
  newPara(words);
}

function newPara(words) {
  let para = document.createElement("p");
  para.innerHTML = words;
  document.querySelector("#p-div").appendChild(para);
  document.querySelector("#p-input").value = "";
}
