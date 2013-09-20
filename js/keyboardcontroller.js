/**
 * @constructor
 */
function KeyboardController() {
}

KeyboardController.prototype = {
  onKeydown: function(event) {
    var actionDetail;
    switch (event.keyCode) {
      case 32:
        actionDetail = 'toggle-pause';
        break;
      case 37:
        actionDetail = 'left';
        break;
      case 38:
        actionDetail = 'up';
        break;
      case 39:
        actionDetail = 'right';
        break;
      case 40:
        actionDetail = 'down';
        break;
      default:
        break;
    }

    var action = new CustomEvent('action', { 'detail': actionDetail });
    window.dispatchEvent(action);
  },

  start: function() {
    document.addEventListener('keydown', this.onKeydown.bind(this), false);
  }
};

var controller = new KeyboardController();
controller.start();
