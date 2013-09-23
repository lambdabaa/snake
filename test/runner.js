var assert;

requirejs.config({
  baseUrl: '/../js/',
  paths: {
    'chai': '../node_modules/chai/chai',
    'mocha': '../test/mocha',
    'sinon': '../node_modules/sinon/pkg/sinon'
  }
});

require(['chai', 'mocha', 'sinon'], function(chai) {
  assert = chai.assert;
  mocha.setup('tdd');
  require([
    '../test/unit/gamestate_test',
    '../test/unit/keyboardcontroller_test',
    '../test/unit/screen_test',
    '../test/unit/snake_test',
    '../test/unit/snakeworker_test'
  ], function() {
    mocha.run();
  });
});
