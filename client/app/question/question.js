'use strict';

angular.module('nodedemoApp').config(function ($stateProvider) {
    $stateProvider.state('main.question', {
        url: '',
        templateUrl: 'app/question/question.html',
        controller: 'questionCtrl'
    });
});