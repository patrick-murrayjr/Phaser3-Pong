import Phaser, { Physics } from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import Game from './scenes/Game';

const config = {
   width: 800,
   height: 500,
   type: Phaser.AUTO,
   physics: {
      default: 'arcade',
      arcade: {
         gravity: { y: 0 },
         debug: true,
      },
   },
};

const game = new Phaser.Game(config);

game.scene.add('TitleScreen', TitleScreen);
game.scene.add('Game', Game);

game.scene.start('Game');
