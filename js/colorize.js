'use strict';

(function () {
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.const.wizardsCoatColor[Math.floor(Math.random() * window.const.wizardsCoatColor.length)];
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.const.WizardsEyesColor[Math.floor(Math.random() * window.const.WizardsEyesColor.length)];
  });

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.background = window.const.fireballColor[Math.floor(Math.random() * window.const.fireballColor.length)];
  });

  // window.colorize = {
  //   coat: wizardCoat,
  //   eyes: wizardEyes,
  //   fireball: setupFireballWrap
  // };
})();
