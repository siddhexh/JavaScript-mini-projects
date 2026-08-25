const dispNum = document.querySelector('.number-display');
const guess = document.getElementById('guess');
const guessButton = document.getElementById('guess-btn');
const result = document.getElementById('result');
const remAttempts = document.getElementById('attempts');
const resetButton = document.getElementById('reset-btn');
const secNum = document.getElementById("seceret-num");

let answer = -1;
let attempts = -1;
const prevGuess = []
let gameActive = false;

function initializeGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    attempts = 7;
    prevGuess.length = 0;
    gameActive = true;

    remAttempts.innerText = attempts;
    result.innerText = "Make your first guess";
    guess.value = "";
    guess.focus();
}

guessButton.addEventListener("click", () => {

    if (!gameActive) {
        return;
    }

    const guessed = parseInt(guess.value);

    if (isNaN(guessed)) {
        result.innerText = "Enter a Valid Number";
        return;
    }

    if (guessed < 1 || guessed > 100) {
        result.innerText = "Out of Range (1-100)";
        return;
    }

    attempts--;
    prevGuess.push(guessed);

    if (guessed === answer) {
        result.innerText = "Congratulations, you Won! 🏆";
        gameActive = false;

    } else if (guessed > answer) {
        result.innerText = "Too High!";

    } else {
        result.innerText = "Too Low!";
    }

    remAttempts.innerText = attempts;

    if (attempts === 0 && guessed !== answer) {
        result.innerText = `Game Over!`;
        secNum.innerText = answer;
        gameActive = false;
    }

    guess.value = "";
    guess.focus();
});

resetButton.addEventListener("click", initializeGame);

guess.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        guessButton.click();
    }
})

initializeGame();