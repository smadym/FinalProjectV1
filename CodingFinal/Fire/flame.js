// all credit goes to Daniel Shiffman/Coding Train
var particles = [];

function setup(){
    createCanvas(600,600);
}

function mousePressed(){
   particles.push(new Particle(mouseX, mouseY));
}

function draw(){
    background(200);
    for(var i = 0; i < particles.length; i++){
       particles[i].update();
       particles[i].show();
    }
}



function Particle(x, y){
   this.x = x;
   this.y = y;
   this.speedx = random(-10, 10);
   this.speedy = random(-10, 10);
   
   this.history = [];
   
   this.update = function(){
      this.x += this.speedx;
      this.y += this.speedy;
      if(this.x >= width - 25 || this.x <= 25){
         this.speedx = -this.speedx; 
      }
      if(this.y >= height - 25 || this.y <= 25){
         this.speedy = -this.spdy; 
      }
      
      for(var i = 0; i < this.history.length; i++){
         this.history[i].x += random(-2, 2);
         this.history[i].y += random(-2, 2);
      }
      
      var s = createVector(this.x, this.y);
      this.history.push(s);
      if(this.history.length > 100){
         this.history.splice(0, 1);
      }
   }
   
   this.show = function(){
       noStroke();
      fill(random(255), random(255), random(255), random(255));
      ellipse(this.x, this.y, i, i);
      
      // noFill();
      // beginShape();
      for(var i = 0; i < this.history.length; i++){
         var pos = this.history[i];
         ellipse(pos.x, pos.y,i,i);
          fill(random(150, 200));
          //noStroke();
      }
      // endShape();
   }
} 