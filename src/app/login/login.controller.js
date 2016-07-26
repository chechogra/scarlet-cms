(function() {
  'use strict';

  angular
    .module('scarletCms')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope, $log, AUTH_EVENTS, AuthService) {
    var vm = this;
    vm.credentials = {};
    vm.credentials.email = null;
    vm.credentials.password = null;

    vm.loginSubmit = function () {
      AuthService.performLogin(vm.credentials).then(function successCallback(response) {
        vm.errorFeedback = '';
        $log.debug(response);
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      }, function errorCallback(response) {
        if(response && angular.isObject(response)){
          vm.errorFeedback = response.data.message;
        }else if(response && angular.isString(response)){
          vm.errorFeedback = response;
        }
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  }
})();
