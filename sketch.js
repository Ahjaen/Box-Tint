
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(500,300,300,10)

  b1 = new Box(420,275,40,40)
  b2 = new Box(460,275,40,40)
  b3 = new Box(500,275,40,40)
  b4 = new Box(540,275,40,40)
  b5 = new Box(580,275,40,40)

  b6 = new Box(460,235,40,40)
  b7 = new Box(500,235,40,40)
  b8 = new Box(540,235,40,40)

  b9 = new Box(500,195,40,40)

  ball = new Ball(100,300,20)

  string = new Sling(ball.body,{x:100,y:300})

}

function draw() {
  background(0,255,255);  
  Engine.update(engine)

  stand.display()
  fill("green")
  b1.display()
  b2.display()
  b3.display()
  b4.display()
  b5.display()

  fill("orange")
  b6.display()
  b7.display()
  b8.display()

  fill("red")
  b9.display()

  ball.display()

  string.display

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseRelease(){
  string.fly()
}