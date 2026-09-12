// NEW SITE: GLOBAL VARIABLES

// thumbnail image arrays
let thumbnailImages = [];
let portfolioCategoryPages = [];
let thumbnailX = [];

// sizing variables
let verticalMargins = window.innerWidth*.065
let spaceBetweenThumbnails = window.innerWidth*.03
let thumbnailWidth = window.innerWidth*.12


// PRELOAD FUNCTION
function preload(){

  // images:
  thumbnailImages[0] = loadImage("./assets/printThumbnail.png")
  thumbnailImages[1] = loadImage("./assets/digitalThumbnail.png")
  thumbnailImages[2] = loadImage("./assets/socialThumbnail.png")
  thumbnailImages[3] = loadImage("./assets/merchThumbail.png")
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
  thumbnailX[0] = verticalMargins
  for(i = 0; i < thumbnailImages.length; i++){

    image(thumbnailImages[i], thumbnailX, thumbnailY, thumbnailWidth, 
            thumbnailWidth)
  }
}