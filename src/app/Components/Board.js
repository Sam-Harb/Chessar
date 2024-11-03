import React from 'react';
import Square from './Square';
import Styles from './Board.module.css';

const Board=()=>{
  const board = Array.from ({length: 8}, (_, row) => (
  <div key={row} className={styles.row}>
    {Array.from ({length: 8}, (_, col) =>(
      <Square key={`${row}-${col}`} row={row} col ={col}/>
    ))}
  </div>
);
return <div>{board}</div>;
}