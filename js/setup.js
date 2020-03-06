'use strict';

var userDialog = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var wizards = [
  {
    name: window.const.wizardsNames[Math.floor(Math.random() * window.const.wizardsNames.length)] + '\r\n' + window.const.wizardsSurename[Math.floor(Math.random() * window.const.wizardsSurename.length)],
    coatColor: window.const.wizardsCoatColor[Math.floor(Math.random() * window.const.wizardsCoatColor.length)],
    eyesColor: window.const.WizardsEyesColor[Math.floor(Math.random() * window.const.WizardsEyesColor.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

function createRandomWizard() {
  return {
    name: window.const.wizardsNames[Math.floor(Math.random() * window.const.wizardsNames.length)] + '\r\n' + window.const.wizardsSurename[Math.floor(Math.random() * window.const.wizardsSurename.length)],
    coatColor: window.const.wizardsCoatColor[Math.floor(Math.random() * window.const.wizardsCoatColor.length)],
    eyesColor: window.const.WizardsEyesColor[Math.floor(Math.random() * window.const.WizardsEyesColor.length)]
  };
}

for (var i = 0; i < 3; i++) {
  var wizard = createRandomWizard();
  wizards.push(wizard);
}

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

