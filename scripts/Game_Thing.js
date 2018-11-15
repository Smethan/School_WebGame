/**
 * Generated from the Phaser Sandbox
 *
 * //phaser.io/sandbox/JLRgnJSJ
 *
 * This source requires Phaser 2.6.2
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'sprites/phaser-dude.png');
    game.load.image('platform', 'sprites/platform.png');

}

var player;
var platforms;
var cursors;
var jumpButton;
var sjumping;
var lastJumped;
var testPlat;
function create() {

    player = game.add.sprite(100, 200, 'player');

    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;
    player.body.gravity.y = 1000;


    platforms = game.add.physicsGroup();


    platform2 = platforms.create(500, 150, 'platform');
    platforms.create(-200, 300, 'platform');
    platforms.create(400, 450, 'platform');
    makePlatform(0, 200, 50,40, platforms);
    makePlatform(470,400,250,90,platforms);

    platforms.setAll('body.immovable', true);


    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.UP);

}
function makePlatform(x, y, width, height, group){
    var platform = this.game.add.sprite(x,y, 'platform');
    platform.width = width;
    platform.height = height;
    this.game.physics.arcade.enable(platform);
    platform.body.immovable = true;
    platform.body.enable = true;
    group.add(platform);


}

function update () {


    game.physics.arcade.collide(player, platforms);
    platform2.body.velocity.x = -100;

    player.body.velocity.x = 0;
    jumpButton.onDown.add(function(){
        if ( (player.body.onFloor() || player.body.touching.down))
        {
            player.body.velocity.y = -400;
            sjumping = true;

        } else if (sjumping === true) {
            player.body.velocity.y = -400;
            sjumping = false;
        }

    });

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -250;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 250;
    }

    //else if (cursors.up.onDown && sjumping === true) {
        //player.body.velocity.y = -100;
        //sjumping = false;
    //}
    else if (player.body.onFloor()) {
        sjumping = false;
    }
}

function render () {
    game.debug.pointer(game.input.activePointer);

}
