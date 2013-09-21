/* global define */
define('snakeworker', [
  'actions',
  'gamestate',
  'screen'
], function(Actions, GameState, Screen) {
  'use strict';

  /**
   * @constructor
   */
  function SnakeWorker() {
    var canvas = document.getElementById('screen-canvas');
    var state = new GameState(canvas.height, canvas.width);
    var screen = new Screen();
    screen.state = state;
    this.canvas = canvas;
    this.screen = screen;
    this.state = state;
  }

  /**
   * @type {number}
   */
  SnakeWorker.FREQUENCY = 1000.0 / 20.0;

  SnakeWorker.prototype = {
    /**
     * @type {HTMLCanvasElement}
     */
    canvas: null,

    /**
     * @type {Screen}
     */
    screen: null,

    /**
     * @type {GameState}
     */
    state: null,

    move: function() {
      this.state.update();
      this.screen.refresh();
      setTimeout(this.move.bind(this), SnakeWorker.FREQUENCY);
    },

    /**
     * @param {MessageEvent} event message sent to worker.
     */
    onMessage: function(event) {
      switch (event.data) {
        case Actions.DOWN:
        case Actions.LEFT:
        case Actions.RIGHT:
        case Actions.UP:
          var direction = event.data;
          this.state.setDirection(direction);
          break;
        case Actions.QUIT:
          break;
        case Actions.TOGGLE_PAUSE:
          break;
        default:
          break;
      }
    },

    start: function() {
      this.screen.decorate(this.canvas);

      // Listen for actions from the parent window.
      window.addEventListener('message', this.onMessage.bind(this), false);

      // Start the game.
      this.move();
    }
  };

  return SnakeWorker;
});