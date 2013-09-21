suite('SnakeWorker', function() {
  var subject, canvas;

  setup(function(done) {
    canvas = document.createElement('canvas');
    canvas.id = 'screen-canvas';
    document.body.appendChild(canvas);

    require(['snakeworker'], function(SnakeWorker) {
      subject = new SnakeWorker();
      done();
    });
  });

  teardown(function() {
    document.body.removeChild(canvas);
  });

  suite('#move', function() {
    test.skip('should update the game state', function() {
    });

    test.skip('should refresh the ui', function() {
    });

    test.skip('should schedule the next move', function() {
    });
  });

  suite('#onMessage', function() {
    test.skip('should change direction on command', function() {
    });

    test.skip('should pause active on toggle-pause command', function() {
    });

    test.skip('should resume inactive on toggle-pause command', function() {
    });

    test.skip('should stop game on quit command', function() {
    });
  });

  suite('#start', function() {
    test.skip('should paint the canvas', function() {
    });

    test.skip('should listen to the window for messages', function() {
    });

    test.skip('should make the first move', function() {
    });
  });
});
