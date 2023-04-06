
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1, block2;
var rotator1, rotator2, rotator3;
var particle1, particle2, particle3, particle4, particle5;

var engine, world;
var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Crie os Corpos aqui.
    var prop = {isStatic: true}
    var prop_bola = {restitution: 0.98}

    plane = Bodies.rectangle(300,600,600,20)
    World.add(world, plane)
	
	block1 = Bodies.rectangle(300,400,150,20,prop)
    World.add(world, block1)
	
	block2 = Bodies.rectangle(450,400,150,20,prop)
    World.add(world, block2)
	
    rotator1 = Bodies.rectangle(250,200,150,20,prop)
    World.add(world, rotator1)
	
	rotator2 = Bodies.rectangle(250,200,150,20,prop)
    World.add(world, rotator2)

	rotator3 = Bodies.rectangle(300,200,150,20,prop)
	World.add(world, rotator3)

    particle1 = Bodies.circle(300,0,10,prop_bola)
	World.add(world, particle1)
    particle2 = Bodies.circle(300,0,10,prop_bola)
	World.add(world, particle2)
	particle3 = Bodies.circle(300,0,10,prop_bola)
    World.add(world, particle3)
	particle4 = Bodies.circle(300,0,10,prop_bola)
    World.add(world, particle4)
    particle5 = Bodies.circle(300,0,10,prop_bola)
    World.add(world, particle5)

}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  fill("brown");

  rect(plane.position.x, plane.position.y, 600, 20)
  rect(block1.position.x, block1.position.y, 150, 20)
  rect(block2.position.x, block2.position.y, 150, 20)

  angle1 += 0.2
  angle2 += 0.3
  angle3 += 0.4

  Body.rotate(rotator1, angle1)
  Body.rotate(rotator2, angle2)
  Body.rotate(rotator3, angle3)

  Push()
  Translate(rotator1.position.x, rotator1.position.y)
  rotate(angle1)
  rect(0, 0, 150, 20)
  pop()

  Push()
  Translate(rotator2.position.x, rotator2.position.y)
  rotate(angle2)
  rect(0, 0, 150, 20)
  pop()

  Push()
  Translate(rotator3.position.x, rotator3.position.y)
  rotate(angle3)
  rect(0, 0, 150, 20)
  pop()

  ellipse(particle1.position.x, particle1.position.y, 10)
  ellipse(particle2.position.x, particle2.position.y, 10)
  ellipse(particle3.position.x, particle3.position.y, 10)
  ellipse(particle4.position.x, particle4.position.y, 10)
  ellipse(particle5.position.x, particle5.position.y, 10)


 
}



