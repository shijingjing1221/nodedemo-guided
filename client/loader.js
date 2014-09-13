/*global document, window, angular*/
(function() {
    if (window.LABS_DEBUG) {
        return;
    }

    window.chrometwo_require([
        'angular128',
        'jquery'
    ], function(angular, jq) {
        'use strict';

        window.require.config({
            baseUrl: '/labs/rhlabsangular/app',
            paths: {
                'vendor': 'vendor',
                'app': 'app'
            }
        });

        window.chrometwo_require(['vendor', 'app'], function() {
            angular.bootstrap(document, ['rhlabsangular']);
            jq('#rhlabsangular').fadeIn();
        });
    });
})();
