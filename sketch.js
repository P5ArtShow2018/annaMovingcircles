function setup() {
  createCanvas (800,800);
  background (255,0,30);
}

function draw() {
  frameRate (10);
  strokeWeight (10);
  stroke (random (200),random (180),random (200));
  line (0,0,400,800);
  stroke (random (200),random (180),random (200));
  line (800,0,400,800);
  noStroke ();
  ellipse (400,300,mouseX,mouseY);
  
}

function mousePressed () {
  background (100,100,100);
}