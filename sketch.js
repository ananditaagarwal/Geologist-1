
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var stone, rubber, hammer, plane;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	plane = new Plane(400, 690, 800, 20);
	hammer = new Hammer(100, 20);
	rubber = new Rubber(650, 600, 5);
	stone = new Stone(450, 600, 10, 10);  
}


function draw() {
	background("aqua");
	Engine.update(engine);

	plane.display();
	hammer.display();
	rubber.display();
	stone.display();
}	
