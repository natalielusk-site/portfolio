
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
  }

// Setup function
function setup() {
    createCanvas(window.innerWidth, window.innerHeight*3);
    }
    
  
  // Draw function
    function draw() {
      
      // Sets background color
      background(253, 253, 253);

    // Variable that contains the correct left x coordinate for each image
      let xCoord;

      // Loop that displays the images in three column format
      for(i = 0; i < images.length; i++){

        // sets the first three images at the same y coord
        columnLengths [0] = gapVar;
        columnLengths [1] = gapVar;
        columnLengths [2] = gapVar;

        // creates three different columns
        if (i%3 == 0){
            xCoord = gapVar
        }
        if (i%3 == 1){
            xCoord = sizeVar + gapVar*2
        }
        if (i%3 == 2){
            xCoord = gapVar*3 + sizeVar*2
        }

        // displays the images
        image(images[i], xCoord, columnLengths[i], sizeVar, 
            (sizeVar/images[i].width)*images[i].height);

            // adds new y values to the columnLengths array by adding the length of the 
            // previous image in the column to that previous image's y coordinate
        if (i > 2){
            columnLengths[i]= (columnLengths [(i%3) + (i/3)] + (sizeVar/images[i-3].width)*images[i-3].height + gapVar)

        }
        

      }
    }
  
  // Resizes the canvas and other placement variables when the window is resized
  function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight*3)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
  }