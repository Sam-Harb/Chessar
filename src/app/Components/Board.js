"use client";
import React, { useState } from 'react';
import Square from './Square';
import Piece from './Piece';
import styles from '../styles/Board.module.css';
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

const Board = () => {
  const [board, setBoard] = useState(initialBoardState);

  const handleMove = (start, end) => {
    const newBoard = [...board];
    const piece = newBoard[start[0]][start[1]];
    if (!piece) return;

    
    newBoard[end[0]][end[1]] = piece;
    newBoard[start[0]][start[1]] = ""; 

    setBoard(newBoard);
  };

  return (
    <div className={styles.chessBoard}>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((piece, colIndex) => (
            <Square key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex}>
              <Piece piece={piece} /> 
            </Square>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
