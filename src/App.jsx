import React from "react";
import "./App.css";

const winningCombo = [
  [0, 1, 2], // Horizontal
  [3, 4, 5], // Horizontal
  [6, 7, 8], // Horizontal
  [0, 3, 6], // Vertical
  [1, 4, 7], // Vertical
  [2, 5, 8], // Vertical
  [0, 4, 8], // Diagonal
  [2, 4, 6], // Diagonal
];

// check winner func
function checkWinner(cells) {
  for (let i = 0; i < winningCombo.length; i++) {
    const [a, b, c] = winningCombo[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      console.log("Winner!", cells[a]);
      return cells[a];
    }
  }
  return null;
}

const App = () => {
  const [cells, setCells] = React.useState(Array(9).fill(null));
  const [currentPlayerX, setCurrentPlayerX] = React.useState(true);

  const winner = checkWinner(cells);

  const handleCellClick = (index) => {
    const newCells = [...cells];
    if (currentPlayerX && winner === null) {
      newCells[index] = "X";
      setCurrentPlayerX(!currentPlayerX);
    } else if (!currentPlayerX && winner === null) {
      newCells[index] = "O";
      setCurrentPlayerX(!currentPlayerX);
    }
    setCells(newCells);
  };

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayerX(true);
    console.log("Reset button is clicked");
    // setCells to the new cells
  };

  const winningMessage = winner ? `Player ${winner} wins!` : "It's a draw!";

  const message = () => {
    if (winner !== null) return `Player ${winner} wins!`;
    if (!cells.includes(null)) return "It's a draw!";
    return `Player: ${currentPlayerX ? "X" : "O"}`;
    // winner is not null - winner
    // board does not contain null - draw
    // else - next player
  };

  const mappedCells = cells.map((cell, index) => {
    return (
      <button
        key={index}
        className="cell"
        aria-label="CEll"
        disabled={cell || winner}
        onClick={() => handleCellClick(index)}
      >
        <span aria-hidden="true">{cell}</span>
      </button>
    );
  });

  console.log(cells);

  return (
    <div className="App">
      <header>
        <h2>{message()}</h2>
        <div className="container">
          <div className="board">{mappedCells}</div>
        </div>
        <button className="btn-reset" onClick={handleReset}>
          Reset
        </button>
      </header>
    </div>
  );
};

export default App;
