// Global Variables
let map;
let mapScreenWidthRatio;
let mapScreenHeightRatio;
let mapCornerXCoord;
let mapCornerYCoord;

// Loads all graphic images for the page
function preload(){
  map = loadImage("/assets/mapJustDots.png")
  // map image dimensions: 1247 × 843
}

// Draws a canvas the size of the browser window
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  
  // IMAGE DRAWING
  
  // Creates a variable to determine the width of the map
  // based on the size of the window
  mapScreenWidthRatio = window.innerWidth*.75
  mapScreenHeightRatio = (window.innerWidth*.75)*.676
  // Creates coordinates for the top left corner of the
  // map so that it will be centered in the window
  mapCornerXCoord = (window.innerWidth-mapScreenWidthRatio)/2
  mapCornerYCoord = (window.innerHeight-mapScreenHeightRatio)/2
  // Fills the background with hex code #e8d11b
  background(	232, 209, 27);
  // Draws the map onto the canvas
  image(map, mapCornerXCoord, mapCornerYCoord, mapScreenWidthRatio, mapScreenHeightRatio);


}

// Resizes the canvas in case the window is resized
function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight)
}