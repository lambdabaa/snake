/**
 * @constructor
 */
function Snake() {
  var iframe = document.getElementById('screen');
  this.screen = iframe.contentWindow;
}

Snake.prototype = {
  /**
   * @type {Window}
   */
  screen: null,

  /**
   * Propagate message from our window down to iframe with canvas.
   * @param {Event} event something happened in UI.
   */
  onAction: function(event) {
    this.screen.postMessage(event.detail, window.location.origin);
  },

  /**
   * @param {Event} event message sent from worker.
   */
  onMessage: function(event) {
    // TODO(gaye)
    console.log(event.data);
  },

  start: function() {
    window.addEventListener('message', this.onMessage.bind(this), false);
    window.addEventListener('action', this.onAction.bind(this), false);
  }
};

var snake = new Snake();
snake.start();
