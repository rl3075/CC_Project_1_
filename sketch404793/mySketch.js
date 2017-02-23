//This is the code for my monster

void setup() {    //Setup for the background
  size(600, 600);
  background(10, 200);


  noStroke(); //draws his gas trial 
  fill(150, 200);
  ellipse(250, 300, 175, 175);
  fill(165, 175);
  ellipse(200, 360, 150, 150);
  fill(180, 150);
  ellipse(225, 410, 125, 125);
  fill(195, 125);
  ellipse(205, 450, 100, 100);
  fill(210, 100);
  ellipse(220, 490, 75, 75);
  fill(225, 75);
  ellipse(210, 530, 50, 50);
  fill(240, 50);
  ellipse(215, 550, 25, 25);

  stroke(5); //setup for face
  strokeWeight(5);
  ellipseMode(CENTER);
  fill(131, 74, 255, 225); //draws his face
  ellipse(300, 200, 200, 200); //circle on 300, 200

  triangle(275, 102, 225, 130, 250, 50); //draws the ears
  triangle(325, 102, 375, 130, 350, 50); 

  fill(0, 264, 120, 175);
  ellipse(265, 155, 45, 35); //draws ellipses for Eyes
  ellipse(335, 155, 45, 35); 

  fill(223, 11, 166);
  quad(290, 172, 310, 172, 320, 210, 280, 210); //draws nose

  stroke(255); //black lines for stictched mouth
  line(255, 225, 330, 260); //draws 'mouth"
  line(270, 260, 345, 225);

  stroke(0); //outline of the mouth
  fill(10, 30);
  quad(255, 225, 270, 260, 330, 260, 345, 225);

  noStroke(); //pupils I guess?
  fill(255);
  rectMode(CENTER);
  rect(265, 155, 8, 20);
  rect(335, 155, 8, 20);

  fill(131, 74, 255, 225); //stiching of his mouth
  quad(117, 78, 135, 154, 200, 185, 210, 155);
  quad(483, 78, 465, 154, 401, 185, 391, 155);
}

void draw() {  //This makes the monester dissapear, leaving a trail of his gas behind
  if (mousePressed) {
    frameRate(1);
    background(0);
    noStroke(); //draws his gas trial 
    fill(150, 200);
    ellipse(300, 191, 175, 175);
    //background(0);  
    fill(165, 175);
    ellipse(370, 170, 150, 150);
    //background(0);
    fill(180, 150);
    ellipse(420, 180, 125, 125);
    //background(0);
    fill(195, 125);
    ellipse(465, 149, 100, 100);
    //background(0);
    fill(210, 100);
    ellipse(500, 130, 75, 75);
    //background(0);
    fill(225, 75);
    ellipse(535, 130, 50, 50);
    //background(0);
    fill(240, 50);
    ellipse(550, 130, 25, 25);
    //background(0);
  }
}

void keyPressed() { //this helped me find the locations of the shapes I wanted to draw
 if (key == 'c') {
   println(mouseX, mouseY);
 }
}