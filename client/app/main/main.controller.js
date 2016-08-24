'use strict';

angular.module('nodedemoApp')
    .controller('MainCtrl', function($scope, $translate, $state, Localization, Navigation) {

        $translate.use(Localization.favoriteLanguage);
        $scope.navigation = Navigation;


        $scope.isActive = function(route) {
            return $state.is('main' + route);
        };
        $scope.isShown = function(step) {
            return step <= Navigation.navigation.maxStep;
        };
        $scope.test = "nodedemo";

    });
