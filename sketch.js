const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground;

var  stand1, stand2, box1, box2,poly, sling;

var score =0;

var boxGroup = [];
var boxdispFlag = true;

var bgImage;
var boxCt =0;
function preload()
{
  getBgImage();
}

function setup() {
  createCanvas(800,400);
  
  var stand1y = height - 150;
  
  
 
  engine = Engine.create();
  world= engine.world; 
  
 
  ground = new Ground(width/2,height-10,width,20)

  stand1 = new Ground(width/2,stand1y,width/4,10);
  stand2 = new Ground(width-170,height/2-60,width/5,10)


  //CreateBoxSet(trayXPos,trayYPos,trayWidth,trayHeight,boxWidth)
  CreateBoxSet(stand1.body.position.x,stand1.body.position.y,width/4,10,30);
  CreateBoxSet(stand2.body.position.x,stand2.body.position.y,width/5,10,30);
 
 
  poly = new Polygon(80,height-120,30);
  sling = new Sling(poly.body,{x:80,y:height-120})

}

function draw() {
  if(bgImage)
  background(bgImage);  
  else
  background(200,255,255); 
  Engine.update(engine);

  textSize(20);
  text("Score " + score,width/5,50)

  ground.display();
  stand1.display();
  stand2.display();
  
    for(var i=0; i< boxGroup.length;i++)
    {
      box1 = boxGroup[i];      
      box1.display(i);     
    }
    poly.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  sling.fly();
}
function keyPressed()
{
 
  if(keyCode===32)
  {
    Matter.Body.setPosition(poly.body,{x:80,y:height-120})
    sling.attach(poly.body);
  }
}

async function getBgImage()
{
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var responseData = await response.json();

  var datetime = responseData.datetime;
  
  var hour = datetime.slice(11,13);
  var bgSelected;

  if(hour>6 && hour < 17)
  {
    bgSelected = "Images/DayMode.jpg"
  }
  else
  {
    bgSelected = "Images/NightMode.jpg"
  }
  
  bgImage = loadImage(bgSelected);

}