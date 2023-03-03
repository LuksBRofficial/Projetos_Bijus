
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane; //chao
//3 coisas= quadrado, bola, retangulo
var ball, rectangle, square


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var plane_options = 
	{
		isStatic: true
	}

	var ball_options =
	{
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}

	var square_options =
	{
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}

	var rectangle_options = 
	{
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	
	plane = Bodies.rectangle(400,680,800,20, plane_options); //x,y,w,h
	World.add(world, plane);

	ball = Bodies.circle(width/2,height/2,25,25, ball_options);
	World.add(world,ball);

	square = Bodies.rectagle(width/2,height/2,25,25, square_options);
	World.add(world,square);

	rectangle = Bodies.rectangle(width/2,height/2,75,25, rectangle_options);
	World.add(world,rectangle);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  engine.update();

  rect(plane.position.x,plane.position.y, 800,20);
  
  rect(plane.position.x,plane.position.y, 75,25);
  rect(square.position.x,square.position.y, 30,30);
  ellipse(ball.position.x,ball.position.y, 25,25);



  drawSprites();
 
}



