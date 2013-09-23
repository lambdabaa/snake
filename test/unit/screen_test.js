suite('Screen', function() {
  var subject, canvas, state;

  setup(function(done) {
    canvas = document.createElement('canvas');
    canvas.id = 'screen-canvas';
    canvas.height = 80;
    canvas.width = 80;
    document.body.appendChild(canvas);

    require(['gamestate', 'screen'], function(GameState, Screen) {
      state = new GameState(canvas.height, canvas.width);
      subject = new Screen();
      subject.state = state;
      done();
    });
  });

  teardown(function() {
    document.body.removeChild(canvas);
  });

  suite('#decorate', function() {
    setup(function() {
      subject.decorate(canvas);
    });

    test('should set internal element', function() {
      assert.strictEqual(subject.element, canvas);
    });

    test('should paint canvas', function() {
      var context = canvas.getContext('2d');
      var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      var data = imageData.data;

      // Check the first pixel.
      assert.strictEqual(data[0], 0);
      assert.strictEqual(data[1], 0);
      assert.strictEqual(data[2], 0);
      assert.strictEqual(data[3], 255);
    });
  });

  suite('#refresh', function() {
    test('should move the snake', function() {
      assert.fail();
    });

    test('should replace food with snake if hit food', function() {
      assert.fail();
    });

    test('should paint new food if hit food', function() {
      assert.fail();
    });
  });
});
