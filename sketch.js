let laTovaglia;
let laBrace;
let mySound;

//Salsiccia piccante
let salsicciaPiccante;
let xpos1, ypos1; // posizione iniziale

let xspeed1 = 2.8; // velocità
let yspeed1 = 2.2;

let xdirection1 = -1; //direzione
let ydirection1 = -1;

//Salsiccia dolce
let salsicciaDolce;
let xpos2, ypos2; // posizione iniziale

let xspeed2 = 2.8; // velocità
let yspeed2 = 2.2;

let xdirection2 = -2; //direzione
let ydirection2 = -2;

//Provolone
let provolone;
let xpos3, ypos3; // posizione iniziale

let xspeed3 = 2.8; // velocità
let yspeed3 = 2.2;

let xdirection3 = -2; //direzione
let ydirection3 = -2;

//Olive
let olive;
let xpos4, ypos4; // posizione iniziale

let xspeed4 = 2.8; // velocità
let yspeed4 = 2.2;

let xdirection4 = -2; //direzione
let ydirection4 = -2;

//finocchio
let finocchio;
let xpos5, ypos5; // posizione iniziale

let xspeed5 = 2.8; // velocità
let yspeed5 = 2.2;

let xdirection5 = -2; //direzione
let ydirection5 = -2;

//sedano
let sedano;
let xpos6, ypos6; // posizione iniziale

let xspeed6 = 2.8; // velocità
let yspeed6 = 2.2;

let xdirection6 = -2; //direzione
let ydirection6 = -2;

//Cavatelli
let cavatelli;
let xpos7, ypos7; // posizione iniziale

let xspeed7 = 2.8; // velocità
let yspeed7 = 2.2;

let xdirection7 = -2; //direzione
let ydirection7 = -2;

//parmigiana
let parmigiana;
let xpos8, ypos8; // posizione iniziale

let xspeed8 = 2.8; // velocità
let yspeed8 = 2.2;

let xdirection8 = -2; //direzione
let ydirection8 = -2;

//counter per timing comparsa oggetti
let counter = 0;
let play = false;

//carico gli asset
function preload() {
  laTovaglia = loadImage("./assets/tovaglia.jpg");
  laBrace = loadImage("./assets/braceaccesa.jpg");
  salsicciaPiccante = loadImage("./assets/salcicciapiccante.png");
  salsicciaDolce = loadImage("./assets/salcicciadolce.png");
  provolone = loadImage("./assets/provolone.png");
  olive = loadImage("./assets/oliva.png");
  finocchio = loadImage("./assets/finocchio.png");
  sedano = loadImage("./assets/sedano.png");
  cavatelli = loadImage("./assets/cavatelli.png");
  parmigiana = loadImage("./assets/parmigiana.png");
  mySound = loadSound("./assets/braceaccesa.mp4");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  //posizone iniziale salsiccia piccante
  xpos1 = 200;
  ypos1 = 800;

  //posizone iniziale salsiccia dolce
  xpos2 = 700;
  ypos2 = 700;

  //posizone iniziale provolone
  xpos3 = 1300;
  ypos3 = 1300;

  //posizone iniziale olive
  xpos4 = 300;
  ypos4 = 1000;

  //posizone iniziale finocchio
  xpos5 = 700;
  ypos5 = 1300;

  //posizone iniziale sedano
  xpos6 = 1700;
  ypos6 = 1300;

  //posizone iniziale cavatelli
  xpos7 = 300;
  ypos7 = 700;

  //posizone iniziale parmigiana
  xpos8 = 800;
  ypos8 = 200;

  frameRate(30);
}

