console.log("Hello World");

function getComputerChoice() {
  num = Math.floor(Math.random() * 3) + 1;

  if (num === 1) {
    return "Rock";
  } else if (num === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  playerSelection.toLowerCase();
  console.log(`"You Lose!" ${playerSelection} beats ${computerSelection}!`);
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter option:");
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }
}

game();
