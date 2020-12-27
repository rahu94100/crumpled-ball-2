
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,ball,b1
var world,ground1,ball1=0.5;


function preload()
{
	
}

function setup() {
	createCanvas(1800, 1800 );
	engine = Engine.create();
	world = engine.world;
	ball=new Paper(100,485,70);

	ground1=new Ground(900,500,1800,10);
   // World.add(world,ground1);

	
	
     
	//Create the Bodies Here.
	
	b1=new Base(1400,593,200,200);
	/*b2=new Base(502,469,10,50);
	b3=new Base (599,469,10,50)*/

	Engine.run(engine);
  
}


function draw() {
	background("white");
Engine.update(engine);
 ball.display();
  
  ground1.display();
 
 

 b1.display();

 
/* b2.display();
 b3.display();
 */
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-600})
}
}
