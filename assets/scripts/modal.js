// How to Play modal learnt using https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
const howToPlayModal = document.querySelector(".how-to-play-modal");
const startQuiz = document.querySelector(".btn-start-quiz");

// Function to open how to Play modal
function openModal() {
    howToPlayModal.classList.remove("hidden");
}

// Function to close How to Play modal
function closeModal() {
    howToPlayModal.classList.add("hidden");
}

// Quit Game Modal
const quitGameModal = document.querySelector(".quit-game-modal");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const homeBtn = document.querySelector(".home-btn");

// Function to quit quiz or close modal and continue
function quitQuiz() {
    quitGameModal.classList.remove("hidden");
}

// Function to close and reset quiz when yes button is clicked
function closeQuiz() {
    clearChoices();
    quizContainer.classList.add("hidden");
    quitGameModal.classList.add("hidden");
    gameOverContainer.classList.add("hidden");
    howToPlayBtn.classList.remove("hidden");
    startQuiz.classList.remove("hidden");
}

// Function to close quit modal when no button is pressed
function closeQuitModal() {
    quitGameModal.classList.add("hidden");
}

// Quit difficulty selection
const difficultySelect = document.querySelector(".difficulty-container");

// Function to close difficulty select container when pressed
function closeDifficultySelect() {
    difficultySelect.classList.add("hidden");
    howToPlayBtn.classList.remove("hidden");
    startQuiz.classList.remove("hidden");
}