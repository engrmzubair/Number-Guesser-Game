/*
GAME FUNCTION:
-Player must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-Let player choose to play again
*/

//GAME VALUES
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', (e) => {
  const guess = parseInt(guessInput.value);
  console.log(guess);
  //validate
  if (isNaN(guess) || guess < min || guess > max)
    //set message
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');

  //check if won
  if (guess === winningNum) {
    //disable input
    guessInput.disabled = true;
    // change border color
    guessInput.style.borderColor = 'green';
    //set message
    setMessage(`${winningNum} is correct, YOU WON!`, 'green');
  }

  else {

  }
});
//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
  // guessBtn.value = 'Play Again'
  // setTimeout(clearMessage, 3000);
}
//clear message
// function clearMessage() {
//   message.textContent = '';
//   guessInput.value = '';
// }