'use strict';

angular.module('rhmaApp')
  .controller('MainCtrl', function ($scope, $translate, LocalizationService) {
    $translate.use(LocalizationService.favoriteLanguage);

  });
