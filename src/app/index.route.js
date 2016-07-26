(function() {
  'use strict';

  angular
    .module('scarletCms')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, USER_ROLES) {
    $stateProvider
      .state('login', {
        url: '/login',
        params: {
          messageCode: null
        },
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('dashboard', {
        url: '/dashboard',
        //abstract: true,
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm',
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
