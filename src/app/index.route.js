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
        abstract: true,
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'vm',
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })
      .state('dashboard.content', {
        url: '/content',
        views: {
          "tabContent@dashboard": {
            templateUrl: 'app/dashboard/content/content.html',
            controller: 'ContentController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }

      })
      .state('dashboard.users', {
        url: '/users',
        views: {
          "tabContent@dashboard": {
            templateUrl: 'app/dashboard/users/users.html',
            controller: 'UsersController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })
      .state('dashboard.tts', {
        url: '/tts',
        views: {
          "tabContent@dashboard": {
            templateUrl: 'app/dashboard/tts/tts.html',
            controller: 'TTSController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.editor]
        }
      })
      .state('dashboard.render', {
        url: '/render',
        views: {
          "tabContent@dashboard": {
            templateUrl: 'app/dashboard/render/render.html',
            controller: 'RenderController',
            controllerAs: 'vm'
          }
        },
        data: {
          authorizedRoles: [USER_ROLES.editor]
        }
      });

    $urlRouterProvider.otherwise('/login');
  }

})();
