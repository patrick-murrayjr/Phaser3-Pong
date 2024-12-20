import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
   preload() {}
   create() {
      const colorWhite = 0xffffff;
      //create ball
      const ball = this.add.circle(400, 250, 10, colorWhite);
      this.physics.add.existing(ball);
      ball.body.setCollideWorldBounds(true, 1, 1);
      ball.body.setVelocity(-200, 0);
      ball.body.setBounce(1, 1);

      // create left paddle
      this.paddleLeft = this.add.rectangle(50, 250, 30, 100, colorWhite);
      this.physics.add.existing(this.paddleLeft, true);

      //create colliders
      this.physics.add.collider(ball, this.paddleLeft);

      //get keyboard input
      this.cursors = this.input.keyboard.createCursorKeys();
   }
   update() {
      //move paddle
      //* @type {Phaser.Physics.Arcade.StaticBody}
      const body = this.paddleLeft.body;
      if (this.cursors.up.isDown) {
         //  console.log('Up key pressed');
         this.paddleLeft.y -= 5;
         body.updateFromGameObject();
      } else if (this.cursors.down.isDown) {
         //  console.log('Down key pressed');
         this.paddleLeft.y += 5;
         body.updateFromGameObject();
      }
   }
}
