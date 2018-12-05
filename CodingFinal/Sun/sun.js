function setup() {
  createCanvas(600, 600);
  noStroke();
}
function draw() {
  var x = mouseX;
  var y = mouseY;
  var inversex = width - mouseX;  
  var inversey = height - mouseY; 
  background(0);
  fill(255, 255, 0, 70 );
  ellipse(x, height/2, y, y);
  fill(0,0,255, 159);
  ellipse(inversex, height/2, inversey, inversey);
}