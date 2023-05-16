'use strict';

/*********VARIABLE DECLARATIONS*********/
//MODAL BUTTONS
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.instructions');

//DIFFICULTY BUTTONS AND VARIABLE
const easyDifficulty = document.querySelector('.eas-diff');
const mediumDifficulty = document.querySelector('.med-diff');
const hardDifficulty = document.querySelector('.har-diff');

//CONSTANT VALUES FOR SCORE
const EASY_DIFF = 50;
const MEDIUM_DIFF = 500;
const HARD_DIFF = 5000;

let difficulty = EASY_DIFF;

//CREATE RANDOM NUMBERS AND STORE IT TO NUMBER VALUE
let secretNumber = Math.trunc(Math.random() * difficulty) + 1;

//INITIAL PLAYER SCORE AND HIGHSCORE
let score = 20;
let highScore = 0;

//CHECK BUTTON FUNCTION
const checkAnswerFunction = function () {
  //Store value entered in guess input field to variable guess
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //Text for NO RETRIEVABLE INPUTS in Text Field
    document.querySelector('.message').textContent = '⛔️ No number Entered!';
  } else if (guess === secretNumber) {
    //Check for High Score
    highScoreChecker();
    //Text for Correct Number
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    //Display Correct Number inside Box
    document.querySelector('.number').textContent = secretNumber;

    //Set Background Color of Page to Green
    document.querySelector('body').style.backgroundColor = '#60b347';
    //Increase Width of Box containing the Number
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
    //Game Over Conditions
    if (score === 0) {
      document.querySelector('.message').textContent = '💥 Game Over!';
    }
  }
};

function highScoreChecker() {
  //HIGH SCORE CHECKER FUNCTION
  if (highScore < score) {
    //Change High Score to current Score
    highScore = score;
    //Set High Score Text to Score
    document.querySelector('.highscore').textContent = highScore;
  }
}

//RESET GAME FUNCTION
const reloadGameFunction = function () {
  //Reset Score to Default
  score = 20;
  //Reset Secret Number
  secretNumber = Math.trunc(Math.random() * difficulty) + 1;

  //Reset Message to Default
  document.querySelector('.message').textContent = 'Start guessing...';
  //Reset Score Text to Zero
  document.querySelector('.score').textContent = score;
  //Reset Number Text to Default Question Mark
  document.querySelector('.number').textContent = '?';
  //Reset Input Box Text to Default
  document.querySelector('.guess').value = ' ';

  //Reset Background Color of Page to Default
  document.querySelector('body').style.backgroundColor = '#222';
  //Reset Width of Box containing the Number to Default
  document.querySelector('.number').style.width = '15rem';
};

//Function for Opening Modal Window
const modalOpened = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Function for Closing Modal Window
const modalClosed = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//INITIAL SCREEN
modalOpened();

//OPEN MODAL WINDOW
btnsOpenModal.addEventListener('click', modalOpened);

//CLOSE MODAL WINDOW
btnCloseModal.addEventListener('click', modalClosed);
overlay.addEventListener('click', modalClosed);

//Close on Escape Key Press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modalClosed();
  }
});

//EASY DIFFICULTY BUTTONS
easyDifficulty.addEventListener('click', function () {
  difficulty = EASY_DIFF;
  document.querySelector(
    '.between'
  ).textContent = `(Between 1 and ${difficulty})`;
  reloadGameFunction();
});

//MEDIUM DIFFICULTY BUTTONS
mediumDifficulty.addEventListener('click', function () {
  difficulty = MEDIUM_DIFF;
  document.querySelector(
    '.between'
  ).textContent = `(Between 1 and ${difficulty})`;
  reloadGameFunction();
});

//HARD DIFFICULTY BUTTONS
hardDifficulty.addEventListener('click', function () {
  difficulty = HARD_DIFF;
  document.querySelector(
    '.between'
  ).textContent = `(Between 1 and ${difficulty})`;
  reloadGameFunction();
});

//CHECK BUTTON PRESS EVENT
document.querySelector('.check').addEventListener('click', checkAnswerFunction);

//AGAIN BUTTON PRESS EVENT
document.querySelector('.again').addEventListener('click', reloadGameFunction);

/* FYI: btn is also the class name for the button, albeit a more generic name. It is also used for the Again Button. Used mainly for easier styling. We will use the class name check for a more specific name for the Check Button */
