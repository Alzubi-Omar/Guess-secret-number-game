let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

const updateScoreDisplay = () =>
  (document.querySelector(".score").textContent = score);

const checkButton = document.querySelector(".check");
// Function to disable the button
function disableButton() {
  checkButton.disabled = true;
}

// Function to enable the check button
function enableButton() {
  checkButton.disabled = false;
}

// restart game
const resetGame = () => {
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  score = 20;
  enableButton();
  displayMessage();
  updateScoreDisplay();
  document.querySelector(".answer").classList.add("hidden");
  document.querySelector(".correct").classList.add("hidden");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#3f3d3d";
  document.querySelector(".answer").style.width = "15rem";
};

//
document.addEventListener("DOMContentLoaded", function () {
  let currentYear = new Date().getFullYear();
  document.getElementById("currentYear").textContent = "© " + currentYear;
});

checkButton.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("No Number!⛔");
    return;

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!🥳🥳");

    document.querySelector(".message").classList.add("active");
    document.querySelector(".answer").classList.remove("hidden");
    document.querySelector(".answer").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "Green";
    document.querySelector(".answer").style.width = "15rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is wrong
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too High!📈" : "Too Low!📉");
      score--;
      updateScoreDisplay();
    } else {
      displayMessage("You Lost the Game!💥");
      score = 0;
      updateScoreDisplay();
      document.querySelector("body").style.background = "red";

      disableButton();
      document.querySelector(".correct").classList.remove("hidden");
      document.querySelector(".guess").value = secretNumber;
    }
  }
});

document.querySelector(".again").addEventListener("click", resetGame);
