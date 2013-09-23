suite('GameState', function() {
  var subject, canvas, Direction;

  setup(function(done) {
    canvas = document.createElement('canvas');
    canvas.id = 'screen-canvas';
    canvas.height = 80;
    canvas.width = 80;
    document.body.appendChild(canvas);

    require(['direction', 'gamestate'], function(_Direction, GameState) {
      Direction = _Direction;
      subject = new GameState(canvas.height, canvas.width);
      done();
    });
  });

  teardown(function() {
    document.body.removeChild(canvas);
  });

  suite('#setDirection', function() {
    setup(function() {
      subject.setDirection(Direction.UP);
    });

    test('should set internal direction', function() {
      assert.strictEqual(subject.direction, Direction.UP);
    });
  });

  suite('#update', function() {
    var x, y;

    setup(function() {
      x = subject.head.x;
      y = subject.head.y;

      subject.setDirection(Direction.UP);
      subject.update();
    });

    test('should move the snake 1 in the correct direction', function() {
      assert.strictEqual(
          subject.head.y, (y - 1 + subject.height) % subject.height);
    });

    test('should make snake longer if hit food', function() {
      assert.fail();
    });

    test('should drop new food if hit food', function() {
      assert.fail();
    });

    test('should end game if hit snake', function() {
      assert.fail();
    });
  });
});
