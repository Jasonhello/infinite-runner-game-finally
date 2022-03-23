var cat, catImg
var bg, backgroundImg
var obstacles, obstaclesGroup, obstacleImg
var gameState = "play"

function preload(){
  catImg = loadAnimation("cat1.png", "cat2.png", "cat3.png");
  backgroundImg = loadImage("background2.png");
  obstacleImg = loadImage("obstacle1.png");
  bsound = loadSound("backgroundSound.mp3");
  dsound = loadSound("deadSound.mp3")
}

function setup() {
  createCanvas(1200, 600);
  bsound.loop();
  
  obstaclesGroup = new Group();
  
  bg = createSprite(600,300);
  bg.addImage("background", backgroundImg);
  bg.velocityX = 15;

  cat = createSprite(1100,300);
  cat.addAnimation("cat",catImg);
  cat.scale = 0.2;
}

function draw() {
  background(0)
  if(gameState === "play"){
    
    
  if(bg.x > 900){
      bg.x = 600;
    }
  cat.y = World.mouseY;
  

  if(obstaclesGroup.isTouching(cat)){
    cat.destroy();
    dsound.play();
    bsound.stop();
    gameState = "end";
  }

  spawnObstacles();
  
  }
  if(gameState === "end"){
    fill("red");
    textSize(45);
    textFont("Cursive"); 
    text("The cat died", 180, 300);
  }
  drawSprites()
}
function spawnObstacles(){
  if(frameCount%80 === 0){
    obstacles = createSprite(-10, Math.round(random(50,550)));
    obstacles.addImage(obstacleImg);
    obstacles.velocityX = 15;
    obstacles.lifetime = 800;
    obstaclesGroup.add(obstacles);
    obstacles.scale = 0.1;
    // cat.depth = bg.depth;
    // cat.depth += 1;
  }

}