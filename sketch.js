const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops=50;
var drops=[];
var lightning;

function preload(){
    lightningIMG=loadImage("lightning.png")
}

function setup(){
   var canvas = createCanvas(400,600)
   engine = Engine.create();
   world = engine.world;

    lightning=createSprite(200,20);
    lightning.addImage(lightningIMG);
    lightning.visible=false;
   // drop1=new drop(200,200);
   person=new Umbrella(200,550,30,100)
    
   for(var i=0;i<150;i++){
       drops.push(new drop(random(0,400),random(0,400)));
       
   }
   
}

function draw(){
    background("black");
    Engine.update(engine);
    
    if(frameCount%300===0){
        lightning.visible=true;
    } else if(frameCount%320===0){
        lightning.visible=false;
    }


    for (var i = 0; i < drops.length; i++) {
        drops[i].update();
        drops[i].display();
        
      }
      
    person.display();
    drawSprites();
}   

