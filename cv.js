let cv;
let sizeVar = window.innerWidth/4;
let gapVar = sizeVar/4;
let pageLength = ((window.innerWidth -gapVar*2)*1.29)+gapVar*4.5
let natLuskLogo;
let yellowLogo;
let mainTypeSize = gapVar*.3

function preload(){
    cv = loadImage("./assets/cv.png")
    natLuskLogo = loadImage("./assets/natLuskLogo.png")
    yellowLogo = loadImage("./assets/yellowLogo.png")

    // Font
    font = loadFont('./assets/geist.ttf')
}

function setup(){
    createCanvas(window.innerWidth, pageLength)
}

function draw(){
    background(240, 240, 240);
    let cvX = gapVar;
    let cvY = gapVar*2.5;
    let cvW = window.innerWidth-gapVar*2;
    let cvH = (cvW/cv.width)*cv.height;
    image(cv, cvX, cvY, cvW, cvH)

    textFont(font)
    textSize(mainTypeSize);
    fill('Blue')

    text('Download CV', gapVar, gapVar*2)

    let downloadCvBound = font.textBounds('Download CV', gapVar, 
        gapVar*2)
    let overDownloadCv = mouseX >= gapVar && mouseX <= gapVar+ downloadCvBound.w &&
    mouseY <= gapVar*2 && mouseY >= gapVar*2-downloadCvBound.h

    // LOGO PLACEMENT
    let logoXCoord = gapVar*3 +sizeVar*2 +(sizeVar-gapVar)
    let logoYCoord = gapVar*.5
    let logoWidth = gapVar*.75
    let logoHeight = (logoWidth/natLuskLogo.width)*natLuskLogo.height


let overLogo = mouseX >=logoXCoord && mouseX<= logoXCoord + logoWidth
&& mouseY >= logoYCoord && mouseY <= logoYCoord + logoHeight

image(natLuskLogo, logoXCoord, logoYCoord, logoWidth, logoHeight);

if(overLogo){
    image(yellowLogo, logoXCoord, logoYCoord, logoWidth, logoHeight)
    if (mouseIsPressed){
        location.assign("index.html")
    }
}

if(overLogo || overDownloadCv){
    cursor("./assets/cursor.png")
} else {
    cursor(ARROW)
}
if(overDownloadCv){
    fill(232, 209, 27)
    text('Download CV', gapVar, gapVar*2)
    if (mouseIsPressed){
        window.location.href = "https://drive.google.com/file/d/1wQzcqr2j4JnZeq-AlQdD3p9AElcieMrd/view?usp=sharing"
    }
}
}

function windowResized(){
    pageLength = ((window.innerWidth -gapVar*2)*1.29)+gapVar*4
    resizeCanvas(window.innerWidth, pageLength)
    textSize(window.innerWidth/60)
    sizeVar = window.innerWidth/4
    gapVar = sizeVar/4
  }