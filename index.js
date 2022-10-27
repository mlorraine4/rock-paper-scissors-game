let playerScore = 0
let computerScore = 0

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random()* 3);
  let randomChoice = '';
    if (randomNumber === 0) {
    randomChoice = 'rock';
    } else if (randomNumber === 1) {
      randomChoice = 'paper';
    } else randomChoice = 'scissors';
  playRound(randomChoice);
}

function youWin() {
  ++playerScore;
    alert('you win!');
}

function playRound(computerChoice) {
  var playerChoice = prompt('enter rock, paper, or scissors');
  if (computerChoice === playerChoice) {
    alert('tie');
  } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
    youwin();
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

function game() {
  for (let i = 0; i < 4; i++) {
    getRandomChoice();
  }
  if (playerScore > computerScore) {
    console.log("You're the winner! Final Score: " + playerScore + " to: " + computerScore);
  } else if (computerScore > playerScore) {
    console.log("You're the loser. Final Score: " + computerScore + " to: " + playerScore);
  } else
    alert("It's a tie! Both scores are: " + playerScore);
}

game();
