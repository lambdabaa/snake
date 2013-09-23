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
    test('should update the game state', function() {
      assert.fail();
    });

    test('should refresh the ui', function() {
      assert.fail();
    });

    test('should schedule the next move', function() {
      assert.fail();
    });
  });

  suite('#onMessage', function() {
    test('should change direction on command', function() {
      assert.fail();
    });

    test('should pause active on toggle-pause command', function() {
      assert.fail();
    });

    test('should resume inactive on toggle-pause command', function() {
      assert.fail();
    });

    test('should stop game on quit command', function() {
      assert.fail();
    });
  });

  suite('#start', function() {
    test('should paint the canvas', function() {
      assert.fail();
    });

    test('should listen to the window for messages', function() {
      assert.fail();
    });

    test('should make the first move', function() {
      assert.fail();
    });
  });
});
