var ship, shipSail;
var sea;
var seaImg;


function preload(){

shipSail = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage ("sea.png");

}

function setup(){
  createCanvas(400,400);
  ship = createSprite (20,20,50,40);
  ship.addAnimation (shipSail);

  sea = createSprite (10,10,20,30);
  sea.addImage (seaImg);

}

function draw() {
  background("blue");

 if (sea.x < 0) {
   sea.x = sea.width/2
 }

 drawSprites()
}