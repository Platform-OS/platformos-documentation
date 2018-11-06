const form = () => document.querySelector('[data-feedback="form"]');
const selectedValues = () => document.querySelectorAll('[data-feedback-selected-value]');
const questionsContainer = () => document.querySelector('[data-feedback="questions"]');
const questionValues = () => document.querySelectorAll('[data-feedback-value]');

const toggleQuestionsContainer = addOrRemove =>
  questionsContainer().classList.toggle('hidden', addOrRemove);
const hideQuestions = () => [...questionValues()].map(el => el.classList.add('hidden'));
const showQuestion = value =>
  form()
    .querySelector(`[data-feedback-value="${value}"]`)
    .classList.remove('hidden');

const updateFormForCustomizationUpdate = id => {
  if (!id) {
    return;
  }
  form().setAttribute('action', `/api/customizations/${id}`);
  form().insertAdjacentHTML('beforeend', '<input type="hidden" name="_method" value="PUT">');
};

const sendFeedback = () => {
  return fetch(form().getAttribute('action'), {
    method: form().getAttribute('method'),
    body: new FormData(form()),
    credentials: 'same-origin'
  })
    .then(response => (response.status === 201 ? response.json() : {}))
    .then(customization => updateFormForCustomizationUpdate(customization.id))
    .catch(e => {
      throw new Error(e);
    });
};

const onRatingSelected = event => {
  const selectedValue = event.target.value;
  toggleQuestionsContainer(true);
  hideQuestions();

  sendFeedback().then(() => {
    console.log('Showing question: ', selectedValue);
    showQuestion(selectedValue);
    toggleQuestionsContainer(false);
  });
};

document.addEventListener('turbolinks:load', () => {
  if (form()) {
    [...selectedValues()].map(el => el.addEventListener('change', onRatingSelected));
  }
});
