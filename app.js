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

// function playRound(playerSelection, computerSelection) {
//   playerSelection =
//     playerSelection.charAt(0).toUpperCase() +
//     playerSelection.slice(1).toLowerCase();
//   playerSelection.toLowerCase();
//   console.log(`"You Lose!" ${playerSelection} beats ${computerSelection}!`);
// }

const buttons = document.querySelectorAll("button");
const player_score = document.querySelector(".player_score");
const computer_score = document.querySelector(".computer_score");
let pscore = 0;
let cscore = 0;

buttons.forEach((button) =>
  button.addEventListener("click", function handleClick(event) {
    let playerOption = event.target.className;
    game(playerOption);
  })
);

function game(playerOption) {
  let computerSelection = getComputerChoice();
  if (playerOption === computerSelection) {
    console.log("Tie");
  } else if (playerOption === "Rock") {
    if (computerSelection === "Paper") {
      cscore++;
      computer_score.textContent = cscore;
    } else {
      pscore++;
      player_score.textContent = pscore;
    }
  }

  console.log(`${computerSelection} and ${playerOption}`);
  winner();
}

function winner() {
  if (cscore === 5 || pscore === 5) {
    console.log("game over");
  }
}
