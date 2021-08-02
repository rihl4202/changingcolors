
function setup() {
  createCanvas(450,450);

}

function draw() 
{
  background(black);
  
  if (keyDown(right)) {
    background(blue);
  }
  
  if (keyDown(left)) {
    background(red);
  }
  
  if (keyDown(up)) {
    background(green);
  }
  
  if (keyDown(down)) {
    background(yellow);
  }

  drawSprites()
  
}




