const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let gameOver = false;

// Handle cell click
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    if (cell.textContent === '' && !gameOver) {
      cell.textContent = currentPlayer;
      cell.classList.add(currentPlayer);

      if (checkWinner(currentPlayer)) {
        alert(`${currentPlayer} wins!`);
        gameOver = true;
        return;
      }

      if (isDraw()) {
        alert("It's a draw!");
        gameOver = true;
        return;
      }

      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  });
});

// Reset Game
function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('X', 'O');
  });
  currentPlayer = 'X';
  gameOver = false;
}

// Check winner
function checkWinner(player) {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  return winCombos.some(combo => {
    return combo.every(index => cells[index].textContent === player);
  });
}

// Check draw
function isDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}
