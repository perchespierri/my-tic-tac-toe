import React from 'react';
import Square from './Square';

const Board = ({ squares, onClickBoard }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square} 
          onClickSquare={() => onClickBoard(index)}
        />
      ))};
    </div>
  );
}

export default Board;
