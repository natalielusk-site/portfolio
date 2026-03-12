// GLOBAL VARIABLES

// image and data arrays
let images = [];
let columnLengths = [];
let locations = [];
let imageYValues = []

// sizing variables
let sizeVar = window.innerWidth/4
let gapVar = sizeVar/4
let halfScreen = window.innerWidth/2;
let imageWidth = sizeVar + gapVar
let mainTypeSize = gapVar*.3
let pageLength = sizeVar*4

// image and text
let natLuskLogo;
let yellowLogo;
let font;

//
let projectName = 'WLI Logo Package'
let projectDesc = "I was tasked with a redesign of the brand identity for the Women’s Leadership Institute at Florida State University. Incorporating requests for color palette and motif from the Institute’s coordinators, I developed a logo system that is flexible across document types, memorably simple, and true to the spirit of the event series."

// PRELOAD FUNCTION
function preload(){
    // logo preload
    natLuskLogo = loadImage("./assets/natLuskLogo.png");
    yellowLogo = loadImage("./assets/yellowLogo.png")

    // project images preload
    images[0] = loadImage("./assets/wliCircle.png")
    images[1] = loadImage("./assets/WLILetterhead.png")

    // font preload
    font = loadFont('./assets/geist.ttf')
}

// SETUP FUNCTION
function setup() {
    // draws canvas the size of the window
    createCanvas(window.innerWidth, pageLength);
    }

// DRAW FUNCTION
function draw(){

    // logo placement variables
    let logoXCoord = gapVar*3 +sizeVar*2 +(sizeVar-gapVar)
    let logoYCoord = gapVar*.5
    let logoWidth = gapVar*.75
    let logoHeight = (logoWidth/natLuskLogo.width)*natLuskLogo.height
    let overLogo = mouseX >=logoXCoord && mouseX<= logoXCoord + logoWidth
&& mouseY >= logoYCoord && mouseY <= logoYCoord + logoHeight
    
    // formatting
    background(253, 253, 253);
    textFont(font)
    textSize(mainTypeSize);
    fill('Blue')

    // back to previous page button
    let justifyRight = logoXCoord + logoWidth
    let backButton = font.textBounds('< Design and Illustration', 0, 0)
    let backButtonX = justifyRight-backButton.w-(gapVar/10)
    let backButtonY = gapVar*2
    text('← Design and Illustration', justifyRight-backButton.w-(gapVar/9), gapVar*2)
    if (mouseX >= backButtonX && mouseX <= backButtonX+backButton.w +gapVar/7
         && mouseY >= backButtonY-backButton.h && mouseY <= backButtonY){
            fill(232, 209, 27)
            text('← Design and Illustration', justifyRight-backButton.w-(gapVar/9), gapVar*2)
            cursor("./assets/cursor.png")
            if (mouseIsPressed){
                location.assign("../designAndIllustration.html")
            }
        } else {
            cursor(ARROW)
        }

    // reformats to black text
    fill (0, 0, 0);

    // project title and description
    let projectX = gapVar*2+imageWidth

    let workTitle = font.textBounds('< Design and Illustration', gapVar, gapVar*2)
    text(projectName, projectX, gapVar*3+gapVar*.3)

    textSize(mainTypeSize*.75)

    text(projectDesc, 
        projectX, gapVar*3+(gapVar*.3)*3, gapVar*6)

    // draws logo on canvas
    image(natLuskLogo, logoXCoord, logoYCoord, logoWidth, logoHeight);

    // sets first image to be at three gapVars down
    imageYValues[0] = gapVar*3

    // i loop to draw all project images
    for(i = 0; i < images.length; i++){

        // image height variable
        let imageHeight = (imageWidth/images[i].width)*images[i].height;
        // draws image
        image(images[i], gapVar, imageYValues[i], imageWidth, imageHeight)
        // draws image

        // keeps track of the length of previous images to determine y cord
        if (i > 0){
            imageYValues[i] = imageYValues[i-1]+((imageWidth/images[i-1].width)*images[i-1].height)+gapVar
        }
    }
    if (overLogo){
        image(yellowLogo, logoXCoord, logoYCoord, logoWidth, logoHeight)
        if(mouseIsPressed){
            location.assign("../index.html")
        }
       }
       let overBackButton = mouseX >= backButtonX && mouseX <= backButtonX+backButton.w +gapVar/7 && mouseY >= backButtonY-backButton.h && mouseY <= backButtonY
    if (overBackButton || overLogo){
        cursor("./assets/cursor.png")
    }else{
        cursor(ARROW)
    }
}

// WINDOW RESIZE FUNCTION
function windowResized(){
    
    
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
    pageLength = sizeVar*4
    resizeCanvas(window.innerWidth, pageLength)
    halfScreen = window.innerWidth/2;
    imageWidth = sizeVar + gapVar
    mainTypeSize = gapVar*.3
  }