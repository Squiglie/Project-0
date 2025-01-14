let xLoc = 50;
let xSpeed = 1;


function setup() {
  createCanvas(600, 600);

 
}

function draw() {
  background(200,0,155);
  
  


  xLoc = xLoc + xSpeed;
  if(xLoc > width - 50 || xLoc < 50){
    xSpeed = xSpeed *-1;}
  stroke(255, 100, 10);
  strokeWeight(4);
  fill(200, 0, 155);
  ellipse(xLoc, xLoc, 100, 100);


  rotate(QUARTER_PI);
  fill(255, 100, 10);
  rectMode(CENTER);
  rect(300, 300, 300, 580);
 

  


  
  
}