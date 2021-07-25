var iss , spacecraft ;
var bg ;
var issImg , spacecraftImg ; 
var hasDocked = false ;

function preload(){
bg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
spacecraft1 = loadImage("spacecraft1.png");
spacecraft2 = loadImage("spacecraft2.png");
spacecraft3 = loadImage("spacecraft3.png");
spacecraft4 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(280, 240);
 spacecraft.addImage(spacecraft1);
 spacecraft.scale = 0.10 ;

 iss = createSprite(350,130);
 iss.addImage(issImg);
 iss.scale = 0.5 ; 
}

function draw() {
  background(bg);  

  spacecraft.addImage(spacecraft1);
if(!hasDocked){
  spacecraft.x = spacecraft.x + random(-1 , 1);
  
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraft2);
    spacecraft.y = spacecraft.y-2 ;
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft3);
    spacecraft.x = spacecraft.x-1 ;
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft4);
    spacecraft.x = spacecraft.x+1 ;
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft2);
    spacecraft.y = spacecraft.y+2 ;
  }
}

if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
  hasDocked = true ;
  textSize(25);
  fill("white");
  text("DOCKING SUCCESSFUL",200,300);
}

  drawSprites();
}