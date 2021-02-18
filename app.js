'use strict';
let l = console.log; 

// l(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number';
// l(document.querySelector('.message').textContent = '🎉 Correct number');
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// l(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highscore  = 0;

const displayMsg  = (message) => {
  document.querySelector('.message').textContent =  message;
}

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  

  //When there is no input
  if(!guess) {
    // document.querySelector('.message').textContent =  '🚫 No number!';
    displayMsg('🚫 No number!');
    //when player wins
  } else if(guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMsg('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    
    if(score>highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    

  }else if( guess !== secretNumber) {
    if(score > 1) {

      score--;
      document.querySelector('.score').textContent = score;
      if(guess > secretNumber) {
        // document.querySelector('.message').textContent = '⬆️ Too High';
        displayMsg('⬆️ Too High');
      } else if(guess <secretNumber){ 
        // document.querySelector('.message').textContent = '⬇️ Too Low';
        displayMsg('⬇️ Too Low');
      }
    } else {
      // document.querySelector('.message').textContent = '💀You lost the game 😢';
      displayMsg('💀You lost the game 😢');
      document.querySelector('.score').textContent = 0;
    }
  } 


});

document.querySelector('.again').addEventListener('click', () => {
  
  score=20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector('.message').textContent = 'Start guessing';
  displayMsg('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  
});