/**
 * @fileoverview Main entry point for javascript app.
 */
requirejs.config({
  'baseUrl': 'js'
});
require(['snake'], function(Snake) {
  var snake = new Snake();
  snake.start();
});
