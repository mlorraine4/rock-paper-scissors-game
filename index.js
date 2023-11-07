let playerScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll(".btn");
var playerChoice = "";
var computerChoice = "";

let results = document.getElementById("results");
results.textContent = "Player score: 0 Computer score: 0";

for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playerChoice = this.innerHTML;
    getRandomChoice();
    playRound();
    results.textContent =
      "Player score: " + playerScore + " Computer score: " + computerScore;
    if (computerScore === 5) {
      results.textContent = "Computer wins the game!";
      restart();
    }
    if (playerScore === 5) {
      results.textContent = "Congrats! You win the game!";
      restart();
    }
  });
}

function restart() {
  playerScore = 0;
  playerChoice = "";
  computerScore = 0;
  computerChoice = "";
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else computerChoice = "scissors";
}

function youWin() {
  ++playerScore;
  alert("you win!");
}

function compWin() {
  ++computerScore;
  alert("you lose!");
}

function playRound() {
  if (computerChoice === playerChoice) {
    alert("tie");
  }
  if (computerChoice === "rock" && playerChoice === "scissors") {
    youWin();
  }
  if (computerChoice === "rock" && playerChoice === "paper") {
    compWin();
  }
  if (computerChoice === "paper" && playerChoice === "scissors") {
    youWin();
  }
  if (computerChoice === "paper" && playerChoice === "rock") {
    compWin();
  }
  if (computerChoice === "scissors" && playerChoice === "rock") {
    youWin();
  }
  if (computerChoice === "scissors" && playerChoice === "paper") {
    compWin();
  }
}
