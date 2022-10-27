let playerScore = 0
let computerScore = 0
let button = document.querySelectorAll('#btn');
var playerChoice = '';
var computerChoice = '';

let results = document.getElementById('results')
results.textContent = 'Player score: 0 Computer score: 0'

for (i=0; i<button.length; i++) {
  button[i].addEventListener('click', function() {
    playerChoice = this.innerHTML;
    console.log(playerChoice);
    getRandomChoice();
    playRound();
    results.textContent = 'Player score: ' + playerScore + ' Computer score: ' +computerScore
    if (computerScore === 5) {
      results.textContent = 'Computer wins the game!'
    }
    if (playerScore === 5) {
      results.textContent = 'Congrats! You win the game!'
    }
  });
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random()* 3);
    if (randomNumber === 0) {
    computerChoice = 'rock';
    } else if (randomNumber === 1) {
      computerChoice = 'paper';
    } else computerChoice = 'scissors';
    console.log(computerChoice);
}

function youWin() {
  ++playerScore;
    alert('you win!');
}

function playRound() {
  if (computerChoice === playerChoice) {
    alert('tie');
  } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    youWin();
  } else if (computerChoice === 'rock' && playerChoice === 'paper') {
    ++computerScore
    alert('you lose!');
  } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
    youWin();
  } else if (computerChoice === 'paper' && playerChoice === 'rock') {
    ++computerScore
    alert('you lose!');
  } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
    youWin();
  } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
    ++computerScore
    alert('you lose!');
  } else console.log('what?');
}
