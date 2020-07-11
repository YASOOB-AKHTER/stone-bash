const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var ground;
var stone,slngshot;
var gamestate="onsling";



function setup() {
  var canvas=  createCanvas(2000,800);
  engine = Engine.create();
  world = engine.world;
  box1 =new Pig(950,500,);
  box2 =new Pig(700,600);  
  box3 =new Pig(750,500);
  box4 =new Pig(800,600);
  box5 =new Pig(900,600);
  box6 =new Pig(850,500);
  box7 =new Pig(1000,600);
  box8 =new Pig(1100,600);
  box9 =new Pig(1050,500);
  box10 =new Pig(900,400);
  box11=new Pig(1000,400);
  box12=new Pig(950,300);
  box13=new Pig(800,400);
  box14=new Pig(850,300);
  box15=new Pig(900,200);
  //box16=new Box(600,400,100,100);

  ground = new Ground(100,650,5000,20);
  stone = new Bird(200,300);

  chain = new Chain(stone.body,{x:200,y:150});

 

}

function draw() {
  background(255,255,255);  
  Engine.update(engine); 
  
ground.display();
stone.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box12.display();
box13.display();
box14.display();
box15.display();

box11.display();
strokeWeight(4);
chain.display();  

}function  mouseDragged(){
  if(gamestate !=="launched"){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }}
  function  mouseReleased(){
    gamestate="launched";
  chain.fly();
  
  }
  function keyPressed(){
    if(keyCode === 32 && stone.body.speed<1){
        gamestate="onsling";
        Matter.Body.setPosition(stone.body,{x:200,y:50})
        chain.attach(stone.body);
        
    }
}