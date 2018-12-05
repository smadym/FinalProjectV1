var liquid;

function setup() {
  createCanvas(600, 600);
  background(0);
  stroke(30, 144, 255, 15);
  fill(0, 0, 139, 150);
  liquid = 0;
}

function draw() {
  translate(width/2, height/2);
  beginShape();
  for (var i = 0; i < 500; i++) {
    var ang = map(i, mouseY, 200, 300, TWO_PI);
    var rad = 350 * noise(i * 5, liquid * 0.5);
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);
  }
  endShape(CLOSE);

 // liquid += 3;

}