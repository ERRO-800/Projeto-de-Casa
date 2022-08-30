
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	
	engine = Engine.create();
	world = engine.world;
	//Crie os Corpos Aqui.
	
	var plane_options={
	    isStatic:true
	}
	
	var block1_options = {restitution: 0.5, frictionAir:0,friction:0.02}
	block1 = Bodies.circle(220, 10, 10, block1_options);
	World.add(World,block1)
	
	var block2_options = {restitution: 0.7, frictionAir:0.1,friction:0.01}
	block2 = Bodies.rectangle( 110, 50, 10 ,10,block2_options);
	World.add(World,block2)
  
	var block3_options = {resistution:0.01,frictionAir:0.3,friction:1}
	rocky=Bodies.rectangle(350,50,10, 10,rocky_options)
	World.add(World,block3)

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(215);
	Engine.update(engine);
	drawSprites();
	ellipse(block1.position.x,block1.position.y,10)
	rect(block2.position.x,block3.position.y,10,10)
	rect(block3.position.x,block3.position.y,10,10)


}



