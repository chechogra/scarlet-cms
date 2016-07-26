(function () {
  'use strict';

  angular
    .module('scarletCms')
    .factory('AuthService', AuthService);

  /** @ngInject */
  function AuthService($http, $q, $filter, $localStorage, scarletConfig, EnvironmentConfig, Session, USER_ROLES) {
    var authService = {};

    authService.performLogin = function (credentials) {
      return $http.post(EnvironmentConfig.API_HOST + scarletConfig.API_PREFIX + '/auth/scarlet/tokens', credentials,
        {headers: {'Content-Type': 'application/json'}}).then(function (response) {
        var user = angular.fromJson(decodeURIComponent(escape(atob(response.data.access_token.split('.')[1]))));

        if (user.role === USER_ROLES.admin || user.role === USER_ROLES.editor) {
          var expires = new Date();
          expires.setSeconds(expires.getSeconds() + response.data.expires_in - 5);

          var authData = {
            token: response.data.access_token,
            refreshToken: response.data.refresh_token,
            user: user,
            expires: expires
          };

          $localStorage.authData = authData;
          Session.createSession(authData.token, authData.refreshToken, authData.user, authData.expires);
          return authData;
        }

        return $q.reject($filter('translate')('auth.NOT_AUTHORIZED_ROLE'));
      });
    };

    authService.isAuthenticated = function () {
      return !!Session.user;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
      authorizedRoles.indexOf(Session.user.role) !== -1);
    };

    return authService;
  }
})();
