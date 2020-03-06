'use strict';

(function () {
  var dialogHandler = document.querySelector('.upload');
  var setup = document.querySelector('.setup');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var MouseMoveHendler = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var MouseUpHendler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', MouseMoveHendler);
      document.removeEventListener('mouseup', MouseUpHendler);

      if (dragged) {
        var clickPreventDefaultHendler = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', clickPreventDefaultHendler);
        };
        dialogHandler.addEventListener('click', clickPreventDefaultHendler);
      }
    };

    document.addEventListener('mousemove', MouseMoveHendler);
    document.addEventListener('mouseup', MouseUpHendler);
  });
})();
