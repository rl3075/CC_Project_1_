var triSize = 0;
var bS = 0;
var circle = {
  x: 300,
  y: 300,
}

var rad = 10;
var theta = 0;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function draw() {
  background(255);
  tripout();
  trippy();
  illuminati(triSize);
  triSize = triSize + 2;
  if (triSize == 100) {
    triSize = 0;
  }
	//circleG(50);

}

function trippy() { //function for my word to appear and do it's thing
  //frameRate(5);
  noStroke();
  word = 0;
  while (word < width) {
    textSize(35);
    textFont("Futura");
    //textFont("Futura"); 
    //textFont("Futura");
    fill(0, random(20, 255));
    text("trippy", word, 590);
    word = word + 100;
  }
}

function illuminati(offset) {
  //background(255); 
  stroke(255);
  strokeWeight(10);
  noFill(0);
  triangle(200 - offset, 350 + offset, 400 + offset, 350 + offset, width / 2, 200 - offset);
}

function blocky(df) {
  strokeWeight(100);
  stroke(1);
  //rectMODE(CORNER);
  rect(100 - df, 100 + df, 50, 50);
}

function circleG(diameter) {
  ellipse(circle.x, circle.y, diameter, diameter)
  circle.x = circle.x + 1
}

function tripout() {
 for (r = 50; r < 500; r = r + .1) {
     noStroke();
    var x = r * cos(theta);
    var y = r * sin(theta);
    ellipse(x + width / 2, y + height / 2, 16, 16);
    theta = theta + 1;
    fill(0);
  }
  r = 50;
}
