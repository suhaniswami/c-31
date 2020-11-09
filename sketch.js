function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
   ground=new Ground(180,600,60,20);
 

  

}

function draw() {
  background("black");  
  drawSprites();
 ground.display();
}