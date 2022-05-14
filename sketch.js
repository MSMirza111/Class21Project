
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var right;
var left;
var ball; 
var ground2;





function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);
 



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(500,580,1000,10)
    right = new Ground(690,540,8,90);
	left = new Ground(870,540,8,90);
    
  

  var ball_options={
    restitution:0.55,
    isStatic:false,
     friction:0,  
     density:1.2
     
  
  };

  



  



  if(keyCode === UP_ARROW){
  vForce.apply();
  }



 ball = Bodies.circle(140,250,25,ball_options);
 World.add(world,ball);
 fill("white");



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show(); 
  left.show();
  right.show();
 Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);

 







  drawSprites();
 
}

 

function keyPressed(){
 if(keyCode === UP_ARROW){
   vForce.apply();
  

    function vForce(){
    Matter.Body.applyForce(ball,{x:90,y:210},{x:85,y:210});
    }
    
   


  
 }

}






