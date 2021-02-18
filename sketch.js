
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var ballSprite,ballIMG;

var world;

function preload()
{
	
	ballIMG=loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
ballSprite=createSprite(width/2, 80, 10,10);
	ballSprite.addImage(ballIMG)
	ballSprite.scale=0.2

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	ballBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine)
  ballSprite.x= ballBody.position.x 
  ballSprite.y= ballBody.position.y 
keyPressed();
drawSprites();
  groundObject.display();
  dustbinObj.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW) { Matter.Body.setStatic(ballBody,false);}
}
