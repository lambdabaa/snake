suite('GameState', function() {
  var subject, canvas;

  setup(function(done) {
    canvas = document.createElement('canvas');
    canvas.id = 'screen-canvas';
    document.body.appendChild(canvas);

    require(['gamestate'], function(GameState) {
      subject = new GameState(canvas.height, canvas.width);
      done();
    });
  });

  teardown(function() {
    document.body.removeChild(canvas);
  });

  suite('#setDirection', function() {
    test.skip('should set internal direction', function() {
    });
  });

  suite('#update', function() {
    test.skip('should move the snake', function() {
    });

    test.skip('should make snake longer if hit food', function() {
    });

    test.skip('should drop new food if hit food', function() {
    });

    test.skip('should end game if hit snake', function() {
    });
  });
});
