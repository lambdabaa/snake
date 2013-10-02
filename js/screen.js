/* global define */
define('screen', ['entity'], function(Entity) {
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

    refresh: function() {
      console.log('[Screen] refresh');
      var canvas = this.element;
      var context = canvas.getContext('2d');

      // Clear the board.
      context.fillStyle = 'rgb(0, 0, 0)';
      context.fillRect(0, 0, this.width, this.height);

      for (var row = 0; row < this.state.height; row += 1) {
        for (var col = 0; col < this.state.width; col += 1) {
          var entity = this.state.board[row][col];
          var fillStyle;
          switch (entity) {
            case Entity.EMPTY:
              fillStyle = null;
              break;
            case Entity.FOOD:
              fillStyle = 'rgb(0, 0, 255)';
              break;
            case Entity.SNAKE:
              fillStyle = 'rgb(255, 255, 255)';
              break;
          }

          if (!fillStyle) {
            continue;
          }

          context.fillStyle = fillStyle;
          context.fillRect(col * Screen.SQUARE_SIZE, row * Screen.SQUARE_SIZE,
            Screen.SQUARE_SIZE, Screen.SQUARE_SIZE);
        }
      }
    }
  };

  return Screen;
});
