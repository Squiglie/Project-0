// used diagonal for loop by benmoren for reference of lines


function setup(){
  createCanvas(600, 600); 
  noLoop()
}

function draw(){
  background(200,0,155);
  
  fill(255, 100, 0);
 
  strokeWeight(4);
  stroke(255,0,0);  
  let sz = 20
  for(let y = 0; y < height; y = y+sz){
     for(let x = 0; x < width ; x = x+sz){

       //move diagonally down the 'index' of the for loop, 
       // start at the width, but we have to minus a sz 
       // for each step of the loop to get back to the 
       // "middle" of the diagonal
       if(y+x < width+-sz*2){
         
         //this is just  to prove that it's not one long line!
         if(random(100)> 20){
            line(y,sz+ x, sz+y, x);
         }
         
       }
       
    
     }
    
  }


  push();
  beginShape();
  noStroke();
  vertex(600, 0);
  vertex(600,600);
  vertex(0,600);
  endShape();
  pop(); 

  
  console.log("mouseX:" +mouseX);
  console.log("mouseY:" +mouseY); 
}