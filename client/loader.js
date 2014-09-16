/*global document, window, angular*/
(function() {
    window.chrometwo_require([
        'angular128',
        'jquery'
    ], function(angular, jq) {
        'use strict';

        if (window.LABS_DEBUG) {
            var length = window.deps.length;
            for (var i = 0; i < length; i++) {
                window.deps[i] = window.deps[i]
                    .replace('.min', '')
                    .replace('.js', '');
            }
        } else {
            window.deps = ['app/vendor', 'app/app'];
        }

        window.require.config({
            baseUrl: '/labs/rhlabsangular'
        });

        window.chrometwo_require(window.deps, function() {
            angular.bootstrap(document, ['rhlabsangular']);
            jq('#rhlabsangular').fadeIn();
        });
    });
})();
