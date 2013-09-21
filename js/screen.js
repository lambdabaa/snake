define('screen', function() {
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

  Screen.Selector = Object.freeze({
    'canvas': '#screen-canvas'
  });

  Screen.prototype = {
    /**
     * @type {GameState}
     */
    state: null,

    get canvas() {
      return document.querySelector(Screen.Selector['canvas']);
    },

    get height() {
      return this.canvas.height;
    },

    get width() {
      return this.canvas.width;
    },

    /**
     * Initial game board load.
     */
    render: function() {
      var canvas = this.canvas;
      var context = canvas.getContext('2d');
      context.fillStyle = 'rgb(0, 0, 0)';
      context.fillRect(0, 0, this.width, this.height);
    },

    /**
     * Incremental game board load.
     */
    refresh: function() {
      var canvas = this.canvas;
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
