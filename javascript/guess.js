//create secret number
var secretNumber = 4;
//ask user for guess
var guess = Number(prompt("Guess a number"));
alert(guess);
//Check if guess is right
if (guess === secretNumber) {
  alert("You got it right");
} else if (guess > secretNumber) {
  alert("Number too high");
} else {
  alert("two low");
}
