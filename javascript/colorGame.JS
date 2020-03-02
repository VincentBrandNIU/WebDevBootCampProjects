var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpSquares();
  reset();
}
function setUpModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      //Figure out how many squares to show
      //pick new colors
      //update page to reflect changes
      //turnery operator
      //condition ? if: else
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}
function setUpSquares() {
  for (var i = 0; i < squares.length; i++) {
    //Add click listeners to squares
    squares[i].addEventListener("click", function() {
      //Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        message.textContent = "Correct";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        message.textContent = "Try Again";
      }
    });
  }
}
function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //Change color display to match picked color
  colorDisplay.textContent = pickedColor;
  //changecolors of the squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
  resetButton.textContent = "New Colors";
}
resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  //loop through all squares and change colors to match color
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
function generateRandomColors(num) {
  //make an array
  var array = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //generate random color ad push into arr
    array.push(randomColor());
  }
  //return array
  return array;
}
function randomColor() {
  //Pick a red from 0 - 255
  var red = Math.floor(Math.random() * 256);
  //Pick a green from - 255
  var green = Math.floor(Math.random() * 256);
  //Pick a blue from 0-255
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
