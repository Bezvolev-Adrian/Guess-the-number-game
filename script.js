'use strict';

let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;
console.log('numar random initial: ' + secretNumber);

function displayMessage(message)  { 
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
const guess = Number(document.querySelector('.guess').value);
   
    if(!guess)  { 
        // document.querySelector(".message").textContent = '⛔ No number!';
        displayMessage('⛔ No number!');
    }

    else if(guess === secretNumber)  { 
        displayMessage('🎉Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').addEventListener('click', function() {document.querySelector('.message').textContent = ' Press the Again! button to play again!'; })

        if(score > highscore)  {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore; }
            
    }
    else if(guess !== secretNumber) {
        if(score > 1) {
           // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low!';
           displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score --;
            document.querySelector('.score').textContent = score;
            } 
            else { 
                //document.querySelector('.message').textContent = 'You lost :(';
                displayMessage('You lost :(');
                document.querySelector('.score').textContent = 0;
            }
    }

    // REFACTORING 

   /* else if(guess > secretNumber) {
        if(score > 1) {
        document.querySelector('.message').textContent = 'Too high!';
        score --;
        document.querySelector('.score').textContent = score;
        } 
        else { 
            document.querySelector('.message').textContent = 'You lost :(';
            document.querySelector('.score').textContent = 0;
        }
                        
    }

    else if(guess < secretNumber) {
        if(score > 1) { 
        document.querySelector('.message').textContent = 'Too low!';
        score --;
        document.querySelector('.score').textContent = score; 
        }
        else  { 
            document.querySelector('.message').textContent = 'You lost :(';
            document.querySelector('.score').textContent = 0;
        }
    } */
})

document.querySelector('.again').addEventListener('click', function ()  { 
    score = 20;
    document.querySelector('.score').textContent = score; 
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    console.log('numar random dupa reset: ' + secretNumber); 
    // document.querySelector(".message").textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector(".guess").value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    
})

