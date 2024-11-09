import React , { useState } from 'react';
import Square from './Square';
import Piece from './Piece';
import styles from './Board.module.css';

const Board=()=>{
  const board = Array.from ({length: 8}, (_, row) => (
  <div key={row} className={styles.row}>
    {Array.from ({length: 8}, (_, col) =>(
      <Square key={`${row}-${col}`} row={row} col ={col}/>
    ))}
  </div>
));
return <div>{board}</div>;
}

const initialBoardState = [
  ["r", "n", "b", "q", "k", "b", "n", "r"], 
  ["p", "p", "p", "p", "p", "p", "p", "p"], 
  ["", "", "", "", "", "", "", ""],       
  ["", "", "", "", "", "", "", ""],        
  ["", "", "", "", "", "", "", ""],        
  ["", "", "", "", "", "", "", ""],        
  ["P", "P", "P", "P", "P", "P", "P", "P"], 
  ["R", "N", "B", "Q", "K", "B", "N", "R"]  
];

const [board, setBoard] = useState(initialBoardState);


export default Board;
