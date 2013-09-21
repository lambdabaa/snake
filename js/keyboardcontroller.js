/* global define */
define('keyboardcontroller', ['actions'], function(Actions) {
  'use strict';

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
          actionDetail = Actions.TOGGLE_PAUSE;
          break;
        case 37:
          actionDetail = Actions.LEFT;
          break;
        case 38:
          actionDetail = Actions.UP;
          break;
        case 39:
          actionDetail = Actions.RIGHT;
          break;
        case 40:
          actionDetail = Actions.DOWN;
          break;
        default:
          break;
      }

      var action = new CustomEvent('action', { 'detail': actionDetail });
      window.dispatchEvent(action);
    },

    /**
     * Begin to listen to the document for keydown events.
     */
    start: function() {
      document.addEventListener('keydown', this.onKeydown.bind(this), false);
    }
  };

  return KeyboardController;
});
