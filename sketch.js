const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6
var ground
var hexagon, slingShot;
var backgroundImg

function preload() {
    backgroundImg = loadImage("back.webp");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground.visible = false
    
    box1 = new Box(500,300,50,50);
    box2 = new Box(600,250,50,50);
    box3 = new Box(570,300,50,50);
    box4 = new Box(530,250,50,50);
    box5 = new Box(640,300,50,50);
    box6 = new Box(585,180,50,50);
    hexagon = new Hexagon(60,60);
    slingShot = new SlingShot(hexagon.body,{x:200,y:150})
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    
    ground.display();
    
    box1.display();
   
    box3.display();
    
    

    box5.display();
    box2.display();
    box4.display();
    box6.display();
    hexagon.display();
    
    slingShot.display();    
}
 
function mouseDragged(){
    Matter.Body.setPosition(hexagon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingShot.fly();
}