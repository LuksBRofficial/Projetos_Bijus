const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
let ball;
var btn1,btn2;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(300,360,20,50);
  top_wall = new Ground(200,10,400,20);

  var ball_opt = {
    restitution: 1,
    density:0.1
  }

  ball = Bodies.circle(60,350,20,ball_opt);
  World.add(world,ball);
  
  Body.applyForce(ball,{x:0,y:0},{x:2.,y:2});


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,20,20);
  Engine.update(engine);
}

function force_horizontal() {
  Body.applyForce(ball,{x:0,y:0},{x:5,y:0});
}

function force_vertical() {
  Body.applyForce(ball,{x:0,y:0},{x:0,y:-5});
}
