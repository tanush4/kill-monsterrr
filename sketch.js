const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box12
var box13,box14,box15,box16,box17,box18,box19
var backgroundImage
var background,monsterImage,superman,rope
function preload()
{

  backgroundImage = loadImage("bag.png");

}
function setup() {
  createCanvas(1200, 1000);


    engine = Engine.create();
    world = engine.world
    ground = new Ground(600,height,1200,20);
    box1=new Box(600,100,70,70)
    box2=new Box(600,170,70,70)
    box3=new Box(600,230,70,70)
    box4=new Box(600,300,70,70)
    box5=new Box(600,370,70,70)
    box6=new Box(600,460,70,70)
    box7=new Box(600,520,70,70)
    box8=new Box(600,590,70,70)
    box9=new Box(600,660,70,70)
    box10=new Box(600,710,70,70)
    box11=new Box(670,100,70,70)
    box12=new Box(670,170,70,70)
    box13=new Box(670,230,70,70)
    box14=new Box(670,300,70,70)
    box15=new Box(670,370,70,70)
    box16=new Box(670,460,70,70)
    box17=new Box(670,520,70,70)
    box18=new Box(670,590,70,70)
    box19=new Box(670,660,70,70)
   superman=new Superhero(400,400,100,100)
   rope=new Rope(superman.body,{x:170,y:100})
   }

function draw() {
  background(backgroundImage);
 
    Engine.update(engine);
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
superman.display()
rope.display()
ground.display();

}

function mouseDragged(){
  Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY})
  }

function keyPressed(){
  if(keyCode===32){
    rope.fly();

  }
}