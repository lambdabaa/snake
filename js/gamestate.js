/* global define */
define('gamestate', [
  'direction',
  'entity',
  'screen'
], function(Direction, Entity, Screen) {
  'use strict';

  /**
   * @constructor
   * @param {number} height board height.
   * @param {number} width board width.
   */
  function GameState(height, width) {
    this.height = (height * 1.0) / Screen.SQUARE_SIZE;
    this.width = (width * 1.0) / Screen.SQUARE_SIZE;

    this.history = [];
    this.score = 0;

    this.board = GameState.zero(height, width);
    this.board[0][0] = Entity.SNAKE;
    this.head = { x: 0, y: 0 };
    this.direction = Direction.RIGHT;

    this.gameover = false;

    this.dropFood();
  }

  /**
   * Zero the board.
   *
   * @param {number} height board height.
   * @param {number} width board width.
   * @return {Array.<Array.<Entity>>} a zeroed game board.
   */
  GameState.zero = function(height, width) {
    var board = [];
    for (var row = 0; row < height; row += 1) {
      var next = [];
      for (var col = 0; col < width; col += 1) {
        next[col] = Entity.EMPTY;
      }

      board[row] = next;
    }

    return board;
  };

  /**
   * @param {Direction} direction some direction.
   * @return {Direction} opposite direction.
   */
  GameState.opposite = function(direction) {
    var result;
    switch (direction) {
      case Direction.DOWN:
        result = Direction.UP;
        break;
      case Direction.LEFT:
        result = Direction.RIGHT;
        break;
      case Direction.RIGHT:
        result = Direction.LEFT;
        break;
      case Direction.UP:
        result = Direction.DOWN;
        break;
    }

    return result;
  };

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
     * Location of food.
     */
    food: null,

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

    /**
     * @type {boolean}
     */
    gameover: null,

    setDirection: function(direction) {
      if (GameState.opposite(direction) === this.direction) {
        // Don't allow the snake to do 180s.
        return;
      }

      console.log('[GameState] set direction ' + direction.toString());
      this.direction = direction;
    },

    dropFood: function() {
      var row, col;
      do {
        col = Math.floor(Math.random() * this.width);
        row = Math.floor(Math.random() * this.height);
      } while (this.board[row][col] !== Entity.EMPTY);

      this.food = { y: row, x: col };
      this.board[row][col] = Entity.FOOD;
    },

    /**
     * Play one move.
     */
    update: function() {
      console.log('[GameState] update');
      this.history.push(this.direction);
      this.move(this.head, this.direction, false);

      switch (this.board[this.head.y][this.head.x]) {
        case Entity.EMPTY:
          var point = { x: this.head.x, y: this.head.y };
          for (var i = 0; i < this.score + 1; i += 1) {
            console.log(point);
            this.board[point.y][point.x] = Entity.SNAKE;
            var direction = this.history[this.history.length - i - 1];
            this.move(point, direction, true);
          }

          this.board[point.y][point.x] = Entity.EMPTY;
          break;
        case Entity.FOOD:
          this.board[this.head.y][this.head.x] = Entity.SNAKE;
          this.score += 1;
          this.dropFood();
          break;
        case Entity.SNAKE:
          this.gameover = true;
          break;
      }
    },

    /**
     * Move a point in a direction.
     *
     * @param {Object} point to move.
     * @param {Direction} direction direction to move point in.
     * @param {boolean} opposite whether or not to flip the direction.
     */
    move: function(point, direction, opposite) {
      if (opposite) {
        direction = GameState.opposite(direction);
      }

      switch (direction) {
        case Direction.DOWN:
          point.y = (point.y + 1) % this.height;
          break;
        case Direction.LEFT:
          point.x = (point.x - 1 + this.width) % this.width;
          break;
        case Direction.RIGHT:
          point.x = (point.x + 1) % this.width;
          break;
        case Direction.UP:
          point.y = (point.y - 1 + this.height) % this.height;
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

  return GameState;
});
