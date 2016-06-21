'use strict';

angular.module('nodedemoApp')
  .controller('MainCtrl', function ($scope, $translate, LocalizationService) {
    $translate.use(LocalizationService.favoriteLanguage);

    $scope.test = "nodedemo";

  });
