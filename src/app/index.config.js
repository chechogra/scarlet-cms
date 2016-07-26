(function () {
  'use strict';

  angular
    .module('scarletCms')
    .config(config);

  /** @ngInject */
  function config($translateProvider, $logProvider, $httpProvider, LOCALES, tmhDynamicLocaleProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
    //Angular translate configuration
    $translateProvider.useMissingTranslationHandlerLog();
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'app/lang/',
        suffix: '.json'
      })
      .registerAvailableLanguageKeys(['en', 'es'], LOCALES.localesMap)
      //.determinePreferredLanguage()
      .preferredLanguage(LOCALES.preferredLocale)
      .fallbackLanguage(LOCALES.preferredLocale);
    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy('escape');
    tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_{{locale}}.js');

    $httpProvider.interceptors.push(['$injector', function ($injector) {
        return $injector.get('AuthInterceptor');
      }
    ]);
  }

})();
