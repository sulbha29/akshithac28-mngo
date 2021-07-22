const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy,ground,rock,tree,m1,m2,m3,m4,m5,m6,m7,chain;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone= new Stone(320,225);
	chain = new Chain(stone.body,{x:320 , y:225});
	m1 = new Mango(900,150,8);
	m2 = new Mango(950,120,10);
	m3 = new Mango(1000,100,7);
	m4 = new Mango(950,60,9);
	m5 = new Mango(1050,60,6);
	m6 = new Mango(1100,120,10);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    chain.fly();
}


function draw() {
	if (keyIsPressed === true) {
		chain.attach();
	  }

    rectMode(CENTER);
    background("lightblue");
    push();
    rect(width/2,400,width,20);
	chain.display();
    drawSprites();
    console.log(stone);
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	stone.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	
	
	fill("black");
    text("Let's go Mango-Plucking!!", 285, 22);
	
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y: 420})
		chain.attach(stone.body);
	}
}






