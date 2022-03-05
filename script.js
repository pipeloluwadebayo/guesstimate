"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ Oops! No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎈 You guessed right!";
    if (score === 20) {
      document.querySelector(".score").textContent = score;
      document.querySelector(".highscore").textContent = score;
    } else {
      score++;
      document.querySelector(".score").textContent = score;
      if (score > highScore) {
        highScore = score;
      } else {
        highScore = highScore;
      }
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  if (guess !== secretNumber) {
    document.querySelector("body").style.backgroundColor = "#222";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent =
        guess > secretNumber ? "❌ That was too high" : "❌ That was too low";
    } else {
      document.querySelector(".message").textContent = "🔥 You lost the game";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
// if (guess > secretNumber) {
//   document.querySelector(".message").textContent = "❌ That was too high";
//   score--;
//   document.querySelector(".score").textContent = score;
//   document.querySelector("body").style.backgroundColor = "#222";
// } else if (guess < secretNumber) {
//   document.querySelector(".message").textContent = "❌ That was too low";
//   score--;
//   document.querySelector(".score").textContent = score;
// }
// } else {
//   document.querySelector(".message").textContent = "🔥 You lost the game";
//   score = 0;
//   document.querySelector(".score").textContent = score;
// }
// if (guess === secretNumber) {
//   document.querySelector("body").style.backgroundColor = "#60b347";
//   document.querySelector(".number").style.width = "30rem";
// } else {
// document.querySelector("body").style.backgroundColor = "#222";
// }

// window.addEventListener("load", event => {
//   document.querySelector(".again").onclick = function () {
//     location.reload(true);
//   };
// });
