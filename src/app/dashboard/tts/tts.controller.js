(function() {
  'use strict';

  angular
    .module('scarletCms')
    .controller('TTSController', TTSController);

  /** @ngInject */
  function TTSController() {
    var vm = this;
    vm.message = "tts";
  }
})();
