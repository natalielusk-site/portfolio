
// GLOBAL VARIABLES

// array that contains portfolio images
let images = [];

// array that contains top y coordinate for each image
let columnLengths = [];

// variables that define the column widths and the gaps between them
// based on the size of the window
let sizeVar = window.innerWidth/4
let gapVar = sizeVar/4
let yCoord = [];
yCoord [0] = gapVar;
yCoord [1] = gapVar;
yCoord [2] = gapVar;

// Preloads all of the images to be displayed in the portfolio
function preload(){
    
    // Accumulation Installation
    images[0] = loadImage("/assets/accumulation.png")

    // Mon Chair
    images [1] = loadImage("/assets/monChair.png")

    // Satisfying
    images [2] = loadImage("/assets/soSatisfying.png")
    // map image dimensions: 1247 × 843

    // Studio Space
    images [3] = loadImage("/assets/studioSpace.png")

    // Gem
    images [4] = loadImage("/assets/gem.png")

    // Findings
    images [5] = loadImage("/assets/findings3.png")

    // Orchid Lace
    images [6] = loadImage("/assets/orchidLace2.png")

    // System Sampler
    images [7] = loadImage("/assets/systemSampler1.png")
  }

// Setup function
function setup() {
    createCanvas(window.innerWidth, window.innerHeight*3);
    }
    
  
  // Draw function
  function draw() {
      
    background(253, 253, 253);
    let xCoord;
    for(i = 0; i < images.length; i++){
      columnLengths [0] = gapVar;
      columnLengths [1] = gapVar;
      columnLengths [2] = gapVar;
      if (i%3 == 0){
          xCoord = gapVar
      }
      if (i%3 == 1){
          xCoord = sizeVar + gapVar*2
      }
      if (i%3 == 2){
          xCoord = gapVar*3 + sizeVar*2
      }
      image(images[i], xCoord, columnLengths[i], sizeVar, 
          (sizeVar/images[i].width)*images[i].height);
      if (i > 2){
          columnLengths[i] = (columnLengths [i-3] + (sizeVar/images[i-3].width)*images[i-3].height + gapVar)
         // console.log(columnLengths[i])
         //(i%3) + Math.floor(i/3)
      }
     //yCoord[i%3]+=(sizeVar/images[i].width)*images[i].height
      console.log(columnLengths[4])
      

    }
  }
  
  // Resizes the canvas and other placement variables when the window is resized
  function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight*3)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
  }