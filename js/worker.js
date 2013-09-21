/* global require, requirejs */
requirejs.config({
  'baseUrl': 'js'
});
require(['snakeworker'], function(SnakeWorker) {
  'use strict';

  var worker = new SnakeWorker();
  worker.start();
});
