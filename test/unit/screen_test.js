suite('Screen', function() {
  var subject, canvas, state;

  setup(function(done) {
    canvas = document.createElement('canvas');
    canvas.id = 'screen-canvas';
    document.body.appendChild(canvas);

    require(['gamestate', 'screen'], function(GameState, Screen) {
      state = new GameState(canvas.height, canvas.width);
      screen = new Screen();
      done();
    });
  });

  suite('#decorate', function() {
    test.skip('should set internal element', function() {
    });

    test.skip('should paint canvas', function() {
    });
  });

  suite('#refresh', function() {
    test.skip('should move the snake', function() {
    });

    test.skip('should replace food with snake if hit food', function() {
    });

    test.skip('should paint new food if hit food', function() {
    });
  });
});
