'use strict';
// (function () {
//   var userDialog = document.querySelector('.setup');

//   document.querySelector('.setup-similar').classList.remove('hidden');

//   var similarListElement = document.querySelector('.setup-similar-list');
//   var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


//   var wizards = [
//     {
//       name: window.const.wizardsNames[Math.floor(Math.random() * window.const.wizardsNames.length)] + '\r\n' + window.const.wizardsSurename[Math.floor(Math.random() * window.const.wizardsSurename.length)],
//       coatColor: window.const.wizardsCoatColor[Math.floor(Math.random() * window.const.wizardsCoatColor.length)],
//       eyesColor: window.const.WizardsEyesColor[Math.floor(Math.random() * window.const.WizardsEyesColor.length)]
//     }
//   ];

//   var renderWizard = function (wizard) {
//     var wizardElement = similarWizardTemplate.cloneNode(true);

//     wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
//     wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
//     wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

//     return wizardElement;
//   };

//   function createRandomWizard() {
//     return {
//       name: window.const.wizardsNames[Math.floor(Math.random() * window.const.wizardsNames.length)] + '\r\n' + window.const.wizardsSurename[Math.floor(Math.random() * window.const.wizardsSurename.length)],
//       coatColor: window.const.wizardsCoatColor[Math.floor(Math.random() * window.const.wizardsCoatColor.length)],
//       eyesColor: window.const.WizardsEyesColor[Math.floor(Math.random() * window.const.WizardsEyesColor.length)]
//     };
//   }

//   for (var i = 0; i < 3; i++) {
//     var wizard = createRandomWizard();
//     wizards.push(wizard);
//   }

//   var fragment = document.createDocumentFragment();
//   for (i = 0; i < wizards.length; i++) {
//     fragment.appendChild(renderWizard(wizards[i]));
//   }
//   similarListElement.appendChild(fragment);

//   userDialog.querySelector('.setup-similar').classList.remove('hidden');
// })();

(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;

  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  var similarListElement = userDialog.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_SIMILAR_WIZARD_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  });

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);
})();
