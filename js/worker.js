/**
 * @fileoverview Main entry point for javascript that runs in the canvas iframe.
 */
requirejs.config({
  'baseUrl': 'js'
});
require(['snakeworker'], function(SnakeWorker) {
  var worker = new SnakeWorker();
  worker.start();
});
