// Jeu de morpion
const currentGame = ["", "", "", "", "", "", "", "", ""];
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";
let cellIndex = "";
const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message");
const replay = document.querySelector("button");
let gameActive = true;

cells.forEach((currentCell) =>
  currentCell.addEventListener("click", () => {
    if (!gameActive) return;
    cellIndex = currentCell.getAttribute("data-index");
    if (currentGame[cellIndex] === "") {
      currentGame[cellIndex] = currentPlayer;
      cells[cellIndex].textContent = currentPlayer;
    }
    if (winner(currentPlayer)) {
      gameActive = false;
      return;
    }
    if (draw()) {
      message.textContent = "Match nul !";
      gameActive = false;
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `C'est au tour de ${currentPlayer} !`;
  })
);

function winner(player) {
  for (let combination of winningCombinations) {
    if (
      currentGame[combination[0]] === player &&
      currentGame[combination[1]] === player &&
      currentGame[combination[2]] === player
    ) {
      message.textContent = `Le joueur ${player} a gagné !`;
      return true;
    }
  }
  return false;
}

function draw() {
  for (let i = 0; i <= 8; i++) {
    if (currentGame[i] === "") {
      return false;
    }
  }
  return true;
}

replay.addEventListener("click", reset);

function reset() {
  for (let i = 0; i <= 8; i++) {
    currentGame[i] = "";
    cells[i].textContent = "";
    gameActive = true;
    currentPlayer = "X";
    message.textContent = `C'est au tour de X !`;
  }
}
