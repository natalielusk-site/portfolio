// // OLD SITE: Global Variables
// let map;
// let mapScreenWidthRatio;
// let mapScreenHeightRatio;
// let mapCornerXCoord;
// let mapCornerYCoord;
// let url;
// let sizeVar = window.innerWidth/4;
// let gapVar = sizeVar/4;
// let natLuskLogo;
// let yellowLogo;

// // NEW SITE: GLOBAL VARIABLES

// // thumbnail image arrays
// let thumbnailImages = [];
// let portfolioCategoryPages = [];
// let thumbnailX = [];

// // sizing variables
// let verticalMargins = window.innerWidth*.065
// let spaceBetweenThumbnails = window.innerWidth*.03
// let thumbnailWidth = window.innerWidth*.12

// // Loads all graphic images for the page
// function preload(){

//   // OLD SITE:
//   map = loadImage("./assets/mapJustDots.png")
//   // map image dimensions: 1247 × 843
//   natLuskLogo = loadImage("./assets/natLuskLogo.png")
//   yellowLogo = loadImage("./assets/yellowLogo.png")
//   // Font
//   //font = loadFont('./assets/geist.ttf')

//   // NEW SITE:
//   // images:
//   thumbnailImages[0] = loadImage("./assets/printThumbnail.png")
//   thumbnailImages[1] = loadImage("./assets/digitalThumbnail.png")
//   thumbnailImages[2] = loadImage("./assets/socialThumbnail.png")
//   thumbnailImages[3] = loadImage("./assets/merchThumbail.png")
//   thumbnailImages[4] = loadImage("./assets/brandingThumbnail.png")
//   thumbnailImages[5] = loadImage("./assets/illustrationThumbnail.png")
//   // portfolio category pages
//   portfolioCategoryPages[0] = "./print.html"
//   portfolioCategoryPages[1] = "./digital.html"
//   portfolioCategoryPages[2] = "./social.html"
//   portfolioCategoryPages[3] = "./merch.html"
//   portfolioCategoryPages[4] = "./branding.html"
//   portfolioCategoryPages[0] = "./illustration.html"
//   // fonts:
//   font = loadFont('./assets/geist.ttf')
// }

// // Setup function
// function setup() {
//   // Draws canvas the size of the window
//   createCanvas(window.innerWidth, window.innerHeight);
//   // Text formatting
//   textSize(window.innerWidth/60);
//   textStyle(ITALIC);
//   // URL
//   url = getURL();
// }

// function draw() {
  
//   // IMAGE DRAWING

//   // LOGO PLACEMENT
//   let logoXCoord = gapVar*3 +sizeVar*2 +(sizeVar-gapVar)
//   let logoYCoord = gapVar*.5
//   let logoWidth = gapVar*.75
//   let logoHeight = (logoWidth/natLuskLogo.width)*natLuskLogo.height


// let overLogo = mouseX >=logoXCoord && mouseX<= logoXCoord + logoWidth
// && mouseY >= logoYCoord && mouseY <= logoYCoord + logoHeight
  

//   // [O] Creates a variable to determine the width of the map
//   // [O] based on the size of the window
//   mapScreenWidthRatio = window.innerWidth*.75
//   mapScreenHeightRatio = (window.innerWidth*.75)*.676
  
//   // [O] Creates coordinates for the top left corner of the
//   // [O]map so that it will be centered in the window
//   mapCornerXCoord = (window.innerWidth-mapScreenWidthRatio)/2-gapVar/2
//   mapCornerYCoord = (window.innerHeight-mapScreenHeightRatio)/2

//   // [N] Draws the thumbnail images
//   thumbnailX[0] = verticalMargins
//   for(i = 0; i < thumbnailImages.length; i++){

//     image(thumbnailImages[i], thumbnailX, thumbnailY, thumbnailWidth, 
//             thumbnailWidth)
//   }
 
//   // Fills the background with hex code #e8d11b
//   background(	253, 253, 253);
//   image(natLuskLogo, logoXCoord, logoYCoord, logoWidth, logoHeight);
//   // Draws the map onto the canvas
//   image(map, mapCornerXCoord, mapCornerYCoord, mapScreenWidthRatio, mapScreenHeightRatio);


//   // TEXT DRAWING 

//   // Makes the text blue
//   fill('blue')
//   textFont(font)
//   // Draws the "conceptual art" text
//   let conceptualArtX = mapCornerXCoord+(mapScreenWidthRatio/5.04);
//   let conceptualArtY = mapCornerYCoord+(mapScreenHeightRatio/1.3)
//   let conceptualArtText = text('Conceptual Art', conceptualArtX, 
//   conceptualArtY);
//   let conceptualArtBound = font.textBounds('Conceptual Art', conceptualArtX, 
//   conceptualArtY)
  
  
//   // Draws the "design and illustration" text
//   let designAndIllusX = mapCornerXCoord+(mapScreenWidthRatio/1.377);
//   let designAndIllusY = mapCornerYCoord+(mapScreenHeightRatio/2.62);
//   text('Design and Illustration', designAndIllusX, 
//     designAndIllusY);
//   let designAndIllusBound = font.textBounds('Design and Illustration', designAndIllusX, 
//       designAndIllusY)

