var stars;
var star;
var star_img;
var mhitbox;



function preload()
{
  star_img = loadImage('StarSupercria.png');

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  SpawnStars(20);
  mhitbox = createSprite(0,0,20,20);
  mhitbox.visible = false;


}

function draw() 
{
  background("#e5e4ff");
  mhitbox.x = World.mouseX;
  mhitbox.y = World.mouseY;
  





  drawSprites();
}

function SpawnStars(n) {
  //
  for (var i = 0;  i < n ; i++ ) {
    x = Math.round(random(0,1000));
    y = Math.round(random(0,1000));
   
    star =  createSprite(x,y);
    star.addImage(star_img);
    star.scale = 0.2;
  }
}

function mousePressed() {
  if (star.collide(mhitbox))
  {
    star.visible = false;
    SpawnStars(1);
  }
}