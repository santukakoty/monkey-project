
var monkey , monkey_running
var banana, bananaImage, obstacle, obstacleImage;
var foodsGroup, obstaclesGroup;
var score=0;
var survivalTime=0; 

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(600,600);
  
  monkey=createSprite(100,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,2000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodsGroup = new Group();
}


function draw() {
background(220);
  monkey.collide(ground);
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: "+ score,430,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  spawnFoods();
  
  drawSprites();
}

function spawnFoods(){
  if(frameCount % 80 === 0){
  var food = createSprite(250,200);
  
  
  food.y = Math.round(random(110,200));
    
  food.addImage(bananaImage);
  food.velocityX=-0.2;
  food.scale=0.1;
  foodsGroup.add(food);
  food.lifetime=60;
   
    
}
    if(frameCount % 300 === 0){
      var obstacle = createSprite(270,327);
    obstacle.addImage(obstacleImage);
  obstacle.velocityX=-0.2;
  obstacle.scale=0.1;
      obstacle.lifetime=250;
  
    
}
  }


