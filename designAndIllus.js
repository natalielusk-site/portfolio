let images = [];
let columnLengths = [];
let locations = [];
let sizeVar = window.innerWidth/4
let gapVar = sizeVar/4
let yCoord = [];
yCoord [0] = gapVar;
yCoord [1] = gapVar;
yCoord [2] = gapVar;

function preload(){
    
    // Cornered Poster
    images[0] = loadImage("/assets/designAndIllustration/corneredPoster.png")
    locations [0] = "/designAndIllustrationPages/corneredPoster.html"
    // Bat Houses
    images [1] = loadImage("/assets/designAndIllustration/batHouses.png")

    // WLI Logo
    images [2] = loadImage("/assets/designAndIllustration/WLILetterhead.png")

    // G4 UNC
    images [3] = loadImage("/assets/designAndIllustration/g4UNC.png")

    // Orange Shortcake
    images [4] = loadImage("/assets/designAndIllustration/orangeShortcakeThumbnail.png")

    // Currently On Air
    images [5] = loadImage("/assets/designAndIllustration/currentlyOnAir.png")

    // Home Book
    images [6] = loadImage("/assets/designAndIllustration/homePages2.png")

    // Creature Feature
    images [7] = loadImage("/assets/designAndIllustration/creatureFeature1.png")

    // Lace Drawings
    images [8] = loadImage("/assets/designAndIllustration/laceDrawings2.png")

    // G4 Football Post
    images [9] = loadImage("/assets/designAndIllustration/g4Post.png")

    // Find Your Center Button
    images [10] = loadImage("/assets/designAndIllustration/findYourCenter.png")

    // Write For Blog Post
    images [11] = loadImage("/assets/designAndIllustration/writeForBlogPost.png")

    //
  }

// Setup function
function setup() {
    createCanvas(window.innerWidth, window.innerHeight*3);
    }
    
  
  // Draw function
    function draw() {
      
      background(253, 253, 253);
      let xCoord;
      let whichXLength = [];
      whichXLength [0] = (mouseX >= gapVar && mouseX <= gapVar+sizeVar);
      whichXLength [1] = (mouseX >= gapVar*2 + sizeVar && mouseX <= gapVar*2 +sizeVar*2);
      whichXLength [2] = (mouseX >= gapVar*3 + sizeVar*2 && mouseX <= gapVar*3 + sizeVar*3)
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
        

        if (mouseX >= xCoord && mouseX <= xCoord + sizeVar && 
          mouseY >= columnLengths[i] && mouseY <= columnLengths[i]+(sizeVar/images[i].width)*images[i].height) {
          console.log('yay');
          cursor(HAND);
        } 

        if ((mouseX >=0 && mouseX <= gapVar) // x within first gap

        || (mouseX >= gapVar+sizeVar && mouseX <= gapVar*2 + sizeVar) // x within second gap
        
        || (mouseX >= gapVar*2 + sizeVar*2 && mouseX <= gapVar*3 +sizeVar*2) // x within third gap
        
        || ((mouseX >= gapVar*3 + sizeVar*3 && mouseX <= gapVar*4 +sizeVar*3)) // x within fourth gap
        
        || (whichXLength[i%3] && mouseY >= columnLengths[i] - gapVar && mouseY <= columnLengths[i])
      ){
        
       
          cursor(ARROW);
        }

        

      }
    }
  
  // Resizes the canvas in case the window is resized
  function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight*3)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
  }