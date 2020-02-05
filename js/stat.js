'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 140;
var CLOUD_Y = 120;
var GAP = 50;
var FONT_GAP = 20;
var TEXT_HEIGHT = 110;
var BAR_WIDTH = 40;
var barHeight = CLOUD_WIDTH - GAP - TEXT_HEIGHT - GAP;

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
  } else {
    return 'hsl(218, 100%, ' + randomLightness + ')';
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 100, 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 90, 0, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + (GAP + BAR_WIDTH) * i, CLOUD_Y + FONT_GAP + TEXT_HEIGHT);
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + GAP) * i, CLOUD_Y + TEXT_HEIGHT, BAR_WIDTH, CLOUD_Y - (barHeight * times[i]) / maxTime);
  }

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!,', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
};
