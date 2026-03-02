let images = [];
let columnLengths = [];
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
            columnLengths[i]= (columnLengths [(i%3) + (i/3)] + (sizeVar/images[i-3].width)*images[i-3].height + gapVar)
           // console.log(columnLengths[i])
        }
       //yCoord[i%3]+=(sizeVar/images[i].width)*images[i].height
        console.log(columnLengths[0])
        

      }
    }
  
  // Resizes the canvas in case the window is resized
  function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
  }