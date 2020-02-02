'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 100, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 90, 0, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', 140, 250);
  ctx.fillRect(140, 120, 40, 110);
  ctx.fillText('1110', 140, 110);

  ctx.fillStyle = 'hsl(218, 100%, 50%)';
  ctx.fillText('Иван', 230, 250);
  ctx.fillRect(230, 130, 40, 100);
  ctx.fillText('1100', 230, 120);

  ctx.fillStyle = 'hsl(218, 100%, 31%)';
  ctx.fillText('Юлия', 320, 250);
  ctx.fillRect(320, 180, 40, 50);
  ctx.fillText('500', 320, 170);

  ctx.fillStyle = 'hsl(218, 100%, 18%)';
  ctx.fillText('Кекс', 410, 250);
  ctx.fillRect(410, 80, 40, 150);
  ctx.fillText('1150', 410, 70);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!,', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};
