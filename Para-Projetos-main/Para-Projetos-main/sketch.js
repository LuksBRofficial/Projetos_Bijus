var stars;
var star;
var star_img;




function preload()
{
  star_img = loadImage("StarSupercria.png");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  star =  createSprite(width/2,height/2);
  star.addImage(star_img);


}

function draw() 
{
  background("#e5e4ff");
 






  drawSprites();
}

/*function SpawnStars(n) {
  for (var i = 0;  i <= n ; i++ ) {


  }
}*/