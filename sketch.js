
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject;
var world;


function setup() {
	createCanvas(1366,691);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject = new Paper(200,350,40);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1100,640);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
 
  

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}
