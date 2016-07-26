(function() {
  'use strict';

  angular
    .module('scarletCms')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, AUTH_EVENTS, AuthService) {
    var deregisterationStateChangeStart = $rootScope.$on('$stateChangeStart', function (event, next) {

      if (next.data && next.data.authorizedRoles && !AuthService.isAuthorized(next.data.authorizedRoles)) {
        event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
      
    });

    $rootScope.$on('$destroy', function () {
      deregisterationStateChangeStart();
    });

  }
})();
