let images = [];
let columnLengths = [];
let locations = [];
let sizeVar = window.innerWidth/4
let gapVar = sizeVar/4
let natLuskLogo;
let halfScreen = window.innerWidth/2;
let imageWidth = sizeVar + gapVar
let imageYValues = []
let font;

function preload(){
    natLuskLogo = loadImage("./assets/natLuskLogo.png");

    images[0] = loadImage("./assets/corneredPoster.png")

    font = loadFont('./assets/geist.ttf')
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight*3);
    }

function draw(){

    let logoXCoord = gapVar*3 +sizeVar*2 +(sizeVar-gapVar)
    let logoYCoord = gapVar*.5
    let logoWidth = gapVar*.75
    let logoHeight = (logoWidth/natLuskLogo.width)*natLuskLogo.height
    
    
    background(253, 253, 253);
    textFont(font)
    textSize(gapVar*.3);
    //textStyle(BOLD);
    fill(230, 230, 230)
    let justifyRight = logoXCoord + logoWidth
    let backButton = font.textBounds('< Design and Illustration', 0, 0)
    text('← Design and Illustration', justifyRight-backButton.w, gapVar*2)
    console.log(font.textBounds('< Design and Illustration', gapVar, gapVar*2))
    

    fill (0, 0, 0);

    let workTitle = font.textBounds('< Design and Illustration', gapVar, gapVar*2)
    text('Cornered Exhibition Poster', gapVar*1.5+imageWidth, gapVar*3+gapVar*.3)


    image(natLuskLogo, logoXCoord, logoYCoord, logoWidth, logoHeight);

    imageYValues[0] = gapVar*3

    for(i = 0; i < images.length; i++){
        let imageHeight = (imageWidth/images[i].width)*images[i].height;
        image(images[i], gapVar, imageYValues[i], imageWidth, imageHeight)

        if (i > 0){
            imageYValues[i] = imageYValues[i-1]+imageHeight+gapVar
        }
    }
}


function windowResized(){
    resizeCanvas(window.innerWidth, window.innerHeight*3)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
    halfScreen = window.innerWidth/2;
    imageWidth = sizeVar + gapVar
  }