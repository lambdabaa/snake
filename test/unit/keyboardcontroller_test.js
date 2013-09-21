suite('KeyboardController', function() {
  var subject;

  setup(function(done) {
    require(['keyboardcontroller'], function(KeyboardController) {
      subject = new KeyboardController();
      done();
    });
  });

  suite('#onkeydown', function() {
    var dispatchEvent, event;

    setup(function() {
      dispatchEvent = sinon.stub(window, 'dispatchEvent');
      event = new CustomEvent('keydown', { keyCode: 38 });
      subject.onKeydown(event);
    });

    teardown(function() {
      window.dispatchEvent.restore();
    });

    test('should emit an action event on the window', function() {
      sinon.assert.called(dispatchEvent);
    });
  });

  suite('#start', function() {
    var addEventListener;

    setup(function() {
      addEventListener = sinon.stub(document, 'addEventListener');
      subject.start();
    });

    teardown(function() {
      document.addEventListener.restore();
    });

    test('should start listening to the document for keydown', function() {
      sinon.assert.calledWith(addEventListener, 'keydown');
    });
  });
});
