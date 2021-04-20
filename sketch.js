
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score,survival;
var BackgroundImage,ground,groundImage,invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  BackgroundImage=loadImage("backgroundImg.png")
  groundImage=loadImage("ground.png");
  
}



function setup() {
  createCanvas(windowWidth,windowHeight);
 
monkey = createSprite(70,height-80,10,10);
monkey.addAnimation("running",monkey_running)  
monkey.scale=0.1;  

  ground = createSprite(200,height-20,400,20);
  ground.addImage(groundImage);
  ground.velocityX=-6
  ground.scale=1;
  ground.x=ground.width / 2;
  
  score=0
  survival=0
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  invisibleGround = createSprite(width/2,height-50,width,10);
invisibleGround.visible = false    
  
  
}


function draw() {
background(BackgroundImage)
  textSize(30);
  stroke(355,10,160);
  textFont("HARRINGTON")
  text("SCORE:"+score,30,45);
  
  
  textSize(30);
  stroke(355,10,160);
  textFont("HARRINGTON");
  text("SURVIVAL TIME:"+survival,30,85);
  
  ground.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  
   if (ground.x < 0){
      ground.x = ground.width/2;
   }
  if (bananaGroup.isTouching(monkey)){
    score = score + 2 ;
    bananaGroup.destroyEach();
  }
 if (obstacleGroup.isTouching(monkey)){
  obstacleGroup.destroyEach();
   score = score - 3 ;
 }
    
   if((keyDown("SPACE")) &&monkey.y >= 100) {
    monkey.velocityY = -10; 
}
  
  if (frameCount%17 === 0 ){
    survival = survival +1
  }
  monkey.velocityY = monkey.velocityY + 1  
  console.log(ground.x);
  
  obstacle();
  banana();
 monkey.collide(invisibleGround);

  
drawSprites();   
  
}

function obstacle(){
if (frameCount % 270 === 0){
  var obstacle = createSprite(width+100,height-80,10,40);
  obstacle.addImage("obstacle",obstacleImage)
   obstacle.velocityX = - 6 
   obstacle.scale=0.3;
   obstacle.lifetime=windowWidth;
  obstacle.depth  = ground.depht ; 
  ground.depth = obstacle.depth + 1;
  obstacleGroup.add(obstacle);
  
}
 
}
function banana(){
 if (frameCount%80===0){
  var banana=createSprite(width-10,Math.round(random(100,height-100)),10,10);
   banana.addImage("banana",bananaImage);
   banana.scale=0.1;
   banana.velocityX=-6;
   banana.lifetime=windowWidth;
   
   
   
   bananaGroup.add(banana);
 }  
}




