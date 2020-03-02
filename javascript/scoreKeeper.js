var buttonPlayer1 = document.querySelector("#player1");
var button2 = document.getElementById("player2");
var button3 = document.getElementById("reset");
var p1Display = document.getElementById("p1Score");
var p2Display = document.getElementById("p2Score");
var numInput = document.querySelector("input");
var wins = document.querySelector("#winningScore");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;
buttonPlayer1.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      p1Display.classList.add("winner");
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

button2.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }

    p2Display.textContent = p2Score;
  }
});
button3.addEventListener("click", function() {
  reset();
});

numInput.addEventListener("change", function() {
  winningScore = Number(numInput.value);
  wins.textContent = winningScore.toString();
  reset();
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
