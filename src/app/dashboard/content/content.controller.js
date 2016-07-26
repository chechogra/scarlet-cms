(function() {
  'use strict';

  angular
    .module('scarletCms')
    .controller('ContentController', ContentController);

  /** @ngInject */
  function ContentController() {
    var vm = this;
    vm.message = "content";
  }
})();
