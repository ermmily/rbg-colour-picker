// RGB Colors

document.getElementById("previewBtn").addEventListener("click", rgbpreview);
let previewBtnEl = document.getElementById("previewBtn");
let redInEl = document.getElementById("inptR");
let greenInEl = document.getElementById("inptG");
let blueInEl = document.getElementById("inptB");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let display = document.getElementById("display");
//w + p stuff

let pW = document.getElementById("pWidth");
let pH = document.getElementById("pHeight");
pW.addEventListener("change", changeSize);
pH.addEventListener("change", changeSize);
//changes w/o button :gasp:
redInEl.addEventListener("change", rgbpreview);
greenInEl.addEventListener("change", rgbpreview);
blueInEl.addEventListener("change", rgbpreview);
//preview width and height adjustment
function changeSize() {
  let width = +pW.value;
  let height = +pH.value;
  if (width < 50) {
    width = 50;
    pW.value = 50;
  } else if (width > 400) {
    width = 400;
    pW.value = 400;
  }
  if (height < 50) {
    height = 50;
    pH.value = 50;
  } else if (height > 200) {
    height = 200;
    pH.value = 200;
  }
  let wString = width + "px";
  let hString = height + "px";
  display.style.width = wString;
  display.style.height = hString;
}
//event function
function rgbpreview() {
  //input vals for red green and blue
  let rVal = +redInEl.value;
  let gVal = +greenInEl.value;
  let bVal = +blueInEl.value;

  //validate colour (constrain)
  //rVal
  if (rVal < 0) {
    rVal = 0;
    redInEl.value = 0;
  } else if (rVal > 225) {
    rVal = 225;
    redInEl.value = 225;
  }
  //rVal
  if (gVal < 0) {
    rVal = 0;
    greenInEl.value = 0;
  } else if (gVal > 225) {
    gVal = 225;
    greenInEl.value = 225;
  }
  //bVal
  if (bVal < 0) {
    bVal = 0;
    blueInEl.value = 0;
  } else if (bVal > 225) {
    bVal = 225;
    blueInEl.value = 225;
  }
  //get rgb string
  let rgbString = "rgb(" + rVal + ", " + gVal + ", " + bVal + ")";
  //output rgb string + change preview colour
  rgbStringOutEl.innerHTML = rgbString;
  display.style.background = rgbString;
}
