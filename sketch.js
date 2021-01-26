var ball;
var pallet1;
var pallet2;
var pallet3;
var pallet4;

var wall1;
var wall2;
var wall3;

function preload(){




}

function setup(){
    createCanvas(600,400)
    
ball =createSprite(300,200,25,25);
pallet1 =createSprite(75,380,140,20);
pallet1.shapeColor=("green");
pallet2 =createSprite(225,380,140,20);
pallet2.shapeColor=("pink");
pallet3 =createSprite(375,380,140,20);
pallet3.shapeColor=("blue");
pallet4 =createSprite(525,380,140,20);
pallet4.shapeColor=("brown");



wall1 =createSprite(10,200,20,400);
wall1.shapeColor=("pink");
wall2 =createSprite(590,200,20,400);
wall2.shapeColor=("pink");
wall3 =createSprite(300,10,600,20);
wall3.shapeColor=("pink");

ball.velocityX=3;
ball.velocityY=3;

createEdgeSprites();



}

function draw(){
    background(400,100,200);
   
  
  ball.bounceOff(wall3);
  ball.bounceOff(wall2);
  ball.bounceOff(wall1);
 if (pallet4.isTouching(ball)&& ball.bounceOff(pallet4)) {
     ball.shapeColor=("brown");
 }
 if(pallet3.isTouching(ball)&& ball.bounceOff(pallet3)) {
  ball.shapeColor=("blue");
  
 }
  if (pallet2.isTouching(ball)) {
    ball.shapeColor=("pink");
    ball.velocityX=0;
    ball.velocityY=0;
    
}
 if (pallet1.isTouching(ball)&& ball.bounceOff(pallet1)) {
    ball.shapeColor=("green");
   


}

drawSprites();
}


