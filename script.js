'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//document.querySelector('.number').textContent = secretNumber;
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    guesstimate();
  }
});
const guesstimate = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Oops! No Number';
    document.querySelector('.score').textContent = score;
  }
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎈 You guessed right!';
    document.querySelector('.number').textContent = guess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score === 20) {
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = score;
    } else {
      score++;
      document.querySelector('.score').textContent = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  if (score > 1) {
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = '🔥 You lost the game';
    score = 0;
    document.querySelector('.score').textContent = score;
  }
  if (guess > secretNumber) {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = '❌ That was too high';
  } else if (guess < secretNumber && guess !== 0) {
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = '❌ That was too low';
  }
};
document.querySelector('.check').addEventListener('click', function () {
  guesstimate();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  //document.querySelector('.number').textContent = secretNumber;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
