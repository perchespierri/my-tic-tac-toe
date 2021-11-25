import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../calculateWinner';

const Game = () => {
  const nullArray = [Array(9).fill(null)];
  const [history, setHistory] = useState(nullArray)
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const showXorO = xIsNext ? 'X' : 'O';

  const handleClick = (index) => { // onClickBoard and onClickSquare
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // return if won or occupied
    if (winner || squares[index]) return;
    // select square
    squares[index] = showXorO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  }

  const renderMoves = () => (
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>
            {destination}
          </button>
        </li>
      )
    })
  )

  return (
    <>
      <h1>Tic-Tac-Toe made with Hooks</h1>
      <Board squares={history[stepNumber]} onClickBoard={handleClick} />
      <div className="info-wrapper">
        <div>  
          <h3>History</h3>
          {renderMoves()}
        </div>  
        <h3>{winner ? `Winner: ${winner}` : `Next player: ${showXorO}`}</h3>
      </div>
    </>
  );
};

export default Game;
