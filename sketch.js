var bow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redGroup, blueGroup, greenGroup, pinkGroup, arrowGroup;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crea el fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crea el arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  
  //crea nuevos grupos 
   redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  
}

function draw() {
 background(0);
  //fondo en movimiento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco en movimiento
  bow.y = World.mouseY
  
   //suelta la flecha cuando se presione la tecla de barra espaciadora
  if (keyDown("space")) {
    createArrow();
  }
  
  
  
  //crea enemigos de forma continua
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if (select_balloon == 4){
      pinkBalloon();
    }
  }  
  
  //estos if hacen que al colicionar el grupo de arrow(flechas) y el grupo de los globos, desaparescan y aumenten el numero de la puntuacion dependiendo el color del globo
    if (arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
     arrowGroup.destroyEach();
    score=score+5;
  }
  
   if (arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
     arrowGroup.destroyEach();
    score=score+1;
  }
  
   if (arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
     arrowGroup.destroyEach();
    score=score+1;
  }
  
   if (arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
     arrowGroup.destroyEach();
    score=score+3;
  }

  drawSprites();
  text("Puntuación: "+ score, 300,50);
}


//crea las flechas para el arco
 function createArrow() {
  var arrow = createSprite(0, 0, 200, 200);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
   
  //estos 2 codigos, con para darles una zona de golpe
  arrow.setCollider("circle",0,0,50);
  //si deja de ser un comentario, mostrara su zona de golpe
  //arrow.debug = true;
   
  //agregamos todos los codigos puestos en la variable de pink a su grupo 
  arrowGroup.add(arrow);
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  
  //estos 2 codigos, con para darles una zona de golpe
  red.setCollider("circle",0,-100,280);
  //si deja de ser un comentario, mostrara su zona de golpe
  //red.debug = true;
  
  //agregamos todos los codigos puestos en la variable de pink a su grupo 
  redGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  
  //estos 2 codigos, con para darles una zona de golpe
   blue.setCollider("circle",0,-100,280);
  //si deja de ser un comentario, mostrara su zona de golpe
  //blue.debug = true;
  
  //agregamos todos los codigos puestos en la variable de pink a su grupo 
  blueGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  
  //estos 2 codigos, con para darles una zona de golpe
  green.setCollider("circle",0,-100,280);
  //si deja de ser un comentario, mostrara su zona de golpe
  //green.debug = true;
  
  //agregamos todos los codigos puestos en la variable de pink a su grupo 
  greenGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1.3
  
  //estos 2 codigos, con para darles una zona de golpe 
  pink.setCollider("circle",0,-7,20);
  //si deja de ser un comentario, mostrara su zona de golpe
  //pink.debug = true;
  
  //agregamos todos los codigos puestos en la variable de pink a su grupo 
  pinkGroup.add(pink);
}
