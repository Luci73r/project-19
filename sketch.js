var PLAY = 1
var END = 0
var gameState = 1
var sword, swordImage
var fruit1, fruit2, fruit3, fruit4
var fruit
var monsterI
var score= 0;

function preload(){
 swordImage = loadImage ("sword.png")
 fruit1 = loadImage("fruit1.png")
 fruit2 = loadImage("fruit2.png")
   fruit3 = loadImage("fruit3.png")
   fruit4 = loadImage("fruit4.png")
  monsterI = loadAnimation("alien1.png","alien2.png")
  
}
function setup(){
  createCanvas(400,400)
  sword = createSprite(200,200,10,10)
  sword.addImage(swordImage)
  
    
  fruitGroup = new Group();
  
  
}

function draw(){
 background("black")
  textSize(20)
  fill("white")
  text("score "+score,200,50)
  sword.x=mouseX
  sword.y=mouseY
  sword.scale=0.7
  swapfruit()
  spawnMonsters()

  
   if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
    }
    drawSprites()
}

function swapfruit(){
  if(frameCount%100===0){
  fruit = createSprite(0,200,10,10)
  fruit.velocityX=4
    fruit.y=Math.round(random(10,380))
  var x = Math.round(random(1,4))
    
  switch(x){
    case 1:
      fruit.addImage(fruit1)
      break;
    case 2:
      fruit.addImage(fruit2)
      break;
    case 3:
      fruit.addImage(fruit3)
     break;
    case 4:
      fruit.addImage(fruit4)
      break;
  }
fruit.scale =0.2
    fruitGroup.add(fruit)
    }
}
  function spawnMonsters(){
    if(frameCount%100===0){
      var alien
      alien = createSprite(0,200,10,10)
      alien.addAnimation("enemy",monsterI)
      alien.velocityX=4
      
    }
  


}