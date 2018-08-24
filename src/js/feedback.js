const feedbackSection = [...document.querySelectorAll('.feedback-form')];

const removeSelectedFeedback = () => {

  const selectedFeedback = document.querySelectorAll('.feedback-selected');

  if (selectedFeedback.length > 0 ) {
    Array.from(selectedFeedback).forEach(el => {
      el.classList.remove('feedback-selected');
    });
  }
}

const hideMessageLabels = () => {

  var messageLabels = document.querySelectorAll('[data-feedback]');

  if (messageLabels.length > 0 ) {
    Array.from(messageLabels).forEach(el => {
      el.classList.add('hidden');
    });
  }
}

const getFeedback = () => {
  const feedbackElements = document.querySelectorAll('[data-feedback-rate]');
  const feedbackQuestions = document.querySelector('[data-feedback-questions]');
  const feedbackInput = document.querySelector('[data-feedback-input]');

  Array.from(feedbackElements).forEach(el => {
    el.addEventListener('click', function(event) {
      removeSelectedFeedback();
      hideMessageLabels();
      feedbackQuestions.classList.remove('hidden');
      el.querySelector('svg').classList.add('feedback-selected');
      feedbackInput.value = el.dataset.feedbackRate;

      document.querySelector('[data-feedback="' + el.dataset.feedbackRate +'"]').classList.remove("hidden");
    });
  });
}

if (feedbackSection.length) {
  getFeedback();
}

