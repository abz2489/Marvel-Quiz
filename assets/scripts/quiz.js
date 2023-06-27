// Get HTML elements and save as const variables
const howToPlayBtn = document.querySelector(".btn-how-to-play");
const startQuizBtn = document.querySelector(".btn-start-quiz");
const quizContainer = document.querySelector(".quiz-container");
const scoreboard = document.querySelector("#scoreboard");
const scoreCounter = document.querySelector(".score-counter");
const quitGame = document.querySelector(".quit-game");
const questionContent = document.querySelector("#question");
const nextButton = document.querySelector("#next-btn");
const choicesContainer = document.querySelector(".choices-container");
const gameOverContainer = document.querySelector(".game-over-container");
const finalScore = document.querySelector(".final-score");
const playAgainBtn = document.querySelector(".play-again-btn");
const background = document.querySelector("body");
const difficultyContainer = document.querySelector(".difficulty-container");

let button;
let score;
let currentQuestionIndex;
let currentQuestion;
let quizQuestions;

function selectDifficulty() {
    difficultyContainer.classList.remove("hidden");
}

function loadQuiz(questions) {
    difficultyContainer.classList.add("hidden");
    howToPlayBtn.classList.add("hidden");
    startQuizBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    howToPlayModal.classList.add("hidden");

    score = 0;
    scoreCounter.innerHTML = "Score: " + score;
    quizQuestions = questions;
    currentQuestionIndex = 0;

    displayQuestion();
}

function clearChoices() {
    while (choicesContainer.firstChild) {
        choicesContainer.removeChild(choicesContainer.firstChild);
    }
}

function displayQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        gameOver();
        console.log("GAME OVER!");
    } else {
        questionContent.innerHTML = quizQuestions[currentQuestionIndex].question;
        for (let i = 0; i < 4; i++) {
            button = document.createElement("button");
            button.innerHTML = quizQuestions[currentQuestionIndex].choices[i];
            button.classList.add("choices", "btn");
            if (button.innerHTML === quizQuestions[currentQuestionIndex].correct) {
                button.dataset.correct = true;
            }
            choicesContainer.appendChild(button);
            button.setAttribute("onclick", "checkAnswer(this)");
        }
    }

}

function checkAnswer(e) {
    if (e.innerHTML == quizQuestions[currentQuestionIndex].correct) {
        background.classList.add("correct");
        score++;
        scoreCounter.innerHTML = "Score: " + score;
    } else if (e.innerHTML !== quizQuestions[currentQuestionIndex].correct) {
        background.classList.add("wrong");
    }

    function nextQuestion() {
        background.classList.remove("correct");
        background.classList.remove("wrong");
        clearChoices();
        currentQuestionIndex++;
        displayQuestion();
    }
    setTimeout(nextQuestion, 700);
}

function gameOver() {
    quizContainer.classList.add("hidden");
    gameOverContainer.classList.remove("hidden");
    finalScore.innerHTML = score;
}

function playAgain() {
    gameOverContainer.classList.add("hidden");
    loadQuiz();
}