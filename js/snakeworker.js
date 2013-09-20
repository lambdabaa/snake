/**
 * @constructor
 */
function SnakeWorker() {
  this.canvas = document.getElementById('screen-canvas');
}

SnakeWorker.prototype = {
  /**
   * @type {HTMLCanvasElement}
   */
  canvas: null,

  /**
   * @param {MessageEvent} event message sent to worker.
   */
  onMessage: function(event) {
    console.log('[SnakeWorker] ' + event.data);
    switch (event.data) {
      case 'down':
        break;
      case 'left':
        break;
      case 'quit':
        break;
      case 'right':
        break;
      case 'toggle-pause':
        break;
      case 'up':
        break;
      default:
        break;
    }
  },

  start: function() {
    // Paint the canvas black.
    var context = this.canvas.getContext('2d');
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Listen for actions from the parent window.
    window.addEventListener('message', this.onMessage.bind(this), false);
  }
};

var worker = new SnakeWorker();
worker.start();
