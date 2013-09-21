/* global define */
define('screen', function() {
  'use strict';

  /**
   * @constructor
   */
  function Screen() {
  }

  /**
   * Size of a square.
   * @type {number}
   */
  Screen.SQUARE_SIZE = 8;

  Screen.prototype = {
    /**
     * @type {Element}
     */
    element: null,

    /**
     * @type {GameState}
     */
    state: null,

    get height() {
      return this.element.height;
    },

    get width() {
      return this.element.width;
    },

    /**
     * @param {Element} el element to decorate.
     */
    decorate: function(el) {
      var context = el.getContext('2d');
      context.fillStyle = 'rgb(0, 0, 0)';
      context.fillRect(0, 0, el.width, el.height);
      this.element = el;
    },

    /**
     * Incremental game board load.
     */
    refresh: function() {
      var canvas = this.element;
      var context = canvas.getContext('2d');

      // Clear the board.
      context.fillStyle = 'rgb(0, 0, 0)';
      context.fillRect(0, 0, this.width, this.height);

      var head = this.state.head;
      context.fillStyle = 'rgb(255, 255, 255)';
      context.fillRect(head.x * Screen.SQUARE_SIZE, head.y * Screen.SQUARE_SIZE,
          Screen.SQUARE_SIZE, Screen.SQUARE_SIZE);
    }
  };

  return Screen;
});
