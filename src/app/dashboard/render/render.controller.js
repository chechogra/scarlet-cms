(function() {
  'use strict';

  angular
    .module('scarletCms')
    .controller('RenderController', RenderController);

  /** @ngInject */
  function RenderController() {
    var vm = this;
    vm.message = "render";
  }
})();
