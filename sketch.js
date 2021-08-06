var hr,mt,sc;
var hrAng,mtAng,scAng;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90)
  hr = hour();
  mt = minute();
  sc = second();
  scAng = map(sc,0,60,0,360);
  mtAng = map(mt,0,60,0,360);
  hrAng = map(hr%12,0,12,0,360);
  push()
  rotate(scAng);
  stroke("aqua");
  strokeWeight(4);
  line(00,0,200,0);
  pop()
  push()
  rotate(mtAng);
  translate()
  stroke("blue");
  strokeWeight(4);
  line(0,0,250,0);
  pop()
  push()
  rotate(hrAng);
  stroke("red");
  strokeWeight(4);
  line(0,0,300,0);
  pop()
  
}