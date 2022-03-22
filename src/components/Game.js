import React, { useState } from "react";
import './styles/Game.css';
import Board from "./Board";

function Game() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [whoIsNext, setWhoisNext] = useState(true);
    const winner = calculateWinner(board);

    function handleClick(i) {
        const copy = [...board];
        if (calculateWinner(board) || copy[i]) return;

        copy[i] = whoIsNext ? 'X' : 'O';
        setBoard(copy);
        setWhoisNext(!whoIsNext);
      }

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
      
    const start = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Go to game start
        </button>
    )
    return (
        <div className="game">
            <div className="game-board">
                <Board squares={board} onClick={ handleClick } />
                <div className="status">
                    <p> {winner ? 'Winner: ' + winner : 'Next Player: ' + (whoIsNext ? 'X' : 'O')} </p>
                    {start()}
                </div>
            </div>
        </div>
    )
}

export default Game;