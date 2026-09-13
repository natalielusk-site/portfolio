// ---------------------------------
// GLOBAL VARIABLES
// ---------------------------------

// thumbnail image arrays
let thumbnailImages = [];
let portfolioCategoryPages = [];
let thumbnailX = [];
let thumbnailTitles = [];

// sizing variables
let canvasHeight = window.innerWidth * 1.72;
let verticalMargins = window.innerWidth * .065;
let spaceBetweenThumbnails = window.innerWidth * .03;
let thumbnailWidth = window.innerWidth * .12;
let thumbnailY;
let thumbnailTitleY;

// natalie lusk name
let natalieLuskNameY;
let natalieLuskNameH;
let natalieLuskNameW;

// other images to load
let natalieLuskName;
let natLuskStampLogo;
let limeNatLuskStampLogo;


// ---------------------------------
// PRELOAD FUNCTION
// ---------------------------------

function preload(){

  // thumbnail images:
  thumbnailImages[0] = loadImage("./assets/printThumbnail.png");
  thumbnailImages[1] = loadImage("./assets/digitalThumbnail.png");
  thumbnailImages[2] = loadImage("./assets/socialThumbnail.png");
  thumbnailImages[3] = loadImage("./assets/merchThumbnail.png");
  thumbnailImages[4] = loadImage("./assets/brandingThumbnail.png");
  thumbnailImages[5] = loadImage("./assets/illustrationThumbnail.png");

  // portfolio category page links
  portfolioCategoryPages[0] = "./print.html";
  portfolioCategoryPages[1] = "./digital.html";
  portfolioCategoryPages[2] = "./social.html";
  portfolioCategoryPages[3] = "./merch.html";
  portfolioCategoryPages[4] = "./branding.html";
  portfolioCategoryPages[5] = "./illustration.html";

  // thumbnail titles
  thumbnailTitles[0] = "Print";
  thumbnailTitles[1] = "Digital";
  thumbnailTitles[2] = "Social";
  thumbnailTitles[3] = "Merch";
  thumbnailTitles[4] = "Branding";
  thumbnailTitles[5] = "Illustration";

  // fonts:
  geist = loadFont('./assets/geist.ttf');

  // variables
  thumbnailX[0] = verticalMargins;

  // other images
  natalieLuskName = loadImage("./assets/natalieLuskName.png");
  natLuskStampLogo = loadImage("./assets/natLuskStampLogo.png");
  limeNatLuskStampLogo = loadImage("./assets/limeNatLuskStampLogo.png");
}


// ---------------------------------
// SETUP FUNCTION
// ---------------------------------

function setup() {

  // draws canvas the size of the window
  createCanvas(window.innerWidth, window.innerHeight);

  // calculates the Y coordinates of thumbnail images and their title text
  thumbnailY = height*.53;
  thumbnailTitleY = thumbnailY + thumbnailWidth + height * .023;
}


// ---------------------------------
// DRAW FUNCTION
// ---------------------------------

