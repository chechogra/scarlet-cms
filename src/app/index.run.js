(function() {
  'use strict';

  angular
    .module('scarletCms')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
