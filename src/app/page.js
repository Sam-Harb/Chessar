import React from 'react';
import Board from './components/Board';

export default function Page() {
  return (
    <div>
       <h1>Chessart</h1>
      <div className='boardContainer'>
        <Board />
      </div>
      <h2>El primer proyecto en Next de Samsara Harb. Noviembre 2024</h2>
    </div>
  );
}
