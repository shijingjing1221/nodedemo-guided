'use strict';

angular.module('nodedemoApp')
    .controller('WelcomeCtrl', function ($scope, $translate, $state, Localization, Navigation) {

        $translate.use(Localization.favoriteLanguage);

        $scope.start = function () {
            return $state.go("main" + Navigation.navigation.currentMenu.link);
        };

    });
