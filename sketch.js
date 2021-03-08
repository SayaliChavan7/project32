const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var backgroundImg;

var candy1,candy2,candy3,candy4,candy5,candy6,candy7,candy8,candy9,candy10;
var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7;
var stone;


function preload(){
  backgroundImg = loadImage("castledayimage.jpg");
  enemy1 = loadImage("enemy.png")
  princess1 = loadImage("princessscared1.png");


}

function setup() {
  createCanvas(1300,600);

    engine = Engine.create();
    world = engine.world;

    enemy1 = new Enemy(600,100,20);
    enemy2 = new Enemy(800,100,20);
    enemy3 = new Enemy(500,400,20);
    enemy4 = new Enemy(700,200,20);
    enemy5 = new Enemy(800,500,20);
    enemy6 = new Enemy(800,350,20);
    enemy7 = new Enemy(950,275,20);

    stone=new Stone(100,490,30);

    candy1 = new Candy(500,200,25);
    candy2 = new Candy(700,100,25)
    candy3 = new Candy(900,200,25)
    candy4 = new Candy(700,400,25)
    candy5 = new Candy(500,500,25)
    candy6 = new Candy(980,400,25)
    candy7 = new Candy(700,300,25)
    candy8 = new Candy(500,325,25)
    candy9 = new Candy(950,500,25)
    candy10 = new Candy(700,550,25)


	  slingshot = new SlingShot(stone.body,{x:275, y:340});

}


function draw() {
  
  background(backgroundImg); 
  Engine.update(engine); 
 
  image(princess1,5,300,300,300);
  princess1.scale=0.9

  detectCollision(stone,candy1);
  detectCollision(stone,candy2);
  detectCollision(stone,candy3);
  detectCollision(stone,candy4);
  detectCollision(stone,candy5);
  detectCollision(stone,candy6);
  detectCollision(stone,candy7);
  detectCollision(stone,candy8);
  detectCollision(stone,candy9);
  detectCollision(stone,candy10);


  fill("black");
  textSize(18);
  text("- Press spacebar for more chances!! -",50,50);

  candy1.display();
  candy2.display();
  candy3.display();
  candy4.display();
  candy5.display();
  candy6.display();
  candy7.display();
  candy8.display();
  candy9.display();
  candy10.display();



  enemy1.display();
  enemy2.display();
  enemy3.display();
  enemy4.display();
  enemy5.display();
  enemy6.display();
  enemy7.display();



  stone.display();

  slingshot.display();




  drawSprites();
}
 //creating dragged function
 function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}

//creating mouse released function
function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:550,y:350});
      slingshot.attach(stone.body);
  }

}

function detectCollision(lstones,lcandy){

	if(lstones.body.position.x- lcandy.body.position.x <candy.r + lstones.r
		&& lcandy.body.position.x - lstones.body.position.x  < lcandy.r + lstones.r
		&&lstones.body.position.y -lcandy.body.position.y < lcandy.r+ lstones.r
		&& lcandy.body.position.y - lstones.body.position.y < lcandy.r + lstones.r){
		Matter.Body.setStatic(lcandy.body,true);
	}
}




