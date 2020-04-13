const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box,box2,box3,box4;


function setup(){
  
Canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Sticks(200,150,400,20);
    box = new Sticks(150,100,150,50);
    box2 = new Sticks(150,100,200,50);
    box3 = new Sticks(150,100,250,50);
    box4 = new Sticks(150,100,300,50);
    
   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box.display();
    box2.display();
    box3.display();
    box4.display();
   
}