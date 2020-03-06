'use strict';

(function () {
  var popup = document.querySelector('.setup');
  var openPopupButton = document.querySelector('.setup-open');
  var closePopupButton = document.querySelector('.setup-close');
  var submitPopupButton = document.querySelector('.setup-wizard-form');


  openPopupButton.addEventListener('click', function () {
    popup.classList.remove('hidden');
  });

  closePopupButton.addEventListener('click', function () {
    popup.classList.add('hidden');
  });

  openPopupButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.const.enterKey) {
      popup.classList.remove('hidden');
    }
  });

  closePopupButton.addEventListener('keydown', function (evt) {
    if (evt.key === window.const.enterKey) {
      popup.classList.add('hidden');
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.key === window.const.escKey) {
      popup.classList.add('hidden');
    }
  });

  submitPopupButton.addEventListener('submit', function () {

  });
})();
