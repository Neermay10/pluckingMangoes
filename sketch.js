
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var tree, treeImage, ground;
var stone;
var sling
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5;

function preload(){
	treeImage = loadImage("tree.png");
	boyImage = loadImage("boy.png");

}

function setup() {
	createCanvas(1400,600);


	engine = Engine.create();
	world = engine.world;

	tree = createSprite(1100,300);
	tree.addImage(treeImage);
	tree.scale = 0.48;

	boy = createSprite(200,500);
	boy.addImage(boyImage);
	boy.scale = 0.15;

	//Create the Bodies Here.
	mango1 = new Mango(1150,115);
	mango2 = new Mango(1190,150);
	mango3 = new Mango(1000,125);
	mango4 = new Mango(950,200);
	mango5 = new Mango(1070,180);


	ground = new Ground(width/2,height-10,width,10);
	stone = new Stone(120,415);

	sling = new Slingshot(stone.body,{x:120,y:415})
	


	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  drawSprites();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  sling.display();
  stone.display();
  ground.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    sling.fly();
}

function detectCollision(object1,object2){
	stoneBodyPosition = object1.body.position;
	mangoBodyPosition = object2.body.position;

	var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y)

	if(distance <= object1.r + object2.r){
		Matter.Body.setStatic(object2.body,false);
	}
}



