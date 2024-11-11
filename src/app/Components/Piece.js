import React from 'react';

const pieceSymbols = {
  r: "♜", n: "♞", b: "♝", q: "♛", k: "♚", p: "♟",
  R: "♖", N: "♘", B: "♗", Q: "♕", K: "♔", P: "♙",
};

const Piece = ({ piece }) => {
  if (!piece) return null;

  return <span>{pieceSymbols[piece]}</span>;
};

export default Piece;