function draw() {

  // STYLE SETUP
  // --------------------------------------

  // makes sure elements don't get overcrowded on short screens
  // by establishing a minimum window height to be used in
  // coordinate calculations
  if ((window.innerHeight/window.innerWidth) < .41){
    resizeCanvas(window.innerWidth, window.innerWidth*.41);
  } else{
    resizeCanvas(window.innerWidth, window.innerHeight);
  }

  // text settings
  textStyle(BOLD);
  textFont(geist);
  textSize(window.innerWidth * .013);
  textAlign(LEFT, TOP);

  // background color
  background(253, 253, 253);


  // THUMBNAIL AND TITLE TEXT
  // --------------------------------------

  // check whether ANY thumbnail is being hovered
  let hoveringAnyThumbnail = false;

  // loop to check hovering status and draw thumbnails and titles
  for (let i = 0; i < thumbnailImages.length; i++) {

    // check THIS thumbnail
    let hoveringThumbnail =
      mouseX >= thumbnailX[i] &&
      mouseX <= thumbnailX[i] + thumbnailWidth &&
      mouseY >= thumbnailY &&
      mouseY <= thumbnailY + thumbnailWidth;

    let hoveringText = 
    mouseX >= thumbnailX[i] &&
    mouseY >= thumbnailTitleY &&
    mouseX <= thumbnailX[i] + textWidth(thumbnailTitles[i]) &&
    mouseY <= thumbnailTitleY + window.innerWidth * .013;

    // remember if we're hovering any thumbnail or text
    if (hoveringThumbnail || hoveringText) {
      hoveringAnyThumbnail = true;
    }

    // draws thumbnail image
    image(
      thumbnailImages[i],
      thumbnailX[i],
      thumbnailY,
      thumbnailWidth,
      thumbnailWidth);

    // thumbnail border and text change when hovered over
    if (hoveringThumbnail || hoveringText) {
      // changes text color
      fill(217, 232, 17);
      // draws rectangle over thumbnail
      noStroke();
      rect(
        thumbnailX[i]-window.innerWidth*.001,
        thumbnailY-window.innerWidth*.001, 
        thumbnailWidth+(2*(innerWidth*.001)), 
        thumbnailWidth+(2*(innerWidth*.001)));
      // redraws image above rectangle to create border effect
      image(
      thumbnailImages[i],
      thumbnailX[i],
      thumbnailY,
      thumbnailWidth,
      thumbnailWidth);

    
    } else {
      // returns text to black
      fill(0, 0, 0);
    }

    // sends user to relevant page if a thumbnail is clicked
    if (hoveringThumbnail && mouseIsPressed){
      location.assign(portfolioCategoryPages[i]);
    }

    // draws the titles below their respective thumbnails
    text(
      thumbnailTitles[i],
      thumbnailX[i],
      thumbnailTitleY);

    // calculate x position for next thumbnail
    thumbnailX[i + 1] =
      thumbnailX[i] + spaceBetweenThumbnails + thumbnailWidth;
  }

  // cursor changes when thumbnail hovered over
  if (hoveringAnyThumbnail) {
    cursor("./assets/cursor.png");
  } else {
    cursor(ARROW);
  }

  // BIOGRAPHY PARAGRAPH
  //----------------------------------

  // stops text from changing color when the last thumbnail is hovered
  fill(0);
  // biography content
  let bio = "is a graphic designer with over two years of professional experience and a B.A. in studio art. Her work is versatile; design outcomes range from imaginative to sleek, minimalist to maximalist. She prioritizes clarity of message, expressing the spirit of a brand, and a joyful approach to detail in the design process."
  // draws biography
  text(
    bio,
    verticalMargins,
    height * .327,
    window.innerWidth * .56,
    height * .42);


  // FULL NAME IMAGE
  //----------------------------------

  // sizing variables
  natalieLuskNameY = (height * .327) - height*.075;
  natalieLuskNameH = natalieLuskName.height*(((window.innerWidth * .56)/2)/natalieLuskName.width);
  natalieLuskNameW = (window.innerWidth * .56)/2;
  // draws full name image
  image
  (natalieLuskName,
    verticalMargins,
    natalieLuskNameY,
    natalieLuskNameW,
    natalieLuskNameH);


// LOGO
//----------------------------------
// calculates logo width
natLuskStampLogoW = verticalMargins*.75;

// draws logo
image (
  natLuskStampLogo,
  window.innerWidth-verticalMargins - natLuskStampLogoW,
  natLuskStampLogoW,
  natLuskStampLogoW,
  natLuskStampLogoW);

// changes logo color and cursor when hovered over
if (
  mouseX >= window.innerWidth-verticalMargins - natLuskStampLogoW
  && mouseX <= window.innerWidth-verticalMargins
  && mouseY >= natLuskStampLogoW
  && mouseY <= natLuskStampLogoW*2
){
 cursor("./assets/cursor.png")
 image (
  limeNatLuskStampLogo,
  window.innerWidth-verticalMargins - natLuskStampLogoW,
  natLuskStampLogoW,
  natLuskStampLogoW,
  natLuskStampLogoW);

  } else {
    //cursor(ARROW)
    image (
  natLuskStampLogo,
  window.innerWidth-verticalMargins - natLuskStampLogoW,
  natLuskStampLogoW,
  natLuskStampLogoW,
  natLuskStampLogoW);
  }

// sends user to homepage if logo is clicked
  if (
  mouseX >= window.innerWidth-verticalMargins - natLuskStampLogoW
  && mouseX <= window.innerWidth-verticalMargins
  && mouseY >= natLuskStampLogoW
  && mouseY <= natLuskStampLogoW*2
  && mouseIsPressed){
location.assign("index.html");
  }

// TOP LEFT TABS
//----------------------------------
  // draws the text
  text('Resume', verticalMargins, natLuskStampLogoW);
  // changes text color and cursor when hovered over
  if(
    mouseX >= verticalMargins &&
    mouseX <= textWidth('Resume') + verticalMargins &&
    mouseY >= natLuskStampLogoW &&
    mouseY <= natLuskStampLogoW + window.innerWidth * .013
  ) {
    fill (217, 232, 17);
    text('Resume', verticalMargins, natLuskStampLogoW);
    cursor("./assets/cursor.png");
  }
  // sends user to resume if button is clicked 
  if(
    mouseX >= verticalMargins &&
    mouseX <= textWidth('Resume') + verticalMargins &&
    mouseY >= natLuskStampLogoW &&
    mouseY <= natLuskStampLogoW + window.innerWidth * .013 &&
    mouseIsPressed
  ) {
    window.location.href = "google.com";

  }

}

//------------------------------------
// WINDOW RESIZE FUNCTION
//------------------------------------
function windowResized(){

  // makes sure elements don't get overcrowded on short screens
  // by establishing a minimum window height to be used in
  // coordinate calculations
  if ((window.innerHeight/window.innerWidth) < .41){
    resizeCanvas(window.innerWidth, window.innerWidth*.41);
  } else{
    resizeCanvas(window.innerWidth, window.innerHeight);
  }

  // general sizing variables
  verticalMargins = window.innerWidth*.065;
  spaceBetweenThumbnails = window.innerWidth*.03;
  // thumbnail variables
  thumbnailWidth = window.innerWidth*.12;
  thumbnailY = height*.53;
  thumbnailX[0] = verticalMargins;
  // natalie lusk name variables
  natalieLuskNameY = (height * .327) - height*.11;
  natalieLuskNameH = height*.105;
  natalieLuskNameW = (natalieLuskNameH.height/natalieLuskName.width)*natalieLuskNameH;

}