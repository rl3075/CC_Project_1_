/*My adjective is trippy, so I made a game that has a trippy spiral that throws you off visually, 
and you have to follow the ball to when it hits the center. The pulsing triangle is also meant 
to throw you off, as well as the whole concept of the eye and Illuminati which was the first thing
I thought off when I came up with trippy. The design of the spiral when you win is also meant to 
represent the term trippy. The hardest part of this for me was structuring the code to execute things
WHEN i wanted to, and HOW I wanted to. 
*/
var showeye = 0; //this variables toggles between the game scenes
//playing, won, lost
var circle = { //Var. for ball with multiple var. inside, I learned this on YouTube
  x: 300,
  y: 300,
  diam: 15,
}
var velX = 15; //intial velocity for ball
var velY = 0; //these two variables control the speed in both x and y
var triSize = 0; //this controls the size of the triangle
var triGrow = 2; //this works with triSize to make triangle go from small to big
//var bS = 0; //this is for 
var rad = 10; //Controls the growth of the spiral 
var theta = 0; //controls the design of the spiral
var diff = 1; //used to toggle between sprials to give it a difficulty

function setup() {
  createCanvas(600, 600);
  background(255);
  frameRate(20); //made it slower so the spiral doesn't go too fast
  console.log('Use 1 through 5 to change difficulty. Click the MOUSE when ball is in the white center. If you lose, click ENTER');
}

function draw() {
  if (showeye == 0) { //active playing mode
    background(255);
    tripout(0); //called all my functions in the order I wanted
//this part was hard because I had to control the strucutre of my code to execute things in the order i wanted too
    square();
    trippy();
    illuminati(triSize, 255); /*this was hard too, I used if statements to reverse the incremement of the 
triangle so that it could "pulse", I also had var. inside the function (triSize) */
    triSize = triSize + triGrow;
    if (triSize > 30 || triSize < -5) {
      triGrow = triGrow * -1;
    }
    circleG(circle.diam); //calls for the ball to spawn, used dot syntax 
  }
  if (showeye == 1) { //when you win, I call for these functions
    tripout2(); //toggles the growing spiral
    thirdeye();
    illuminati(-15, 0); //no "pulse" for the triangle
    youWon(); //toggle the text saying you won
  }
  if (showeye == 2) { //functions if you lose
    background(0); //create  ablack background with only the triangle and eye
    thirdeye();
    illuminati(triSize, 255);
    watchingu(); //toggle the text saying you lost
    triSize = triSize + triGrow;
    if (triSize > 30 || triSize < -5) {
      triGrow = triGrow * -1;
    }
  }
}

function trippy() { //function for my word to appear and dissapear
  //the word trippy is trippy itself since it is flashing 
  noStroke();
  word = 0;
  while (word < width) { //parameters for my text saying trippy
    textSize(35); //I learned how to use text of the references page 
    textFont("Futura");
    //textFont("Futura"); 
    //textFont("Futura");
    fill(random(200, 255));
    text("trippy", word, 590); //created a random fill to give it a strobe light effect
    word = word + 100;
  }
}

function tripout(tripclr) { //tripclr is the color of the spiral 
  for (r = 50; r < 500; r = r + .1) { //I used a for loop to create a spiral
    noStroke(); //at first I just a normal loop but it would create the spiral slowly
    var x = r * cos(theta); //after experimenting I was able to exuecute a solid spinning spiral
    var y = r * sin(theta);
    fill(tripclr); //I used the Learning Procc. book to figure this out 
    ellipse(x + width / 2, y + height / 2, 16, 16);
    theta = theta + diff;
  }
  r = 50;
}
 
function tripout2() { //same as the previous funciton but it paints the spiral as it goes
  fill(random(255), random(50), random(255), 100); //not all at once
  noStroke(); //this gives the eyes a color effect as well
  var x = rad * cos(theta);
  var y = rad * sin(theta);
  ellipse(x + width / 2, y + height / 2, 30, 30);
  theta = theta + 2;
  rad = rad + .5;
}

