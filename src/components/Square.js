import React from 'react'

const Square = ({ value, onClickSquare }) => {
  const style = value ? `squares ${value}` : 'squares';
  return (
    <button className={style} onClick={onClickSquare}>
      {value}
    </button>
  )
}

export default Square;
