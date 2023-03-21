const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');
const messageThree = document.getElementById('message-3');

const answer = Math.floor(Math.random() * 100) + 1;
let noOfGuesses = 0;
let guessedNums = [];

function play() {
  let userGuess = document.getElementById('guess').value;

  if (userGuess < 1 || userGuess > 100) {
    alert('Please enter a number between 1 and 100');
  } else {
    guessedNums.push(userGuess);
    noOfGuesses += 1;

    if (userGuess < answer) {
      messageOne.textContent = 'Your guess is too low.';
      messageTwo.textContent = 'No. of guesses: ' + noOfGuesses;
      messageThree.textContent = 'Guessed numbers are: ' + guessedNums;
    } else if (userGuess > answer) {
      messageOne.textContent = 'Your guess is too high.';
      messageTwo.textContent = 'No. of guesses: ' + noOfGuesses;
      messageThree.textContent = 'Guessed numbers are: ' + guessedNums;
    } else if (userGuess == answer) {
      messageOne.textContent = 'You win!';
      messageTwo.textContent = 'The number was: ' + answer;
      messageThree.textContent =
        'You guessed it in ' + noOfGuesses + 'guesses.';
    }
  }
}
