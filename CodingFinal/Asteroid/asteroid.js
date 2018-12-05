var totalPts = 300;
var steps = totalPts + 10;
var rand = 0;

function setup() {
  createCanvas(600, 600);
  strokeWeight(3);
  stroke(255,255,0);
  frameRate(1);
} 

function draw() {
  background(0);
  for  (var i = 1; i < steps; i++) {
    point( (width/steps) * i, (height/2) + random(-rand, rand) );
    rand += random(-15, 15);
  }
}