import React from 'react';
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

export default Board;

const initialBoardState={
  '0,0': 'rook', '0,1': 'knight', '0,2': 'bishop', '0,3': 'queen', '0,4': 'king', '0,5': 'bishop',
  '0,6':'knoght', '0,7':'rook', '1,0': 'pawn', '1,1':'pawn', '1,2':'pawn', '1,3': 'pawn', '1,4':'pawn', 
  '1,5':'pawn', '1,5':'pawn', '1,6':'pawn', '1,7':'pawn', '6,0':'pawn', '6,1':'pawn', 
  '6,2': 'pawn', '6,3':'pawn', '6,4':'pawn', '6,5':'pawn', '6,6':'pawn', '6,7':'pawn',
  '7,0': 'rook', '7,1':'knight', '7,2':'bishop', '7,2':'queen', '7,4':'king', '7,5':'bishop',
  '7.6':'knight','7,7':'rook'

}