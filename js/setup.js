'use strict';

var userDialog = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIRE_BALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + '\r\n' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)]
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
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + '\r\n' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)]
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
  if (evt.key === ENTER_KEY) {
    popup.classList.remove('hidden');
  }
});

closePopupButton.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    popup.classList.add('hidden');
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
    popup.classList.add('hidden');
  }
});

submitPopupButton.addEventListener('submit', function () {

});

// var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLOR.length)];
});

setupFireballWrap.addEventListener('click', function () {
  setupFireballWrap.style.background = FIRE_BALL_COLOR[Math.floor(Math.random() * FIRE_BALL_COLOR.length)];
});
