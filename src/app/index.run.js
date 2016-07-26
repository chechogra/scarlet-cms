(function() {
  'use strict';

  angular
    .module('scarletCms')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope, $state, AUTH_EVENTS, AuthService, Session) {
    var deregisterationStateChangeStart = $rootScope.$on('$stateChangeStart', function (event, next) {

      Session.restoreSessionIfEmpty();

      if (next.data && next.data.authorizedRoles && !AuthService.isAuthorized(next.data.authorizedRoles)) {
        event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
          $state.go('login', { messageCode: 'global.NOT_AUTHORIZED'});
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          $state.go('login');
        }
      }

    });

    $rootScope.$on('$destroy', function () {
      deregisterationStateChangeStart();
    });

  }
})();
