var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
}

function draw() 
{
  if (keyDown("right")) {
    box.x += 5
  }
  if (keyDown("left")) {
    box.x += -5
  }
  background(30);
  drawSprites()

}




