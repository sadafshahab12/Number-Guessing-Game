let randomNum = Math.floor(Math.random() * 10) + 1;
let attemptNum = 5;

function guess() {
  let inputBox = +document.getElementById("input-box").value;
  let guessMsg = document.getElementById("guess-msg");
  let attempt = document.getElementById("chance");
  let guessBtn = document.getElementById("guessBtn");
  attemptNum--;

  if (inputBox === randomNum) {
    guessMsg.innerText = "Hurrah! You guess the correct number";
    guessMsg.style.color = "green";
    guessBtn.disabled = true;
  } else if (inputBox > randomNum) {
    guessMsg.innerText = "Your Guess is too high. Try Again!";
    guessMsg.style.color = "red";
  } else if (inputBox < randomNum) {
    guessMsg.innerText = "Your Guess is too low. Try Again!";
    guessMsg.style.color = "blue";
  } else {
    alert("Try Again");
  }

  attempt.innerText = attemptNum;
  attemptEnd();
}

function restartGame() {
  randomNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById("input-box").value = "";
  let guessMsg = document.getElementById("guess-msg");
  guessMsg.innerText = "";
  attemptNum = 5;
  let attempt = document.getElementById("chance");
  attempt.innerText = attemptNum;
  let showAnswer = document.getElementById("showAnswer");
  showAnswer.innerText = "";
  guessBtn.disabled = false;
}

function attemptEnd() {
  if (attemptNum === 0) {
    let showAnswer = document.getElementById("showAnswer");
    showAnswer.innerText = `The Number was ${randomNum}`;
    guessBtn.disabled = true;
    let guessMsg = document.getElementById("guess-msg");
    guessMsg.innerText = "Ah! You Loss";
  }
}
