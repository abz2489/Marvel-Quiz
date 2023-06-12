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
    questionContent.innerHTML = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
        button.innerHTML = currentQuestion.choices[i].valueOf();
        button.classList.add("choices");
        if (button.innerHTML === currentQuestion.correct) {
            button.dataset.correct = true;
        }
        choicesContainer.appendChild(button);
        button.setAttribute("onclick", "checkAnswer(this)");
    }
}

function checkAnswer(e) {
    if (e.innerHTML === questions[currentQuestionIndex].correct) {
        e.classList.add("correct");
        score++;
        scoreCounter.innerHTML = "Score: " + score;
    } else if (e.innerHTML !== questions[currentQuestionIndex].correct) {
        e.classList.add("wrong");
    }
}