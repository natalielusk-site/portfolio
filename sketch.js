// Global Variables
let map;
let mapScreenWidthRatio;
let mapScreenHeightRatio;
let mapCornerXCoord;
let mapCornerYCoord;
let url;
let sizeVar = window.innerWidth/4;
let gapVar = sizeVar/4;
let natLuskLogo;

// Loads all graphic images for the page
function preload(){
  map = loadImage("/assets/mapJustDots.png")
  // map image dimensions: 1247 × 843
  natLuskLogo = loadImage("/assets/natLuskLogo.png")
}

// Setup function
function setup() {
  // Draws canvas the size of the window
  createCanvas(window.innerWidth, window.innerHeight);
  // Text formatting
  textSize(window.innerWidth/60);
  textStyle(ITALIC);
  // URL
  url = getURL();
}

function draw() {
  
  // IMAGE DRAWING

  // LOGO PLACEMENT
  let logoXCoord = gapVar*3 +sizeVar*2 +(sizeVar-gapVar)
  let logoYCoord = gapVar*.5
  let logoWidth = gapVar*.75
  let logoHeight = (logoWidth/natLuskLogo.width)*natLuskLogo.height



  

  // Creates a variable to determine the width of the map
  // based on the size of the window
  mapScreenWidthRatio = window.innerWidth*.75
  mapScreenHeightRatio = (window.innerWidth*.75)*.676
  
  // Creates coordinates for the top left corner of the
  // map so that it will be centered in the window
  mapCornerXCoord = (window.innerWidth-mapScreenWidthRatio)/2
  mapCornerYCoord = (window.innerHeight-mapScreenHeightRatio)/2
 
  // Fills the background with hex code #e8d11b
  background(	253, 253, 253);
  image(natLuskLogo, logoXCoord, logoYCoord, logoWidth, logoHeight);
  // Draws the map onto the canvas
  image(map, mapCornerXCoord, mapCornerYCoord, mapScreenWidthRatio, mapScreenHeightRatio);


  // TEXT DRAWING 

  // Makes the text blue
  fill('blue')
  
  // Draws the "conceptual art" text
  let conceptualArtX = mapCornerXCoord+(mapScreenWidthRatio/5.04);
  let conceptualArtY = mapCornerYCoord+(mapScreenHeightRatio/1.3)
  let conceptualArtText = text('Conceptual Art', conceptualArtX, 
  conceptualArtY);
  
  
  // Draws the "design and illustration" text
  let designAndIllusX = mapCornerXCoord+(mapScreenWidthRatio/1.33);
  let designAndIllusY = mapCornerYCoord+(mapScreenHeightRatio/2.62);
  text('Design and Illustration', designAndIllusX, 
    designAndIllusY);

  // Draws the "resume" text
  let resumeX = mapCornerXCoord+(mapScreenWidthRatio/1.22);
  let resumeY = mapCornerYCoord+(mapScreenHeightRatio/1.08);
  text('Resume', resumeX, 
  resumeY);

  // TEXT INERACTIVITY

  // Conceptual Art button
 if ((mouseX >= conceptualArtX && mouseX <= (conceptualArtX+conceptualArtX/2.5))
  && (mouseY <=conceptualArtY && mouseY >= conceptualArtY -(window.innerWidth/60))){
  fill(232, 209, 27)
  text('Conceptual Art', conceptualArtX, 
  conceptualArtY);
  if (mouseIsPressed){
    location.assign("conceptualArt.html")
  }
 }

 // Design and Illustration Button
 if ((mouseX >= designAndIllusX && mouseX <= (designAndIllusX+designAndIllusX/2.5))
  && (mouseY <=designAndIllusY && mouseY >= designAndIllusY -(window.innerWidth/60))){
  fill(232, 209, 27)
  text('Design and Illustration', designAndIllusX, 
  designAndIllusY);
  if (mouseIsPressed){
    location.assign("designAndIllustration.html")
  }
 }

 // Resume Button
 if ((mouseX >= resumeX && mouseX <= (resumeX+resumeX/2.5))
  && (mouseY <=resumeY && mouseY >= resumeY -(window.innerWidth/60))){
  fill(232, 209, 27)
  text('Resume', resumeX, 
  resumeY);
  if (mouseIsPressed){
    console.log('yas')
  }
 }

}

// Resizes the canvas in case the window is resized
function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight)
  textSize(window.innerWidth/60)
  sizeVar = window.innerWidth/4
  gapVar = sizeVar/4
}