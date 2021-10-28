const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var wall1;
var wall2;
var jointPoint;
var bridge;
var stones=[];


function setup() {
  createCanvas(600, 500);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  rectMode(CENTER)


  ground = new Base(600/2,490,600,20);
  wall1 = new Base(0,250,120,100);
  wall2 = new Base(600,250,120,100);
  bridge = new Bridge(15,{x:550,y:250});
  jointPoint = new Base(50,250,40,20);
  
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge,jointPoint)
  
  for(var i = 0; i<=8; i++){
    var x = random(width / 2 - 200, width / 2 + 300)
    var y = random(-10,140);
    var stone = new Stone(x,y,20)
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);



  ground.display()
  wall1.display()
  wall2.display()
  jointPoint.display();
  bridge.show();
  for(var stone of stones){
    stone.show()
  }

}
