var cat,catAni,mouse,mouseAni,garden;
function preload() {
    //load the images here
    catAni=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png");
    cat.addAnimation("CAT",catAni); 
    mouse=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png");
    garden=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(100,200,50,50);
    
    cat.scale=0.5;
    mouse=createSprite(300,200,50,50);
    mouse.addAnimation("MOUSE",mouseAni);
    mouse.scale=0.5;
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
    
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyPressed("leftArrow")){
    cat.velocityX=-5;
    cat.addAnimation("CATANI",cat)
}

}
