
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint= Matter.Constraint;

var roof,rope,bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   roof = new Roof(600,50,1200,20);
   bob1 = new BOB(100,400,100)
   bob2 = new BOB(200,400,100)
   bob3 = new BOB(300,400,100)
   bob4 = new BOB(400,400,100)
   bob5 = new BOB(500,400,100)
   rope1 = new Rope(bob1.body,roof.body,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
roof.display()
bob1.display()
bob2.display()
bob3.display()
bob4.display()
bob5.display()
rope1.display()
}



