const title = document.querySelector(".title");
const buttons = document.querySelectorAll("button");
const player_score = document.querySelector(".player_score");
const computer_score = document.querySelector(".computer_score");
let pscore = 0;
let cscore = 0;

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

buttons.forEach((button) =>
  button.addEventListener("click", function handleClick(event) {
    let playerOption = event.target.className;
    game(playerOption);
  })
);
function game(playerOption) {
  let computerSelection = getComputerChoice();

  if (playerOption === computerSelection) return;
  if (playerOption === "Rock") {
    if (computerSelection === "Paper") {
      cscore++;
      computer_score.textContent = cscore;
    } else {
      pscore++;
      player_score.textContent = pscore;
    }
  }

  if (playerOption === "Paper") {
    if (computerSelection === "Rock") {
      pscore++;
      player_score.textContent = pscore;
    } else {
      cscore++;
      computer_score.textContent = cscore;
    }
  }

  if (playerOption === "Scissors") {
    if (computerSelection === "Rock") {
      cscore++;
      computer_score.textContent = cscore;
    } else {
      pscore++;
      player_score.textContent = pscore;
    }
  }

  winner();
}

function winner() {
  if (cscore === 5 || pscore === 5) {
    buttons.forEach((button) => button.setAttribute("disabled", true));
  }
  if (cscore === 5) {
    title.textContent = "Game over!! Computer Wins!! ";
  }
  if (pscore === 5) {
    title.textContent = "Game over!! Player Wins!! ";
  }
}

const resetBtn = document.createElement("button");
resetBtn.innerText = "Restart Game";
document.body.appendChild(resetBtn);
resetBtn.addEventListener("click", startGame);

function startGame() {
  pscore = 0;
  cscore = 0;
  computer_score.textContent = cscore;
  player_score.textContent = pscore;
  buttons.forEach((button) => button.removeAttribute("disabled"));
  title.textContent = "Start Game";
}