function draw() {
  //posiziono l'immagine di sfondo
  image(laTovaglia, 0, 0, windowWidth, windowHeight);

  //Movimento Salsiccia piccante
  xpos1 = xpos1 + xspeed1 * xdirection1;
  ypos1 = ypos1 + yspeed1 * ydirection1;

  if (xpos1 > width - 200 || xpos1 < 50) {
    xdirection1 *= -1;
  }

  if (ypos1 > height - 200 || ypos1 < 50) {
    ydirection1 *= -1;
  }

  if (counter > 120) {
    image(salsicciaPiccante, xpos1, ypos1, 500, 500);
  }

  //Movimento Salsiccia dolce
  xpos2 = xpos2 + xspeed2 * xdirection2;
  ypos2 = ypos2 + yspeed2 * ydirection2;

  if (xpos2 > width - 200 || xpos2 < 50) {
    xdirection2 *= -1;
  }

  if (ypos2 > height - 200 || ypos2 < 50) {
    ydirection2 *= -1;
  }

  if (counter > 150) {
    image(salsicciaDolce, xpos2, ypos2, 500, 500);
  }

  //Movimento provolone
  xpos3 = xpos3 + xspeed3 * xdirection3;
  ypos3 = ypos3 + yspeed3 * ydirection3;

  if (xpos3 > width - 200 || xpos3 < 50) {
    xdirection3 *= -1;
  }

  if (ypos3 > height - 200 || ypos3 < 50) {
    ydirection3 *= -1;
  }

  if (counter > 180) {
    image(provolone, xpos3, ypos3, 500, 500);
  }

  //Movimento olive
  xpos4 = xpos4 + xspeed4 * xdirection4;
  ypos4 = ypos4 + yspeed4 * ydirection4;

  if (xpos4 > width - 200 || xpos4 < 50) {
    xdirection4 *= -1;
  }

  if (ypos4 > height - 200 || ypos4 < 50) {
    ydirection4 *= -1;
  }

  if (counter > 220) {
    image(olive, xpos4, ypos4, 200, 200);
  }

  //Movimento finocchio
  xpos5 = xpos5 + xspeed5 * xdirection5;
  ypos5 = ypos5 + yspeed5 * ydirection5;

  if (xpos5 > width - 200 || xpos5 < 50) {
    xdirection5 *= -1;
  }

  if (ypos5 > height - 200 || ypos5 < 50) {
    ydirection5 *= -1;
  }

  if (counter > 270) {
    image(finocchio, xpos5, ypos5, 400, 400);
  }

  //Movimento sedano
  xpos6 = xpos6 + xspeed6 * xdirection6;
  ypos6 = ypos6 + yspeed6 * ydirection6;
  if (xpos6 > width - 200 || xpos6 < 50) {
    xdirection6 *= -1;
  }

  if (ypos6 > height - 200 || ypos6 < 50) {
    ydirection6 *= -1;
  }

  if (counter > 300) {
    image(sedano, xpos6, ypos6, 200, 200);
  }

  //Movimento cavatelli
  xpos7 = xpos7 + xspeed7 * xdirection7;
  ypos7 = ypos7 + yspeed7 * ydirection7;
  if (xpos7 > width - 200 || xpos7 < 50) {
    xdirection7 *= -1;
  }

  if (ypos7 > height - 200 || ypos7 < 50) {
    ydirection7 *= -1;
  }

  if (counter > 400) {
    image(cavatelli, xpos7, ypos7, 300, 300);
  }

  //Movimento parmigiana
  xpos8 = xpos8 + xspeed8 * xdirection8;
  ypos8 = ypos8 + yspeed8 * ydirection8;
  if (xpos8 > width - 200 || xpos8 < 50) {
    xdirection8 *= -1;
  }

  if (ypos8 > height - 200 || ypos8 < 50) {
    ydirection8 *= -1;
  }

  if (counter > 470) {
    image(parmigiana, xpos8, ypos8, 300, 300);
  }

  if (play == false) {
    //imposto la scritta
    textAlign(CENTER);
    fill(255);
    stroke("red");
    strokeWeight(3);
    textSize(36);
    text(
      "CLICCA PER VEDERE IL MENU DI FERRAGOSTO",
      windowWidth / 2,
      windowHeight / 2
    );
  }

  //applico un filtro trash alla foto e lo faccio partire sul drop
  else if (counter > 730) {
    image(laBrace, 0, 0, windowWidth, windowHeight);
    laBrace.filter("invert");
  }

  if (play == true) {
    counter += 1;
  }
}

//adattare l'animazione alla finestra
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//creo la funzione che associa al clic del mouse l'inizio e la fine della canzone
function mouseClicked() {
  if (mySound.isPlaying()) {
    mySound.pause();
    play = false;
  } else {
    mySound.play();
    play = true;
  }
}
