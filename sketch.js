var trex, trex_running, groundImage, ground;
var score=0;
function preload()
{
   trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
   groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  trex = createSprite(50,height-50,50,60);
  trex.addAnimation("trexrun",trex_running);
  trex.scale=.5;
  
  ground = createSprite(width/2,height-20,width,2);
  ground.addImage("ground",groundImage);
  ground.x = width/2
  ground.velocityX = -(6 + 3*score/100);
}

function draw() {
  background(220);
  fill("red");
  text("Window Width is " + windowWidth, width/2, 40);
  text("Window Height is " + windowHeight, width/2, 60);
  text("Display Width is " + displayWidth, width/2, 80);
  text("Window Height is " + displayHeight, width/2, 95);
   text("Touches Length is " + touches.length,width/2, 110);
 //sun
  fill("yellow");
  circle(width-(width-50),50,60);
  
  if((touches.length > 0 || keyDown("SPACE")) && trex.y  >= height-120) {
     
      trex.velocityY = -10;
       touches = [];
    }
    
    trex.velocityY = trex.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    trex.collide(ground);
  
  
  
  drawSprites();
}
 function windowResized() {
  resizeCanvas(windowWidth, windowHeight,false);
}