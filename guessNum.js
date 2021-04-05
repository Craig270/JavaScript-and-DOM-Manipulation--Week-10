"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉Correct Number!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log(document.querySelector(".number").textContent);
console.log(secretNumber);
document.querySelector(".check").addEventListener("click", () => {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈Too High of a number";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉Too Low of a number";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start Guessing";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
