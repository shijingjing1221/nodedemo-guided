'use strict';

angular.module('nodedemoApp', [
  'ui.router',
  'ui.bootstrap',
  'ngCookies',
  'pascalprecht.translate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }).config(function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'assets/languages/messages_',
    suffix: '.json'
  });
  $translateProvider.useSanitizeValueStrategy(null);
});
