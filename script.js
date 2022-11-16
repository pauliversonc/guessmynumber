'use strict';

// random number between 1 - 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

let currentScore = 20;
let highScore    = 0;


const updateHighScore = function (newhighscore) {
  document.querySelector('.highscore').textContent = newhighscore;
}

const updateCurrentScore = function (updateCurrentScore) {
  document.querySelector('.score').textContent = updateCurrentScore;
}

const displayMessage = function (message) {
  return document.querySelector('.message').textContent = message;
}

const updateNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
}

function resetScore() {
  currentScore = 20
  updateCurrentScore(20)
}




document.querySelector('.check').addEventListener('click', function () {
  
  // get guess value and covert it to number type
  const guessValue = Number(document.querySelector('.guess').value);

    // when guess is not valid
    if(!guessValue || guessValue >= 20) {
      displayMessage('Input valid number!');
    }

    // when guess matched
    else if (guessValue === secretNumber) {
      displayMessage('🎉 Correct Number!');
      updateNumber(secretNumber)
      
      // design
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.check').disabled = true;
      
      // when current score is greter than high score
      if (currentScore > highScore) {
        highScore = currentScore
        updateHighScore(currentScore)
      } 
    } 
    
    // when guess is wrong
    else {
      // when current score can be deducted
      if (currentScore > 1) {
        // deduction
        currentScore--
        updateCurrentScore(currentScore)
        // give hints
        displayMessage(guessValue > secretNumber ? '📈 Too high!' : '📉 Too low!');
      } 
      // when current score is 0
      else {
        displayMessage('💥 You lost the game!');
        updateCurrentScore(0)
      }
    }
});

// Play Again
document.querySelector('.again').addEventListener('click', function () {
  resetScore()
  displayMessage('Start guessing...')
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  updateCurrentScore(currentScore)
  updateNumber('?')
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
})

