
function setup() {
  createCanvas(450,450);

}

function draw() 
{
  background(black);
  
  if (keydown(right)) {
    background(blue);
  }
  
  if (keydown(left)) {
    background(red);
  }
  
  if (keydown(up)) {
    background(green);
  }
  
  if (keydown(down)) {
    background(yellow);
  }

  drawSprites()
  
}




