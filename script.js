"use strict";

let score = 20;
let highScore = 0;
let generatedNumber = Number(Math.floor(Math.random() * 20) + 1);

function changeMessage(classID, text) {
  document.querySelector(`${classID}`).textContent = text;
}

document.querySelector(".check").addEventListener("click", function () {
  const guessedNumber = Number(document.querySelector(".guess").value);
  if (guessedNumber === generatedNumber) {
    changeMessage(".message", "YOU WIN!");
    changeMessage(".number", generatedNumber);
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (highScore < score) {
      highScore = score;
      changeMessage(".highscore", highScore);
    }
  } else {
    changeMessage(
      ".message",
      guessedNumber < generatedNumber ? "TOO LOW!" : "TOO HIGH!"
    );

    if (score === 0) {
      changeMessage(".message", "YOU LOSE! GAME OVER!!!");
    } else {
      score--;
      changeMessage(".score", score);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  changeMessage(".score", 20);
  changeMessage(".number", "?");
  changeMessage(".message", "Start guessing...");
  changeMessage(".guess", "");
  score = 20;
  generatedNumber = Number(Math.floor(Math.random() * 20) + 1);
  document.querySelector("body").style.backgroundColor = "#fd135a";
});
