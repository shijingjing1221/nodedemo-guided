'use strict';

angular.module('nodedemoApp').config(function ($stateProvider) {
    $stateProvider.state('main.step1', {
        templateUrl: 'app/step1/step1.html',
        controller: 'step1Ctrl'
    });
});
