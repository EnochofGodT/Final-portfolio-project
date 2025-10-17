let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const cells = document.querySelectorAll(".cell");
const gameStatus = document.querySelector(".game-status");
const resetButton = document.getElementById("reset-button");

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameOver) return;
    if (gameBoard[index] !== "") return;
    gameBoard[index] = currentPlayer;
    cell.textContent = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  });
});

resetButton.addEventListener("click", () => {
  gameOver = false;
  currentPlayer = "X";
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  gameStatus.textContent = "";
});

function checkWinner() {
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

  for (const combination of winningCombinations) {
    if (
      gameBoard[combination[0]] === gameBoard[combination[1]] &&
      gameBoard[combination[1]] === gameBoard[combination[2]] &&
      gameBoard[combination[0]] !== ""
    ) {
      gameOver = true;
      gameStatus.textContent = `Player ${gameBoard[combination[0]]} wins!`;
      return;
    }
  }

  if (!gameBoard.includes("")) {
    gameOver = true;
    gameStatus.textContent = "It's a draw!";
  }
}
