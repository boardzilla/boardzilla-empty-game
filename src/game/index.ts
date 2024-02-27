import {
  createGame,
  createGameClasses,
  Player,
  Game,
} from '@boardzilla/core';

export class MyGamePlayer extends Player<MyGamePlayer, MyGame> {
};

class MyGame extends Game<MyGamePlayer, MyGame> {
}

const { Space, Piece } = createGameClasses<MyGamePlayer, MyGame>();

export default createGame(MyGamePlayer, MyGame, game => {

  const { action } = game;
  const { playerActions, loop, eachPlayer } = game.flowCommands;

  game.registerClasses();

  game.defineActions({
  });

  game.defineFlow(
  );
});
