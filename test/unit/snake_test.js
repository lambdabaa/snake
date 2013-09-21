suite('Snake', function() {
  var subject, event, iframe;

  setup(function(done) {
    // Make a fake iframe.
    iframe = document.createElement('iframe');
    iframe.id = 'screen';
    document.body.appendChild(iframe);

    event = new CustomEvent('action', { detail: 'up' });

    require(['snake'], function(Snake) {
      subject = new Snake();
      done();
    });
  });

  teardown(function() {
    document.body.removeChild(iframe);
  });

  suite('#onAction', function() {
    var postMessage;

    setup(function() {
      postMessage = sinon.stub(iframe.contentWindow, 'postMessage');
      subject.onAction(event);
    });

    teardown(function() {
      iframe.contentWindow.postMessage.restore();
    });

    test('should relay action events to the canvas iframe', function() {
      sinon.assert.calledWith(
          postMessage, event.detail, window.location.origin);
    });
  });

  suite('#start', function() {
    var addEventListener, start;

    setup(function() {
      addEventListener = sinon.stub(window, 'addEventListener');
      start = sinon.stub(subject.keyboard, 'start');
      subject.start();
    });

    teardown(function() {
      window.addEventListener.restore();
      subject.keyboard.start.restore();
    });

    test('should start listening for actions on the window', function() {
      sinon.assert.calledWith(addEventListener, 'action');
    });

    test('should start the keyboard', function() {
      sinon.assert.called(start);
    });
  });
});
