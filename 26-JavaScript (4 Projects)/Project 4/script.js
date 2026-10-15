// JavaScript ---------->

const randomNumber = parseInt(Math.random() * 10 + 1);
const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startHover = document.querySelector('.resultParas');


// -->
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })

}


// Validation Process -->
function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter Valid Number');
    } else if(guess < 1){
        alert('Please Enter a Number More Than 1');
    } else if(guess > 100){
        alert('Please Enter a Number Less Than 100');
    } else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You Gussed it Right`);
        endGame();
    } else if(guess < randomNumber){
        displayMessage(`Number is Too Low`);
    } else if(guess > randomNumber){
        displayMessage(`Number is Too High`);
    }
}

function displayGuess(guess){
    // 
}

function displayMessage(){
    // 
}

function endGame(){
    //
}

function newGame(){
    // 
}





























































































































































































































