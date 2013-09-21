/* global define */
define('snake', ['keyboardcontroller'], function(KeyboardController) {
  'use strict';

  /**
   * @constructor
   */
  function Snake() {
    this.iframeWindow = document.getElementById(Snake.IFRAME_ID).contentWindow;
    this.keyboard = new KeyboardController();
  }

  /**
   * DOM id for the iframe responsible for the canvas.
   * @type {string}
   */
  Snake.IFRAME_ID = 'screen';

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

    start: function() {
      window.addEventListener('action', this.onAction.bind(this), false);
      this.keyboard.start();
    }
  };

  return Snake;
});
