let moonX = 0,
    cloudX = 0;

function setup() {
  createCanvas(700, 400);
  noStroke();
  
}
function draw() {
  drawScene();
  drawMoon();
  moonX = (moonX + 5) % width;
  drawStars();
  drawTent();
  drawCloud1();
  drawCloud2();
  cloudX = (cloudX + 2) % width;
}
function drawCloud1 () {
  noStroke();
  fill(170,178,189);
  ellipse(cloudX, 200, 45);
  ellipse(cloudX + 20, 170, 50);
  ellipse(cloudX + 30, 200, 40);
  ellipse(cloudX + 50, 190, 45);
}
function drawCloud2 () {
  noStroke();
  fill(170,178,189);
  ellipse(cloudX, 15, 45);
  ellipse(cloudX , 50, 50);
  ellipse(cloudX-20, 20, 40);
  ellipse(cloudX -30, 50, 45);
}
function drawScene() {
  background("navy");
  fill("green");
  rect(0, height-80, width, 100);
}
function drawMoon() {
  ellipseMode(CORNER);
  noStroke();
  fill(253,248,184);
  arc(moonX, 25, 80, 80, PI/3, TWO_PI, PIE);
  fill("navy");
  arc(moonX + 20, 25, 80, 80, PI/3, TWO_PI, PIE);
}
function drawStars() {
  for (var i = 0; i < 50; i++) {
    var x = random(windowWidth);
    var y = random(windowHeight-600);
    noStroke();
    fill(255, 255, 0);
    ellipse(x, y, 2, 2);
    frameRate(5);
  }
}
function drawTent(){
  stroke(1);
  fill(165,20,20);
  triangle(200, 375, 255, 260, 300, 375);
  quad(255, 260, 350, 240, 400, 350, 300, 375);
  fill("black");
  line(255,260, 245, 375);
}