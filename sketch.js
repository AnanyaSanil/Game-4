
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12;
var world,boy;
var launchingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  bg= loadImage("images/background.jpg");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	coin1=new coin(1100,100,30);
  coin2=new coin(1170,130,30);
	coin3=new coin(1010,140,30);
	coin4=new coin(1000,70,30);
	coin5=new coin(1100,70,30);
	coin6=new coin(1000,230,30);
	coin7=new coin(900,230,25);
	coin8=new coin(1140,150,25);
	coin9=new coin(1100,230,25);
	coin10=new coin(1200,200,25);
	coin11=new coin(1120,50,25);
	coin12=new coin(900,160,25);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  // var render = Render.create({
  //   element: document.body,
  //   engine: engine,
  //   options: {
  //     width: 1300,
  //     height: 600,
  //     wireframes: false
  //   }
  // });
	
	Engine.run(engine);
 // Render.run(render);
}

function draw() {

  background(bg);
  //frameRate(2)
 // Engine.update(engine)
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  //Engine.update(engine)
  

  treeObj.display();
  stoneObj.display();
  coin1.display();
  coin2.display();
  coin3.display();
  coin4.display();
  coin6.display();
  coin7.display();
  coin8.display();
  coin9.display();
  coin10.display();
  coin11.display();
  coin12.display();
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectollision(stoneObj,coin1);
  detectollision(stoneObj,coin2);
  detectollision(stoneObj,coin3);
  detectollision(stoneObj,coin4);
  detectollision(stoneObj,coin5);
  detectollision(stoneObj,coin6);
  detectollision(stoneObj,coin7);
  detectollision(stoneObj,coin8);
  detectollision(stoneObj,coin9);
  detectollision(stoneObj,coin10);
  detectollision(stoneObj,coin11);
  detectollision(stoneObj,coin12);
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,coin1.x,coin1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectollision(lstone,lcoin){
	/*var collision = Matter.SAT.collides(lstone,lcoin);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lcoin,false);	
	}*/
  coinBodyPosition=lcoin.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, coinBodyPosition.x, coinBodyPosition.y)
  //console.log(distance)
 // console.log(lcoin.r+lstone.r)
  	if(distance<=lcoin.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lcoin.body,false);
    }

  }