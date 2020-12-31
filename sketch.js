
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var wall1,wall2,wall3;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,20);
	wall1 = new Dustbin(600,630,150,20);
	wall2 = new Dustbin(518,600,20,80);
	wall3 = new Dustbin(680,600,20,80);
	ball = new Paper(60,630,40,40);


	Engine.run(engine);
	
  
}


function draw() {
 
  background(0);
  ground.display();
  wall1.display();
  wall2.display();
  wall3.display();
  ball.display();
  
  drawSprites();


  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:133,y:135});


	}
}



