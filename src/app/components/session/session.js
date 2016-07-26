(function() {
  'use strict';

  angular
    .module('scarletCms')
    .service('Session', Session);

  /** @ngInject */
  function Session() {

    this.createSession = function (token, refreshToken, user, expires) {
      this.token = token;
      this.refreshToken = refreshToken;
      this.user = user;
      this.expires = expires;
    };

    this.destroy = function () {
      this.token = null;
      this.refreshToken = null;
      this.user = null;
      this.expires = null;
    };
  }
})();
