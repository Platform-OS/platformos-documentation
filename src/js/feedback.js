const form = document.querySelector('[data-feedback="form"]');
const selectedValues = document.querySelectorAll('[data-feedback-selected-value]');
const questionsContainer = document.querySelector('[data-feedback="questions"]');
const questionValues = questionsContainer.querySelectorAll('[data-feedback-value]');

const showQuestionsContainer = () => questionsContainer.classList.remove('hidden');
const showQuestion = value => form.querySelector(`[data-feedback-value="${value}"]`).classList.remove('hidden');
const hideQuestions = () => [...questionValues].map(el => el.classList.add('hidden'));

const attachEventHandlers = () => {
  [...selectedValues].map(el => {
    el.addEventListener("change", event => {
      const selectedValue = event.target.value;
      hideQuestions();
      showQuestionsContainer();
      showQuestion(selectedValue);
    });
  });
}

attachEventHandlers();

// const removeSelectedFeedback = () => {
//   const selectedFeedback = [...document.querySelectorAll(".feedback-selected")];

//   if (selectedFeedback.length > 0) {
//     selectedFeedback.forEach(el => {
//       el.classList.remove("feedback-selected");
//     });
//   }
// };

// const hideMessageLabels = () => {
//   var messageLabels = document.querySelectorAll("[data-feedback]");

//   if (messageLabels.length > 0) {
//     Array.from(messageLabels).forEach(el => {
//       el.classList.add("hidden");
//     });
//   }
// };

// const getFeedback = () => {
//   feedbackElements.forEach(el => {
//     el.addEventListener("click", () => {
//       removeSelectedFeedback();
//       hideMessageLabels();
//       feedbackQuestions.classList.remove("hidden");
//       el.querySelector("svg").classList.add("feedback-selected");
//       feedbackInput.value = el.dataset.feedbackRate;

//       document
//         .querySelector(`[data-feedback="${el.dataset.feedbackRate}"]`)
//         .classList.remove("hidden");
//     });
//   });
// };

// if (feedbackSection.length > 0) {
//   getFeedback();
// }
