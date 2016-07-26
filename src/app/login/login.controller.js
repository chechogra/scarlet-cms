(function() {
  'use strict';

  angular
    .module('scarletCms')
    .controller('LoginController', LoginController);

  /** @ngInject */
  function LoginController($rootScope, $log, $state, $stateParams, $filter, AUTH_EVENTS, AuthService) {
    var vm = this;
    vm.credentials = {};
    vm.credentials.email = null;
    vm.credentials.password = null;

    if($stateParams.messageCode){
      vm.errorFeedback = $filter('translate')($stateParams.messageCode);
    }

    vm.loginSubmit = function () {
      AuthService.performLogin(vm.credentials).then(function successCallback(response) {
        vm.errorFeedback = '';
        $log.debug(response);
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $state.go('dashboard');
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
