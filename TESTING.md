<h1>Marvel Quiz - Testing</h1>

# **Bugs & Fixes**
1. Modal obstructs quiz container when start quiz button within how to play modal is clicked. Fixed by adding hidden class to the modal within the loadQuiz function.

<img src="assets/testing-images/bug1-modal-overlap.webp" height="350"/>

2. Previous question choices remain on screen when next question and answers have loaded. Fixed by adding a while loop to choicesContainer.firstChild. The loop removes all first children from choices container.

3. Game Over function doesn't execute when currentQuestionIndex is greater than or equal to questions.length. 

# **Automated Testing**

## **HTML Validation**

## **CSS Validation**

## **JavaScript Validation**

## **Lighthouse Testing**

___

# **Manual Testing**

## **User Stories Testing**

## **Feature Testing**
___