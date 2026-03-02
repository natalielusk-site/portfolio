let images = [];

let sizeVar = window.innerWidth/4
let gapVar = sizeVar/4
let yCoord = [];
yCoord [0] = gapVar;
yCoord [1] = gapVar;
yCoord [2] = gapVar;

function preload(){
    
    // Cornered Poster
    images[0] = loadImage("/assets/corneredPoster.png")

    // Bat Houses
    images [1] = loadImage("/assets/batHouses.png")

    // WLI Logo
    images [2] = loadImage("/assets/WLILetterhead.png")
    // map image dimensions: 1247 × 843

    // G4 UNC
    images [3] = loadImage("/assets/g4UNC.png")
  }

// Setup function
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    }
    
  
  // Draw function
    function draw() {
      background(253, 253, 253);
      let xCoord;
      for(i = 0; i < images.length; i++){
        if (i%3 == 0){
            xCoord = gapVar
        }
        if (i%3 == 1){
            xCoord = sizeVar + gapVar*2
        }
        if (i%3 == 2){
            xCoord = gapVar*3 + sizeVar*2
        }
        image(images[i], xCoord, yCoord[i%3], sizeVar, 
            (sizeVar/images[i].width)*images[i].height);
       //yCoord[i%3]+=(sizeVar/images[i].width)*images[i].height
        console.log(yCoord[0])
        

      }
    }
  
  // Resizes the canvas in case the window is resized
  function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
  }