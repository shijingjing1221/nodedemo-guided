'use strict';

angular.module('nodedemoApp').controller('versionCtrl', function ($scope, $state, Navigation, Data) {
    $scope.navigation = Navigation;
    $scope.data = Data;
});
