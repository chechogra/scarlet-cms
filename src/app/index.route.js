(function() {
  'use strict';

  angular
    .module('scarletCms')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
