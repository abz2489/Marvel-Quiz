// How to Play modal learnt using https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
const howToPlayModal = document.querySelector(".how-to-play-modal");
const startQuiz = document.querySelector(".btn-start-quiz");

// Function to open how to Play modal
function openModal() {
    howToPlayModal.classList.remove("hidden");
};

// Function to close How to Play modal
function closeModal() {
    howToPlayModal.classList.add("hidden");
};