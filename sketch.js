const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var dustbinObj, paperObject,groundObject, launcherObject	
var world;
var launchingForce=100;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	paperObject=new paper(200,450,70);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	
	launcherObject=new launcher(paperObject.body,{x:350,y:150})

	Engine.run(engine);

}


function draw() {
  //rectMode(CENTER);
  background(230);
 
  Engine.update(engine)
  
  paperObject.display(); 
  groundObject.display();
  dustbinObj.display();
  
  launcherObject.display();

}

function mouseDragged()
{
	Matter.Body.setPosition(paperObject.body, {x:mouseX, y:mouseY})
  
}

function mouseReleased()
{
	
	launcherObject.fly();
 
}

