import {
  createGame,
  Player,
  Space,
  Piece,
  Game,
} from '@boardzilla/core';

export class MyGamePlayer extends Player<MyGame, MyGamePlayer> {
}

class MyGame extends Game<MyGame, MyGamePlayer> {
}

export default createGame(MyGamePlayer, MyGame, game => {

  const { action } = game;
  const { playerActions, loop, eachPlayer } = game.flowCommands;

  game.defineActions({
  });

  game.defineFlow(
  );
});
