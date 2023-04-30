const timeInput = document.getElementById("time-input");
const startButton = document.getElementById("start-button");
const timerElement = document.getElementById("timer");
const counterL = document.getElementById("counter-l");
const counterS = document.getElementById("counter-s");
const winnerElement = document.getElementById("winner");
const restartButton = document.getElementById("restart-button");

let timeLeft = 0;
let intervalId = null;
let lCount = 0;
let sCount = 0;

function startGame() {
  timeLeft = timeInput.value;
  if (!timeLeft) {
    alert("Please enter a valid duration");
    return;
  }
  timerElement.textContent = `Time left: ${timeLeft} seconds`;

  intervalId = setInterval(() => {
    timeLeft--;

    if (timeLeft === 0) {
      clearInterval(intervalId);
      timerElement.textContent = "Time is up!";
      if (lCount > sCount) {
        winnerElement.textContent = "Player 1 wins!";
      } else if (sCount > lCount) {
        winnerElement.textContent = "Player 2 wins!";
      } else {
        winnerElement.textContent = "The game is tied!";
      }
    } else {
      timerElement.textContent = `Time left: ${timeLeft} seconds`;
    }
  }, 1000);
}
function keyPressed(event) {
  if (event.key === "l") {
    lCount++;
    counterL.textContent = `Player 1: ${lCount}`;
  } else if (event.key === "s") {
    sCount++;
    counterS.textContent = `Player 2: ${sCount}`;
  }
}
function restartGame() {
  clearInterval(intervalId);
  timeInput.value = "";
  timerElement.textContent = "";
  lCount = 0;
  sCount = 0;
  counterL.textContent = "Player 1: 0";
  counterS.textContent = "Player 2: 0";
  winnerElement.textContent = "";
}
startButton.addEventListener("click", startGame);
document.addEventListener("keydown", keyPressed);
restartButton.addEventListener("click", restartGame);
