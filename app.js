let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}
PIXI.utils.sayHello(type);
let app = new PIXI.Application({width: 256, height: 256, antialias: true, transparent: false, resolution: 1});
app.stage.interactive = true;
app.renderer.backgroundColor = 0x061639;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
PIXI.loader.add("images/Cat_test.png").load(setup);
function setup(){
    let rect =  new PIXI.Rectangle(0,0,50,50);
    let texture = PIXI.loader.resources["images/Cat_test.png"].texture;
    texture.frame = rect;
    let sprite = new PIXI.Sprite(texture);

    sprite.scale.set(2,2);
    app.stage.addChild(sprite);


}


// let bigRect = new PIXI.Graphics();
//
// bigRect.beginFill(0x00ff00);
//
// bigRect.drawRect(0,0,50,50);
// bigRect.interactive = true;
// bigRect.buttonMode = true;
// bigRect
//     .on('pointerdown', pdown)
//     .on('pointerup', pup)
//     .on('pointerupoutside', pup)
//     .on('pointermove', pdrag);
// function pdown(event){
//     this.data = event.data;
//     this.alpha = 0.5;
//     this.dragging = true;
// }
//
// function pup(event){
//     this.alpha = 1;
//     this.dragging = false;
//     this.data = null;
// }
//
// function pdrag(event){
//     if (this.dragging){
//         var newposition = this.data.getLocalPosition(this.parent);
//         this.x = newposition.x - 25;
//         this.y = newposition.y - 25;
//     }
// }
// bigRect.hitArea = bigRect.getBounds();
// app.stage.addChild(bigRect);
//
