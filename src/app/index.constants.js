'use strict';
(function () {
  'use strict';

  angular
    .module('scarletCms')
    .constant('AUTH_EVENTS', {
      loginSuccess: 'security-login-success',
      loginFailed: 'security-login-failed',
      logoutSuccess: 'security-logout-success',
      sessionTimeout: 'security-session-timeout',
      notAuthenticated: 'security-not-authenticated',
      notAuthorized: 'security-not-authorized'
    })
    .constant('USER_ROLES', {
      admin: 'Admin',
      editor: 'Editor'
    })
    .constant('LOCALES', {
      'locales': {
        'en': 'English',
        'es': 'Español'
      },
      'localesMap': {
        'en-AU': 'en',
        'en-BZ': 'en',
        'en-CA': 'en',
        'en-CB': 'en',
        'en-GB': 'en',
        'en-IE': 'en',
        'en-JM': 'en',
        'en-NZ': 'en',
        'en-PH': 'en',
        'en-SG': 'en',
        'en-TT': 'en',
        'en-UK': 'en',
        'en-US': 'en',
        'en-ZA': 'en',
        'en-ZW': 'en',
        'en_AU': 'en',
        'en_BZ': 'en',
        'en_CA': 'en',
        'en_CB': 'en',
        'en_GB': 'en',
        'en_IE': 'en',
        'en_JM': 'en',
        'en_NZ': 'en',
        'en_PH': 'en',
        'en_SG': 'en',
        'en_TT': 'en',
        'en_UK': 'en',
        'en_US': 'en',
        'en_ZA': 'en',
        'en_ZW': 'en',
        'es-AR': 'es',
        'es-BO': 'es',
        'es-CL': 'es',
        'es-CO': 'es',
        'es-CR': 'es',
        'es-DO': 'es',
        'es-EC': 'es',
        'es-ES': 'es',
        'es-GT': 'es',
        'es-HN': 'es',
        'es-MX': 'es',
        'es-NI': 'es',
        'es-PA': 'es',
        'es-PE': 'es',
        'es-PR': 'es',
        'es-PY': 'es',
        'es-SV': 'es',
        'es-UY': 'es',
        'es-VE': 'es',
        'es-145': 'es',
        'es_AR': 'es',
        'es_BO': 'es',
        'es_CL': 'es',
        'es_CO': 'es',
        'es_CR': 'es',
        'es_DO': 'es',
        'es_EC': 'es',
        'es_ES': 'es',
        'es_GT': 'es',
        'es_HN': 'es',
        'es_MX': 'es',
        'es_NI': 'es',
        'es_PA': 'es',
        'es_PE': 'es',
        'es_PR': 'es',
        'es_PY': 'es',
        'es_SV': 'es',
        'es_UY': 'es',
        'es_VE': 'es',
        'es_145': 'es'
      },
      'preferredLocale': 'en'
    })
    .constant('scarletConfig', {
      'API_PREFIX': '/apiv2'
    });

})();
