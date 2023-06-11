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

let score;
let currentQuestionIndex;


function loadQuiz() {
    console.log("quiz starting");
    howToPlayBtn.classList.add("hidden");
    startQuizBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    scoreboard.classList.remove("hidden");
    modal.classList.add("hidden");

    score = 0;
    scoreCounter.innerHTML = "Score: " + score;

    currentQuestionIndex = 0;

    displayQuestion();
}

function exitQuiz() {
    quizContainer.classList.add("hidden");
    howToPlayBtn.classList.remove("hidden");
    startQuizBtn.classList.remove("hidden");
}

function displayQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    console.info(currentQuestion);
    questionContent.innerHTML = currentQuestion.question;
}
