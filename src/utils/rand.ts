import { Piece } from "../types";

export const getRandomPieces = (): [Piece, Piece] => {
  const pieces: Piece[] = ["white", "black"];

  for (let i = pieces.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
  }

  return [pieces[0], pieces[1]];
};
