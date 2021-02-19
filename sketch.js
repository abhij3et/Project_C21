var car
var wall
var speed,weight
var deformation=0.5*weight*speed*speed/22500


function setup() {
  createCanvas(1600,400);
  car= createSprite(50, 200, 50, 50);
  wall= createSprite(1400,200)
  wall.shapeColor=("grey")
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  
  car.collide(wall);
  car.velocityX=speed;
  car.shapeColor=("white")
  if(car.isTouching(wall) && deformation<100)
  {
    car.shapeColor=("green")
  }
  else if(car.isTouching(wall) && deformation>100)
  {
    car.shapeColor=("green")
  }
  else
  {
    car.shapeColor=("red")
  }
  background("black");  
  drawSprites();
}