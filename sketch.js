function setup() {
  createCanvas(windowWidth, windowHeight);
  background(105, 35, 25);
  rectMode(CENTER); 
  
  let numeroFinestre = 100; 
  let colonne = ceil(sqrt(numeroFinestre));
  let righe = ceil(numeroFinestre / colonne);
  
  let dimColonna = windowWidth / colonne;
  let dimRiga = windowHeight / righe;

  let xCorrente = 0;
  let yCorrente = 0;
  
  for (let g = 0; g < numeroFinestre; g++) {
    
    let w = dimColonna * 0.55; 
    let h = w * 1.5; 
    
    if (h > dimRiga * 0.8) {
      h = dimRiga * 0.8;
      w = h / 1.5;
    }
    
    finestra(xCorrente + dimColonna / 2, yCorrente + dimRiga / 2, w, h);
    
    xCorrente = xCorrente + dimColonna;
  
    if (xCorrente >= windowWidth) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}


function draw() {
}


function finestra(_x, _y, _w, _h) {
  push();
  translate(_x, _y);
  

  fill(255, random(140, 255), random(10, 160));
  noStroke(); 
  rect(0, 0, _w, _h); 

  disegnaTende(_w, _h);

  // INFISSI ESTERNI 
  noFill();
  stroke(0); 
  strokeWeight(5); 
  rect(0, 0, _w, _h);

  // INFISSI INTERNI 
  strokeWeight(5); 
  let stiliInfisso = ["vuoto", "verticale", "orizzontale", "croce"];
  let stileScelto = random(stiliInfisso);
  
  if (stileScelto == "verticale") {
    line(0, -_h/2, 0, _h/2);
  } 
  else if (stileScelto == "orizzontale") {
    line(-_w/2, 0, _w/2, 0);
  } 
  else if (stileScelto == "croce") {
    line(0, -_h/2, 0, _h/2);
    line(-_w/2, 0, _w/2, 0);
  }

  pop();
}

function disegnaTende(_w, _h) {
  push(); 
  fill(255, 255, 240); 
  noStroke();
  
  let yPuntaTenda = random(-_h * 0, _h * 0.5); 
  
  triangle(-_w/2, -_h/2,  0, -_h/2,  -_w/2, yPuntaTenda);
  triangle(_w/2, -_h/2,   0, -_h/2,   _w/2, yPuntaTenda);
  
  pop();
}
