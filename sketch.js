var fixedRect, movingRect;
var bobbythebobster

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
  bobbythebobster = createSprite (700,69,96,50)
  bobbythebobster.shapeColor = "#35BDCD" 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(bumpercars(movingRect,bobbythebobster)){

    
    movingRect.shapeColor ="#B989DE"

    
    bobbythebobster.shapeColor ="#B989DE"

    



  }

  else {

    
    movingRect.shapeColor ="green"

    
    bobbythebobster.shapeColor ="#35BDCD"

  }
  
  drawSprites();
}


