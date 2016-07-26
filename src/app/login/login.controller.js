(function() {
  'use strict';

  angular
    .module('scarletCms')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController(AuthFactory, $log) {
    var vm = this;
    vm.credentials = {};
    vm.credentials.email = null;
    vm.credentials.password = null;

    vm.loginSubmit = function () {
      AuthFactory.performAuth(vm.credentials).then(function successCallback(response) {
        $log.info('success:' + response);
      }, function errorCallback(response) {
        $log.info('error:' + response);
      });
    };
  }
})();
