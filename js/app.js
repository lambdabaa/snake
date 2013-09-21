/* global require, requirejs */
requirejs.config({
  'baseUrl': 'js'
});
require(['snake'], function(Snake) {
  'use strict';

  var snake = new Snake();
  snake.start();
});
