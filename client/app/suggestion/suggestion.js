'use strict';

angular.module('nodedemoApp').config(function ($stateProvider) {
    $stateProvider.state('main.suggestion', {
        templateUrl: 'app/suggestion/suggestion.html',
        controller: 'suggestionCtrl'
    });
});