
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	
	bobObject1 = new Bob (100,550,40)
	bobObject2 = new Bob (150,550,40)
	bobObject3 = new Bob (200,550,40)
	bobObject4 = new Bob (250,550,40)
	bobObject5 = new Bob (300,550,40)

	roof = new Roof (200,300,300,20)

	rope1 = new Rope (bobObject1.body, roofObject.body, -bobDiameter*2, 0)
	rope2 = new Rope (bobObject2.body, roofObject.body, -bobDiameter*3, 0)
	rope3 = new Rope (bobObject3.body, roofObject.body, -bobDiameter*4, 0)
	rope4 = new Rope (bobObject4.body, roofObject.body, -bobDiameter*5, 0)
	rope5 = new Rope (bobObject5.body, roofObject.body, -bobDiameter*6, 0)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display()
  roof.display();
  drawSprites();
 
}



