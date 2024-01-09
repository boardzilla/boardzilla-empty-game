import {
  createGame,
  createBoardClasses,
  Player,
  Board,
} from '@boardzilla/core';

export class MyGamePlayer extends Player<MyGamePlayer, MyGameBoard> {
};

class MyGameBoard extends Board<MyGamePlayer, MyGameBoard> {
}

const { Space, Piece } = createBoardClasses<MyGamePlayer, MyGameBoard>();

export default createGame(MyGamePlayer, MyGameBoard, game => {

  const { board, action } = game;
  const { playerActions, loop, eachPlayer } = game.flowCommands;

  board.registerClasses();

  game.defineActions({
  });

  game.defineFlow(
  );
});
