'use strict';

angular.module('rhmaApp', [
  'ui.router',
  'ui.bootstrap',
  'ngFileUpload'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
