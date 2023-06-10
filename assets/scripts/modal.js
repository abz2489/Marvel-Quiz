// How to Play modal learnt using https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
const modal = document.querySelector(".modal");
const startQuiz = document.querySelector(".btn-start-quiz");

// Function to open how to Play modal
function openModal() {
    modal.classList.remove("hidden");
};

// Function to close How to Play modal
function closeModal() {
    modal.classList.add("hidden");
};