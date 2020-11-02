
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper (100,100,20,20);

	ground1 = new Ground (450,590,900,20)
	dustbin = new Dustbin();


	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);


  paper1.display();
  ground1.display();
  dustbin.display();
  
move();

  drawSprites();
 
}

function move(){
	if (keyCode === UP_ARROW){
Matter.body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85})
}
}