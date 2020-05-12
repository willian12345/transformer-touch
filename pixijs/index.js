 //Aliases
 let Application = PIXI.Application,
  loader = PIXI.loader,
  resources = PIXI.loader.resources,
  Sprite = PIXI.Sprite;
  //Create a Pixi Application
  let app = new Application({
    width: 375,
    height: 600,                       
    antialias: true,
    transparent: false,
    resolution: 1
  });
  
  document.body.appendChild(app.view);

  loader
  .add("images/cat.png")
  .add("images/smile.png")
  .load(setup);
   

  //Define any variables that are used in more than one function
let cat, state;
function setup() {
  let cnt = new PIXI.Container()
  // cat = new Sprite(resources["images/cat.png"].texture);
  smile = new Sprite(resources["images/smile.png"].texture);
  smile.x = 0
  smile.y = 0
  // smile.anchor.x = .5
  // smile.anchor.y = .5
  // cnt.pivot.x = 0
  // cnt.pivot.y = 0
  cnt.x = 100
  cnt.y = 100
  cnt.addChild(smile)

  let padding = 10
  let rectangleLineWidth = 4
  let rotateHandlerRadius = 10
  let rotateHandlerLineWidth = 4

  let rectangle = new PIXI.Graphics();
  rectangle.lineStyle(rectangleLineWidth, 0xFF3300, 1);
  rectangle.drawRect(-padding, -padding, smile.width + padding*2, smile.height + padding*2);
  rectangle.x = smile.x;
  rectangle.y = smile.y;
  let rotateHandler = new PIXI.Graphics();
  rotateHandler.lineStyle(rotateHandlerLineWidth, 0x00FF00, 1);
  rotateHandler.beginFill('blue')
  rotateHandler.drawCircle(rectangle.width - rotateHandlerRadius - rectangleLineWidth, -rotateHandlerRadius - rectangleLineWidth, rotateHandlerRadius);
  rotateHandler.endFill()
  rotateHandler.x = smile.x;
  rotateHandler.y = smile.y;
  cnt.addChild(rectangle,rotateHandler);



  app.stage.addChild(cnt);
  app.ticker.add(delta => gameLoop(delta))
  function gameLoop(){
    // cnt.rotation += 0.01
  }
}