var ground;
var groundimage;
var trex ,trex_running;
var invisibleground;
var cloudimage;
var cloud;

function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage=loadImage("ground2.png")
  cloudimage=loadImage("cloud.png")
}

function setup(){
  createCanvas(600,200)
  
  trex=createSprite(100,150,50,50)
  trex.addAnimation("running",trex_running)

  trex.scale=0.6

  invisibleground=createSprite(300,200,600,20);
  invisibleground.visible=false

  ground=createSprite(300,185,600,20)
  ground.addImage(groundimage)
}

function draw(){
  background("white")
  if(keyDown("space")&&trex.y>150){
   trex.velocityY=-6
   ground.velocityX=-8
   
  }
  if(ground.x<0){
   ground.x=ground.width/2
  }
  trex.velocityY+=0.5
  trex.collide(invisibleground)
  spawnclouds()

  drawSprites()
}

function spawnclouds(){
if (frameCount%80==0){
cloud=createSprite(600,random(0,120),10,10)
cloud.addImage(cloudimage)
cloud.velocityX=-6
cloud.depth=trex.depth
trex.depth+=1
}
}
