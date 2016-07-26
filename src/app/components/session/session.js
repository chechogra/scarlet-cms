(function() {
  'use strict';

  angular
    .module('scarletCms')
    .service('Session', Session);

  /** @ngInject */
  function Session($localStorage) {

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

    this.restoreSessionIfEmpty = function(){
      if(!this.user){
        var authData = $localStorage.authData;
        if(authData){
          this.token = authData.token;
          this.refreshToken = authData.refreshToken;
          this.user = authData.user;
          this.expires = authData.expires;
        }
      }

    };
  }
})();
