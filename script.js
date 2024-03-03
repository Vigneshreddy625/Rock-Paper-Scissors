const message = document.querySelector(".msg");
const icon = document.querySelectorAll(".icons");
const result = document.querySelector(".result");
const startgame = document.getElementById("start");
const endgame = document.getElementById("end");
const myscore = document.getElementById("My-score");
const compscore = document.getElementById("Comp-score");
let player1;
let player2;

function begin() {
  initGame();
  icon.forEach(function (icons) {
    icons.addEventListener("click", chooseSymbol);
  });
  startgame.style.display = "none";
  endgame.style.display ="block";
}

function getSymbol(value) {
  switch (value) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "";
  }
}

function initGame() {
  player1 = "";
  result.innerHTML = "";
  message.innerHTML = "";
}

function chooseSymbol(event) {
  const selectedIcon = event.currentTarget;
  player1 = parseInt(selectedIcon.id);
  console.log("Selected icon ID:", player1);
  player2 = Math.floor(Math.random() * 3) + 1;
  console.log(player2);
  message.innerHTML = `Player: ${getSymbol(player1)}  -  Computer: ${getSymbol(
    player2
  )}`;
  checkWinner();
}

function checkWinner() {
  if (
    (player1 == 1 && player2 == 2) ||
    (player1 == 2 && player2 == 3) ||
    (player1 == 3 && player2 == 1)
  ) {
    compscore.innerHTML = parseInt(compscore.innerHTML) + 1;
    result.innerHTML = "You lose";
    result.style.backgroundColor = "red";
    result.style.display = "block";
  } else if (
    (player1 == 1 && player2 == 3) ||
    (player1 == 2 && player2 == 1) ||
    (player1 == 3 && player2 == 2)
  ) {
    myscore.innerHTML = parseInt(myscore.innerHTML) + 1;
    result.innerHTML = "You won";
    result.style.backgroundColor = "green";
    result.style.display = "block";
  } else {
    result.innerHTML = "It's a draw";
    result.style.backgroundColor = "blue";
    result.style.display = "block";
  }
}

function endGame() {
    endgame.style.display ="none";
  icon.forEach(function (icons) {
    icons.removeEventListener("click", chooseSymbol);
  });
  result.innerHTML = "";
  message.innerHTML = ""
  startgame.style.display = "block";
  result.style.display = "none";
  message.style.display = "none";
  compscore.innerHTML = 0;
  myscore.innerHTML=0;
}

startgame.addEventListener("click", begin);
