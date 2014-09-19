/*global document, window, angular*/
(function() {
    window.chrometwo_require([
        'angular128',
        'jquery'
    ], function(angular, jq) {
        'use strict';

        if (!window.LABS_DEBUG) {
            window.deps = ['app/vendor.js?bust=0.0.1', 'app/app.js?bust=0.0.1'];
        }

        window.require.config({
            baseUrl: '/labs/rhlabsangular'
        });

        window.chrometwo_require(window.deps, function() {
            angular.bootstrap(document, ['rhlabsangularApp']);
            jq('#rhlabsangular').fadeIn();
        });
    });
})();
