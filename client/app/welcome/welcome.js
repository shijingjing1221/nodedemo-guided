'use strict';

angular.module('nodedemoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('welcome', {

        templateUrl: 'app/welcome/welcome.html',
        controller: 'WelcomeCtrl'
      });
  });
