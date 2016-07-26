(function () {
  'use strict';

  angular
    .module('scarletCms')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($state, $filter) {
    var vm = this;
    vm.tabs = [
      {
        heading: $filter('translate')('dashboard.CONTENT_TAB_HEADING'),
        route: "dashboard.content",
        active: $state.$current.name === 'dashboard.content'
      },
      {
        heading: $filter('translate')('dashboard.USERS_TAB_HEADING'),
        route: "dashboard.users",
        active: $state.$current.name === 'dashboard.users'
      },
      {
        heading: $filter('translate')('dashboard.TTS_TAB_HEADING'),
        route: "dashboard.tts",
        active: $state.$current.name === 'dashboard.tts'
      },
      {
        heading: $filter('translate')('dashboard.RENDER_TAB_HEADING'),
        route: "dashboard.render",
        active: $state.$current.name === 'dashboard.render'
      }
    ];
    
    vm.goToState = function (state) {
      $state.go(state);
    };
  }
})();
