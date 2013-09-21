define('snake', ['keyboardcontroller'], function(KeyboardController) {
  /**
   * @constructor
   */
  function Snake() {
    var iframe = document.getElementById('screen');
    this.iframeWindow = iframe.contentWindow;

    var keyboard = new KeyboardController();
    keyboard.start();
    this.keyboard = keyboard;
  }

  Snake.prototype = {
    /**
     * @type {Window}
     */
    iframeWindow: null,

    /**
     * @type {KeyboardController}
     */
    keyboard: null,

    /**
     * Propagate message from our window down to iframe with canvas.
     * @param {Event} event something happened in UI.
     */
    onAction: function(event) {
      this.iframeWindow.postMessage(event.detail, window.location.origin);
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

  return Snake;
});
