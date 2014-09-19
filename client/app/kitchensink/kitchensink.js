'use strict';

angular.module('rhlabsangularApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kitchensink', {
        url: '/kitchensink',
        templateUrl: 'app/kitchensink/kitchensink.html',
        controller: 'KitchensinkCtrl'
      });
  });