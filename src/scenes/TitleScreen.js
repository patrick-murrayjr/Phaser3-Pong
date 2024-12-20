import Phaser from 'phaser';

export default class TitleScreen extends Phaser.Scene {
   preload() {}
   create() {
      const titleText = this.add.text(400, 250, 'Title Screen', { fill: '#ffffff' });
      titleText.setOrigin(0.5, 0.5);
   }
}
