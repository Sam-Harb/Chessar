import React from 'react';
import styles from '../styles/Board.module.css';
import { Children } from 'react';


const Square=({ row, col, children}) =>{
  const isBlack = (col + row) % 2 === 1;
  const squareClass = isBlack ? styles.black : styles.white;

  return <div className={`${styles.square} ${squareClass}`}>
    {children}
  </div>
}

export default Square;