function illuminati(offset, clr) { //I created a triangle with a offset variable to 
  stroke(clr); //make it grow and shrink
  strokeWeight(15);
  noFill(0);
  triangle(200 - offset, 350 + offset, 400 + offset, 350 + offset, width / 2, 200 - offset);
}

function circleG(diameter) { //I learned this bouncing ball code off YouTube, but I had to reliaze how to give it random
  noStroke(); //speeds when it bounced, at first I tried to just give it random spee
  fill(0); //couldn't do this since you can't use random until you get to draw I think
  ellipse(circle.x, circle.y, diameter, diameter) //thus I used an array to create different speeds,  
  circle.x = circle.x + velX; //and chose one array speed at random
  circle.y = circle.y + velY; //this added to the trippy element of the game
  if (circle.x > width || circle.x < 0) { //since you can't really tell how the ball will act
    velX = velX * -1; //making it hard to keep track off it alongside the spiral
    var bounceSpeedY = [-25, -20, -15, -10, 10, 15, 20, 25];
    var bounceSY = random(bounceSpeedY); // select random word
    velY = bounceSY;
  } //This part took me a while to figure out, but realizing that I needed to  use arrays helped randomize the speeds
  if (circle.y > height || circle.y < 0) {
    velY = velY * -1;
    var bounceSpeedX = [-25, -20, -15, -10, 10, 15, 20, 25];
    var bounceSX = random(bounceSpeedX);
    velX = bounceSX;
  }
}

function square() { //I used this to create an invisible square as a parameter for the 
  rectMode(CENTER); //center white space where the ball has to land on
  noFill();
  strokeWeight(10);
  stroke(0);
  rect(width / 2, height / 2, 90, 90);
}

function mousePressed() { //Using AND I was able to create a box that if the ball was inside of and the mouse was
  if (circle.x > 250 && circle.x < 350 && circle.y < 350 && circle.y > 250) { //clicked all at the same time
    showeye = 1; //then you would win the game, setting showeye to 1, which is the second scene of this game code
    fill(255); 
    strokeWeight(50);
    stroke(0);
    rectMode(CORNER); //This white sqaure cleared the original game scene with the spiral to let the 
    rect(0, 0, width, height); //second scene execute itself without overlapping
    frameRate(50);
  } else {
    showeye = 2; //If they clicked the mouse when the ball wasn't inside the parameters, the losing scence of the 
  } //game would be toggled with the showeye variable
}

function thirdeye() { //This is just the desing of the eye 
  strokeWeight(3);
  stroke(0);
  ellipse(width / 2, height / 2, 70, 37);
  fill(0);
  ellipse(width / 2, height / 2, 25, 25);
  fill(255);
  noStroke();
  ellipse(width / 2 + 5, height / 2 - 5, 10, 10);
}

function watchingu() { //I created a text to show that you lost
  strokeWeight(3);
  textSize(35);
  textFont("Futura");
  fill(255);
  text("EYE AM WATCHING YOU", 100, 450);
  textSize(20);
  text("LOSER", 265, 530);
  //console.log('as')
}

function youWon() {// And a text to show that you won
  strokeWeight(3);
  textSize(20);
  textFont("Futura");
  fill(255);
  text("EYE SEE THAT YOU WON", 180, 520);
}

function keyPressed() { //THese are the changes with the key pressed function
  if (keyCode == ENTER) { //This resets the whole game 
     showeye = 0;
  }
  if (keyCode == 49) { //easy; These toggle between spiral to change difficulty
     diff = .9; 
  }
  if (keyCode == 50) { //kind of easy
     diff = 1.3;
  }
  if (keyCode == 51) { //fair
     diff = 1.4; 
  }
  if (keyCode == 52) { //hard
     diff = 1; 
  }
   if (keyCode == 53) { //really hard
     diff = 1.5; 
  }
}
