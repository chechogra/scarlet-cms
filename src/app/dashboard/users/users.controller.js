(function() {
  'use strict';

  angular
    .module('scarletCms')
    .controller('UsersController', UsersController);

  /** @ngInject */
  function UsersController() {
    var vm = this;
    vm.message = "users";
  }
})();
