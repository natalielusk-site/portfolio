let images = [];
let columnLengths = [];
let locations = [];
let sizeVar = window.innerWidth/4
let gapVar = sizeVar/4
let natLuskLogo;
let yellowLogo;
let pageLength = sizeVar*6

function preload(){
    
    // Logo
    natLuskLogo = loadImage("./assets/natLuskLogo.png")
    yellowLogo = loadImage("./assets/yellowLogo.png")
    // Font
    font = loadFont('./assets/geist.ttf')

    // PORTFOLIO IMAGES

    // Cornered Poster
    images[0] = loadImage("./assets/designAndIllustration/corneredPoster.png")
    locations [0] = "./designAndIllustration/corneredPoster.html"
    
    // SC Halloween Campaign
    images[1] = loadImage("./assets/designAndIllustration/batHouses.png")
    locations [1] = "./designAndIllustration/scHalloween.html"

    // WLI
    images[2] = loadImage("./assets/designAndIllustration/orangeShortcakeThumbnail.png")
    locations [2] = "./designAndIllustration/orangeShortcake.html"

    // Studio Space
    images[3] = loadImage("./assets/designAndIllustration/g4UNC.png")
    locations [3] = "./designAndIllustration/g4.html"

    // Currently on Air
    images[4] = loadImage("./assets/designAndIllustration/currentlyOnAir.png")
    locations [4] = "./designAndIllustration/centerStudio.html"

    // Lace Drawings
    images[5] = loadImage("./assets/designAndIllustration/laceDrawings2.png")
    locations [5] = "./designAndIllustration/laceDrawings.html"
  
    // WLI
    images[6] = loadImage("./assets/designAndIllustration/WLILetterhead.png")
    locations [6] = "./designAndIllustration/wli.html"

    // Home Pages
    images[7] = loadImage("./assets/designAndIllustration/homePages2.png")
    locations [7] = "./designAndIllustration/homeBook.html"

    // Sketchbook
    images[8] = loadImage("./assets/designAndIllustration/sketchbook.png")
    locations [8] = "./designAndIllustration/sketchbook.html"

    images[9] = loadImage("./assets/designAndIllustration/findYourCenter.png")
    locations [9] = "./designAndIllustration/centerButton.html"

    images [10] = loadImage("./assets/designAndIllustration/prideProm.png")
    locations [10] = "./designAndIllustration/prideProm.html"
    
  }


// Setup function
function setup() {
    createCanvas(window.innerWidth, pageLength);
    }
    
  
  // Draw function
    function draw() {
      
      // FORMATTING
      background(253, 253, 253);
      textFont(font)
      textSize(gapVar*.33);
      textStyle(BOLD);
      text('Design and Illustration', gapVar, gapVar*2);

      // LOGO PLACEMENT
      let logoXCoord = gapVar*3 +sizeVar*2 +(sizeVar-gapVar)
      let logoYCoord = gapVar*.5
      let logoWidth = gapVar*.75
      let logoHeight = (logoWidth/natLuskLogo.width)*natLuskLogo.height
      image(natLuskLogo, logoXCoord, logoYCoord, logoWidth, logoHeight);
      let overLogo = mouseX >=logoXCoord && mouseX<= logoXCoord + logoWidth
&& mouseY >= logoYCoord && mouseY <= logoYCoord + logoHeight

      // HOME BUTTON

      // changes cursor to green arrow when over the logo
      // and, if mouse is pressed, sends back to homepage
      if (mouseX >=logoXCoord && mouseX<= logoXCoord + logoWidth
        && mouseY >= logoYCoord && mouseY <= logoYCoord + logoHeight){
          cursor("./assets/cursor.png");
          if (mouseIsPressed){
            location.assign("index.html")}}
      if (mouseY>=0 && mouseY<= gapVar*3 &&(!(mouseX >=logoXCoord && mouseX<= logoXCoord + logoWidth
        && mouseY >= logoYCoord && mouseY <= logoYCoord + logoHeight))){
        cursor(ARROW);}

      // VARIABLES AND ARRAYS
      let xCoord;
      let whichXLength = [];
      whichXLength [0] = (mouseX >= gapVar && mouseX <= gapVar+sizeVar);
      whichXLength [1] = (mouseX >= gapVar*2 + sizeVar && mouseX <= gapVar*2 +sizeVar*2);
      whichXLength [2] = (mouseX >= gapVar*3 + sizeVar*2 && mouseX <= gapVar*3 + sizeVar*3)
      
      // IMAGE DRAWING I LOOP
      for(i = 0; i < images.length; i++){

        // sets y coords of first three images
        columnLengths [0] = gapVar*3;
        columnLengths [1] = gapVar*3;
        columnLengths [2] = gapVar*3;

        // "sorts" images from array into columns
        if (i%3 == 0) {
            xCoord = gapVar};
        if (i%3 == 1) {
            xCoord = sizeVar + gapVar*2};
        if (i%3 == 2) {
            xCoord = gapVar*3 + sizeVar*2};
        
        // draws images onto canvas
        image(images[i], xCoord, columnLengths[i], sizeVar, 
            (sizeVar/images[i].width)*images[i].height);

        // keeps track of increasing y coordinates
        // to make masonry-style image display
        if (i > 2){
            columnLengths[i] = (columnLengths [i-3] + 
              (sizeVar/images[i-3].width)*images[i-3].height + gapVar)};
        
        // when cursor hovers over images changes to
        // custom cursor
        if (mouseX >= xCoord && mouseX <= xCoord + sizeVar && 
          mouseY >= columnLengths[i] && mouseY <= columnLengths[i]+
          (sizeVar/images[i].width)*images[i].height) {
          cursor("./assets/cursor.png");

          // sends user to specific project page when
          // they click on an image
          if (mouseIsPressed){
            location.assign(locations[i])}} 
        
        // recognizes when cursor is not over an image to 
        // change back to the regular cursor
        if ((mouseX >=0 && mouseX <= gapVar) // x within first gap
        || (mouseX >= gapVar+sizeVar && 
          mouseX <= gapVar*2 + sizeVar) // x within second gap
        || (mouseX >= gapVar*2 + sizeVar*2 && 
          mouseX <= gapVar*3 +sizeVar*2) // x within third gap
        || ((mouseX >= gapVar*3 + sizeVar*3 
          && mouseX <= gapVar*4 +sizeVar*3)) // x within fourth gap
        || (whichXLength[i%3] && mouseY >= columnLengths[i] - gapVar 
          && mouseY <= columnLengths[i])){
          cursor(ARROW)}
      }

      
      //let canvasLength = columnLengths[columnLengths.length-1]+gapVar
      //resizeCanvas(window.innerWidth, canvasLength, true)
      //console.log(canvasLength)

      if (overLogo){
        image(yellowLogo, logoXCoord, logoYCoord, logoWidth, logoHeight)
       }
    }
  
  // Resizes the canvas in case the window is resized
  function windowResized(){
    resizeCanvas(window.innerWidth, pageLength)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
  }