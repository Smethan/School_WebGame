var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: -100 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('player', 'images/red.png');
}

function create() {

    this.player = this.physics.add.sprite(0,0,'player').setOrigin(0.5,0.5).setDisplaySize(50,50);
    this.player.setDrag(100);
    this.player.setAngularDrag(100);
    this.player.setMaxVelocity(200);
    this.player.body.setGravityY(300);
    this.player.setCollideWorldBounds(true);


    var self = this;

    // this.input.keyboard.on('keydown_A', function(event){
    //     this.player.setVelocityX(-160);
    //     console.log("A down");
    // },this);
    // this.input.keyboard.on('keydown_D', function(event){
    //     this.player.setAccelerationX(160);
    //     console.log("D down");
    // }, this);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // if(this.space.isDown) {
    //     this.player.setVelocityY(-200);
    //     console.log('I hate life');
    // }





}

function update(){
    if(this.space.isDown && this.player.y === 575) {
        this.player.setVelocityY(-200);
        console.log('I hate life');
    }
    console.log(this.player.y);
    // if (this.left.isUp){
    //     this.player.setVelocityY(-200);
    //     console.log('I hate life');
    // }
    // else if(this.right.isDown){
    //     this.player.setVelocityX(200);
    //     console.log('life is');
    // } else {
    //     this.player.setVelocityX(0)
    // }

}
