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

const svgSetup = () => {
  document.querySelectorAll('img.svg').forEach(function(element) {
    var imgID = element.getAttribute('id')
    var imgClass = element.getAttribute('class')
    var imgURL = element.getAttribute('src')

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            var svg = xhr.responseXML.getElementsByTagName('svg')[0];

            if(imgID != null) {
                 svg.setAttribute('id', imgID);
            }

            if(imgClass != null) {
                 svg.setAttribute('class', imgClass + ' replaced-svg');
            }

            svg.removeAttribute('xmlns:a')

            if(!svg.hasAttribute('viewBox') && svg.hasAttribute('height') && svg.hasAttribute('width')) {
                svg.setAttribute('viewBox', '0 0 ' + svg.getAttribute('height') + ' ' + svg.getAttribute('width'))
            }
            element.parentElement.replaceChild(svg, element)
        }
    }
    xhr.open('GET', imgURL, true)
    xhr.send(null)
  })
}

if (feedbackSection.length) {
  svgSetup();
  getFeedback();
}

