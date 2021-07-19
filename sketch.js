var ball;
var ground,left,right,edges;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options={
		isStatic:false,
		restitution:0.95,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball=Bodies.circle(200, 380, 20, ball_options);
	World.add(world,ball);

	
	ground=new Ground(width/2,670,width,20);
	left=new Ground(700,600,20,120);
	right=new Ground(800,600,20,120);
	Engine.run(engine);
	
	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.display();
  left.display();
  right.display();
 // edges=createEdgeSprites();
	
 // ball.bounceOff(edges);
 //edges=createEdgeSprites();
 //ball.bounceOff(edges);
  drawSprites();

 
}
function keyPressed(){
	if(keyCode ===UP_ARROW)
	{
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:50,y:-45});
	}
}