//   // Draws the "resume" text
//   let resumeX = mapCornerXCoord+(mapScreenWidthRatio/1.22);
//   let resumeY = mapCornerYCoord+(mapScreenHeightRatio/1.08);
//   text('CV', resumeX, 
//   resumeY);
//   let resumeBound = font.textBounds('Resume', resumeX, resumeY)

//   // TEXT INERACTIVITY

//   // Conceptual Art button
//  if (mouseX >= conceptualArtX && mouseX<= conceptualArtX + conceptualArtBound.w &&
//   mouseY <= conceptualArtY && mouseY >= conceptualArtY -conceptualArtBound.h
//  ){
//   fill(232, 209, 27)
//   text('Conceptual Art', conceptualArtX, 
//   conceptualArtY);

//   if (mouseIsPressed){
//     location.assign("conceptualArt.html")
//   }
//  }

//  // Design and Illustration Button
//  if (mouseX >= designAndIllusX && mouseX<= designAndIllusX + designAndIllusBound.w &&
//   mouseY <= designAndIllusY && mouseY >= designAndIllusY -designAndIllusBound.h
//  ){
//   fill(232, 209, 27)
//   text('Design and Illustration', designAndIllusX, 
//   designAndIllusY);
  
//   if (mouseIsPressed){
//     location.assign("designAndIllustration.html")
//   }
//  }

 

//  // Resume Button
//  if (mouseX >= resumeX && mouseX<= resumeX + resumeBound.w &&
//   mouseY <= resumeY && mouseY >= resumeY -resumeBound.h
//  ){
//   fill(232, 209, 27)
//   text('CV', resumeX, 
//   resumeY);
  
//   if (mouseIsPressed){
//     location.assign("cv.html")
//   }
//  }

//  let overConceptualArt = mouseX >= conceptualArtX && mouseX<= conceptualArtX + conceptualArtBound.w &&
//  mouseY <= conceptualArtY && mouseY >= conceptualArtY -conceptualArtBound.h
//  let overResume = mouseX >= resumeX && mouseX<= resumeX + resumeBound.w &&
//  mouseY <= resumeY && mouseY >= resumeY -resumeBound.h
//  let overDesignAndIllus = mouseX >= designAndIllusX && mouseX<= designAndIllusX + designAndIllusBound.w &&
//  mouseY <= designAndIllusY && mouseY >= designAndIllusY -designAndIllusBound.h

//  if (overConceptualArt || overResume || overDesignAndIllus || overLogo) {
//   cursor("./assets/cursor.png")
//  }else{
//   cursor(ARROW)
//  }

//  if (overLogo){
//   image(yellowLogo, logoXCoord, logoYCoord, logoWidth, logoHeight)
//  }

// }

// // Resizes the canvas in case the window is resized
// function windowResized(){
//   resizeCanvas(window.innerWidth, window.innerHeight)
//   textSize(window.innerWidth/60)
//   sizeVar = window.innerWidth/4
//   gapVar = sizeVar/4
// }


//____________________________


// NEW SITE: GLOBAL VARIABLES

// thumbnail image arrays
let thumbnailImages = [];
let portfolioCategoryPages = [];
let thumbnailX = [];

// sizing variables
let verticalMargins = window.innerWidth*.065
let spaceBetweenThumbnails = window.innerWidth*.03
let thumbnailWidth = window.innerWidth*.12
let thumbnailY = window.innerHeight*.56


// PRELOAD FUNCTION
function preload(){

  // images:
  thumbnailImages[0] = loadImage("./assets/printThumbnail.png")
  thumbnailImages[1] = loadImage("./assets/digitalThumbnail.png")
  thumbnailImages[2] = loadImage("./assets/socialThumbnail.png")
  thumbnailImages[3] = loadImage("./assets/merchThumbnail.png")
  thumbnailImages[4] = loadImage("./assets/brandingThumbnail.png")
  thumbnailImages[5] = loadImage("./assets/illustrationThumbnail.png")
  // portfolio category pages
  portfolioCategoryPages[0] = "./print.html"
  portfolioCategoryPages[1] = "./digital.html"
  portfolioCategoryPages[2] = "./social.html"
  portfolioCategoryPages[3] = "./merch.html"
  portfolioCategoryPages[4] = "./branding.html"
  portfolioCategoryPages[0] = "./illustration.html"
  // fonts:
  font = loadFont('./assets/geist.ttf')
  //variables
  thumbnailX[0] = verticalMargins
}

// SETUP FUNCTION
function setup() {
  // Draws canvas the size of the window
  createCanvas(window.innerWidth, window.innerHeight);
  // Text formatting
  //textSize(window.innerWidth/60);
  textStyle(ITALIC);
  // URL
  url = getURL();
}

// DRAW FUNCTION
function draw() {

  background(	253, 253, 253);


 // draws the thumbnail images
  for(i = 0; i < thumbnailImages.length; i++){

    image(thumbnailImages[i], thumbnailX[i], thumbnailY, thumbnailWidth, 
            thumbnailWidth)
   thumbnailX[i+1] = thumbnailX[i]+ spaceBetweenThumbnails + thumbnailWidth
  }
}

// Resizes the canvas in case the window is resized
function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight)
  verticalMargins = window.innerWidth*.065
  paceBetweenThumbnails = window.innerWidth*.03
  thumbnailWidth = window.innerWidth*.12
  thumbnailY = window.innerHeight*.56
  thumbnailX[0] = verticalMargins
}