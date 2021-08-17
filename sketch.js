function setup() {
  createCanvas(1537,700);

}

function draw() 
{
  background(30);

if (keyIsDown(RIGHT_ARROW)){
  background('red');
}

if (keyIsDown(LEFT_ARROW)){
  background('purple');
}

if (keyIsDown(DOWN_ARROW)){
  background('blue');
}

if (keyIsDown(UP_ARROW)){
  background('green');
}

  drawSprites();

}
