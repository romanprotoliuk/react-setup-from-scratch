const winningCombo = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

let cells = Array(9).fill(null);
let currentPlayerX = true;

document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const statusText = document.getElementById('game-status');
    const resetButton = document.getElementById('reset-button');

    function renderBoard() {
        board.innerHTML = '';
        cells.forEach((cell, index) => {
            const cellElement = document.createElement('button');
            cellElement.classList.add('cell');
            cellElement.textContent = cell;
            cellElement.addEventListener('click', () => handleCellClick(index));
            board.appendChild(cellElement);
        });
    }

    function checkWinner() {
        for (let combo of winningCombo) {
            const [a, b, c] = combo;
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                updateStatus(`Winner is ${cells[a]}!`);
                return cells[a];
            }
        }
        if (!cells.includes(null)) {
            updateStatus("It's a draw!");
            return 'Draw';
        }
        return null;
    }

    function handleCellClick(index) {
        if (!cells[index] && !checkWinner()) {
            cells[index] = currentPlayerX ? 'X' : 'O';
            currentPlayerX = !currentPlayerX;
            renderBoard();
            checkWinner();
        }
    }

    function updateStatus(message) {
        statusText.textContent = message;
    }

    function resetGame() {
        cells = Array(9).fill(null);
        currentPlayerX = true;
        updateStatus('Player: X');
        renderBoard();
    }

    resetButton.addEventListener('click', resetGame);

    updateStatus('Player: X');
    renderBoard();
});
