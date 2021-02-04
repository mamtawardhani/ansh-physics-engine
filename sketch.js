//namespacing
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var en, wo, box, gr

function setup(){
  createCanvas(400,400)
//variable= Matter.Engine.create()
//creating engine
  en = Engine.create()
  console.log(en)

  wo=en.world
  console.log(wo)

 

 var op = { isStatic: true}
 gr= Bodies.rectangle(200,300,400,20,op)
 World.add(wo, gr)
}

function draw(){
  background(0)
Engine.update(en)
console.log(box.position.y)
rectMode(CENTER)

rect(gr.position.x,gr.position.y,400,20)
  
}

//rect()
//ellipse()
//JSON => Java script Object Notation   { }