const title = document.querySelector(".modal_title");
const buttons = document.querySelectorAll("button");
const player_score = document.querySelector(".player_score");
const computer_score = document.querySelector(".computer_score");
const modal = document.querySelector(".modal");
const resetBtn = document.querySelector(".modal_button");
const overlay = document.querySelector(".overlay");
const comp_choice = document.querySelector(".comp_selection");
const ties = document.querySelector(".ties");
let pscore = 0;
let cscore = 0;
let tie = 0;

function getComputerChoice() {
  num = Math.floor(Math.random() * 3) + 1;

  if (num === 1) {
    comp_choice.src = "assets/fist.png";
    return "Rock";
  } else if (num === 2) {
    comp_choice.src = "assets/palm-of-hand.png";
    return "Paper";
  } else {
    comp_choice.src = "assets/scissor.png";
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

  if (playerOption === computerSelection) {
    tie++;
    return (ties.textContent = `Ties: ${tie}`);
  }
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
    modal.classList.add("modal_active");
    overlay.classList.add("active");
  }
  if (cscore === 5) {
    title.textContent = "Game over!! Computer Wins!! ";
  }
  if (pscore === 5) {
    title.textContent = "Game over!! Player Wins!! ";
  }
}

resetBtn.addEventListener("click", startGame);
overlay.addEventListener("click", startGame);

function startGame() {
  pscore = 0;
  cscore = 0;
  tie = 0;
  computer_score.textContent = cscore;
  player_score.textContent = pscore;
  ties.textContent = `Ties: ${tie}`;
  title.textContent = "";
  comp_choice.src = "";
  modal.classList.remove("modal_active");
  overlay.classList.remove("active");
}
