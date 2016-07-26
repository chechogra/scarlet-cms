(function() {
  'use strict';

  angular
    .module('scarletCms')
    .factory('AuthFactory', AuthFactory);

  /** @ngInject */
  function AuthFactory($http, scarletConfig, EnvironmentConfig) {
    var authFactory = {};

    authFactory.performAuth = function (credentials) {
      return $http.post(EnvironmentConfig.API_HOST + scarletConfig.API_PREFIX + '/auth/scarlet/tokens', credentials,
        {headers: {'Content-Type': 'application/json'}});
    };

    return authFactory;
  }
})();
