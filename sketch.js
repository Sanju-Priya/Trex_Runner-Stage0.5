var trex,trex_running;
var edges;
var ground,groundImage;
function preload(){
// images or animation needs to be loaded
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage=loadImage("ground2.png");

}

function setup() {
  createCanvas(600, 200);

  trex=createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;

  ground=createSprite(200,180,400,10);
  ground.addImage("ground",groundImage);
  ground.velocityX=-10
  edges=createEdgeSprites();
}

function draw() {
  background(180);

  if(keyDown("space")){
    trex.velocityY=-12;
  }
  trex.velocityY=trex.velocityY+0.8;

  if(ground.x<0){
    ground.x=width/2;
  }

  trex.collide(ground);

  drawSprites();
  
}