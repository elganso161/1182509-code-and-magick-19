'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 140;
var CLOUD_Y = 250;
var GAP = 50;
var FONT_GAP = 50;
var TEXT_HEIGHT = 110;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var generateFullBarColor = function (namePlayer) {
  var randomLightness = Math.random().toFixed(2);
  if (namePlayer === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  }
  return 'hsl(218, 100%, ' + randomLightness + ')';
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 100, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 90, 0, '#fff');

  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText('Вы', CLOUD_X, CLOUD_Y);
  ctx.fillRect(CLOUD_X, 120, BAR_WIDTH, TEXT_HEIGHT);
  ctx.fillText('1110', CLOUD_X, TEXT_HEIGHT);

  ctx.fillStyle = generateFullBarColor;
  ctx.fillText('Иван', 230, CLOUD_Y);
  ctx.fillRect(CLOUD_X + BAR_WIDTH + GAP, 130, BAR_WIDTH, 100);
  ctx.fillText('1100', 230, 120);

  ctx.fillStyle = generateFullBarColor;
  ctx.fillText('Юлия', 320, CLOUD_Y);
  ctx.fillRect(270 + GAP, 180, BAR_WIDTH, 50);
  ctx.fillText('500', 320, 170);

  ctx.fillStyle = generateFullBarColor;
  ctx.fillText('Кекс', 410, CLOUD_Y);
  ctx.fillRect(360 + GAP, 80, BAR_WIDTH, 150);
  ctx.fillText('1150', 410, 70);

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!,', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};
