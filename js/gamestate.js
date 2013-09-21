define('gamestate', [
  'direction',
  'entity',
  'screen'
], function(Direction, Entity, Screen) {
  /**
   * @constructor
   * @param {number} height board height.
   * @param {number} width board width.
   */
  function GameState(height, width) {
    this.height = (height * 1.0) / Screen.SQUARE_SIZE;
    this.width = (width * 1.0) / Screen.SQUARE_SIZE;
    this.head = { x: 0, y: 0 };
    this.history = [];
    this.score = 0;
    this.board = zero(height, width);
    this.direction = Direction.RIGHT;
  }


  GameState.prototype = {
    /**
     * Current game board.
     * @type {Array.<Array.<Entity>>}
     */
    board: null,

    /**
     * Direction we're going in.
     * @type {Direction}
     */
    direction: null,

    /**
     * Front of the snake.
     * @type {Object}
     */
    head: null,

    /**
     * @type {number}
     */
    height: null,

    /**
     * @type {Array.<Direction>}
     */
    history: null,

    /**
     * @type {number}
     */
    score: null,

    /**
     * @type {number}
     */
    width: null,

    setDirection: function(direction) {
      this.direction = direction;
    },

    /**
     * Play one move.
     */
    update: function() {
      switch (this.direction) {
        case Direction.DOWN:
          this.head.y = (this.head.y + 1) % this.height;
          break;
        case Direction.LEFT:
          this.head.x = (this.head.x - 1 + this.width) % this.width;
          break;
        case Direction.RIGHT:
          this.head.x = (this.head.x + 1) % this.width;
          break;
        case Direction.UP:
          this.head.y = (this.head.y - 1 + this.height) % this.height;
          break;
      }
    },

    /**
     * Load the game state from persistent storage.
     */
    load: function() {
      // TODO(gaye)
    },

    /**
     * Save the game state to persistent storage.
     */
    save: function() {
      // TODO(gaye)
    },

    /**
     * @return {Object} representation of game state.
     */
    serialize: function() {
      // TODO(gaye)
    }
  };

  /**
   * @param {number} height board height.
   * @param {number} width board width.
   * @return {Array.<Array.<Entity>>} a zeroed game board.
   * @private
   */
  function zero(height, width) {
    var board = [];
    for (var row = 0; row < height; row++) {
      var next = [];
      for (var col = 0; col < width; col++) {
        next[col] = Entity.EMPTY;
      }

      board[row] = next;
    }

    return board;
  }

  return GameState;
});
