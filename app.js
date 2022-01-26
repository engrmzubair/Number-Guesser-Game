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
  winningNum = Math.floor(Math.random() * (min - 1)) + 1;
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
guessBtn.addEventListener('click', () => {
  if (guessBtn.value === 'Play Again') {
    guessInput.value = '';
    return location.reload();
  }
  const guess = parseInt(guessInput.value);
  //validate
  if (isNaN(guess) || guess < min || guess > max)
    //set message
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');

  //check if won
  else if (guess === winningNum) {
    //game over --won
    gameOver(true, `${winningNum} is correct, YOU WON!`)
  }
  else {
    //wrong number
    guessesLeft -= 1;
    //check whether guesses left or not
    if (guessesLeft === 0) {
      //game over --lost
      gameOver(false, `Game Over, YOU LOST!, The correct number was ${winningNum}`);
    }
    else {
      //game continues -- answer wrong

      //clear the input 
      guessInput.value = '';
      //tell users its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} Guesses Left`, 'red')
    }
  }

});

//game over
function gameOver(won, msg) {
  let color;
  (won === true) ? color = 'green' : color = 'red';

  //guessInput disabled
  guessInput.disabled = true;
  //set message
  setMessage(msg, color)
  guessBtn.value = 'Play Again';
}

//set message
function setMessage(msg, color) {
  //change the border color
  guessInput.style.borderColor = color;
  //change text color
  message.style.color = color;
  //display message in span tag
  message.textContent = msg;
}