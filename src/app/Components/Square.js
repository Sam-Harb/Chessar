import React from 'react';
import Styles from './Board.module.css';


const Square=({ row, col }) =>{
  const isBlack = (col + row) % 2 === 1;
  const squareClass = isBlack ? styles.black : styles.white;

  return <div clasName={`${styles.square} ${squareClass}`}></div>
}

export default Square;