'use strict';

angular.module('nodedemoApp').config(function ($stateProvider) {
    $stateProvider.state('main.version', {
        url: '',
        templateUrl: 'app/version/version.html',
        controller: 'versionCtrl'
    });
});
