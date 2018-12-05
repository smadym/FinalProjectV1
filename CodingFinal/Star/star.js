var x;
var y;
var outerCircle = 150;
var innerCircle = 115;

function setup() {
  createCanvas(600, 600);
  background(204);
  x = width/2;
  y = height/2;
}

function draw() {
  background(204);

  
  var points = int(map(0, mouseY, height, 6, 0));
  var angle = 0;
  var angleStep = 180/points;
    
  beginShape(TRIANGLE_STRIP); 
  for (var i = 0; i <= points; i++) {
    var posx = x + cos(radians(angle)) * outerCircle;
    var posy = y + sin(radians(angle)) * outerCircle;
    angle += angleStep;
    vertex(posx, posy);
    posx = x + cos(radians(angle)) * innerCircle;
    posy = y + sin(radians(angle)) * innerCircle;
    vertex(posx, posy); 
    angle += angleStep;
  }
  endShape();
}
