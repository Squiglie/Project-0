function setup(){
  createCanvas(600, 600); 
}

function draw(){
  background(200,0,155);
  
  fill(255, 100, 0);
  // noStroke();

  for (let i = 0; i < 30; i++) {
    beginShape();
    triangle(0, 0, i*10, 600, 600, 600);
      beginContour();
        triangle(i*10, 580, 20, 40, 560, 580);
      endContour();
  endShape(CLOSE);;
    
  }
  

  print("mouseX:" +mouseX);
  print("mouseY:" +mouseY); 
}